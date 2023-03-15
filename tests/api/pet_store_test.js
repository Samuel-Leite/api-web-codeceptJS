Feature('Pet Store registration system')

const { jsonSchema, responseValidation } = inject()
const name = require('../../Utils/name')
const number = require('../../Utils/code')

const firstName = name.getFirstName()
const fullName = name.getFullName()
const numberId = number.getNumberId()
const numberCategory = number.getNumberCategory()
const numberTags = number.getNumberTags()

const payload = require('../../resource/data/payload.json')

Scenario('Registers the Pet', async ({ I }) => {
  const responsePost = await I.sendPostRequest(
    `/v2/pet`,
    payload,
    (payload.id = numberId),
    (payload.category.id = numberCategory),
    (payload.name = firstName),
    (payload.tags.id = numberTags),
    (payload.tags.name = fullName),
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  )

  responseValidation.validationStatus(200)
  responseValidation.dontSeeCode(500)
  responseValidation.validateTimeout(1000)
  jsonSchema.complexJsonStructuresPOST()
  jsonSchema.containsKeysPOST()
  responseValidation.responseCallBackPOST()
  responseValidation.responseContains()

  // console.log(responsePost)
})

Scenario('Updates the Pets registration', async ({ I }) => {
  const responsePut = await I.sendPutRequest(
    `/v2/pet`,
    {
      id: numberId,
      category: { id: numberCategory, name: 'Cat' },
      name: firstName,
      photoUrls: ['photoURL'],
      tags: [{ id: numberTags, name: fullName }],
      status: 'unavailable'
    },
    {
      'Content-type': 'application/json; charset=UTF-8'
    }
  )

  responseValidation.validationSuccessfulStatus()
  responseValidation.dontSeeCode(422)
  responseValidation.validateTimeout(1000)
  jsonSchema.complexJsonStructuresPOST()
  jsonSchema.containsKeysPOST()
  responseValidation.responseCallBackPOST()

  // console.log(responsePut)
})

Scenario('Pet registration consultation', async ({ I }) => {
  const payloadGet = await I.sendGetRequest(`/v2/pet/` + numberId)

  responseValidation.validationStatus(200)
  responseValidation.dontSeeCode(422)
  responseValidation.validateTimeout(1000)
  jsonSchema.complexJsonStructuresPOST()
  jsonSchema.containsKeysPOST()
  responseValidation.responseCallBackPOST()

  // console.log(payloadGet)
})

Scenario('Deletion of the Pets registration', async ({ I }) => {
  const payloadDelete = await I.sendDeleteRequest(`/v2/pet/` + numberId)

  responseValidation.validationStatus(200)
  responseValidation.dontSeeCode(500)
  responseValidation.validateTimeout(1000)
  jsonSchema.complexJsonStructuresDELETE()
  jsonSchema.containsKeysDELETE()
  responseValidation.responseCallBackDELETE()

  I.seeResponseContainsJson({
    code: 200,
    type: 'unknown',
    message: numberId.toString()
  })

  // console.log(payloadDelete)
})
