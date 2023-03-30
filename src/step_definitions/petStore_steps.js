// eslint-disable-next-line no-undef
/* eslint-disable no-undef */
const { I, jsonSchema, responseValidation, qaConfig } = inject()
const number = require('../Utils/variableRandom/randomNumber')
const name = require('../Utils/variableRandom/randomName')

const firstName = name.getFirstName()
const fullName = name.getFullName()
const numberId = number.getNumberId()
const numberCategory = number.getNumberCategory()
const numberTags = number.getNumberTags()

Given('that the user registers the Pet', async () => {
  const responsePost = await I.sendPostRequest(
    `/v2/pet`,
    qaConfig.petStore.payload,
    (qaConfig.petStore.payload.id = numberId),
    (qaConfig.petStore.payload.category.id = numberCategory),
    (qaConfig.petStore.payload.name = firstName),
    (qaConfig.petStore.payload.tags.id = numberTags),
    (qaConfig.petStore.payload.tags.name = fullName),
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

  console.log(responsePost)
})

When('the user updates the Pets registration', async () => {
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

  console.log(responsePut)
})

When('the user deletes the Pets record', async () => {
  const payloadDelete = await I.sendDeleteRequest(`/v2/pet/ ${numberId}`)

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

  console.log(payloadDelete)
})

Then('the pet query will reflect', async () => {
  const payloadGet = await I.sendGetRequest(`/v2/pet/ ${numberId}`)

  responseValidation.validationStatus(200)
  responseValidation.dontSeeCode(422)
  responseValidation.validateTimeout(1000)
  // jsonSchema.complexJsonStructuresPOST()
  // jsonSchema.containsKeysPOST()
  // responseValidation.responseCallBackPOST()

  console.log(payloadGet)
})
