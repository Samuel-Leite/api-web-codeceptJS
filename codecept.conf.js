exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com',
      show: true,
      browser: 'chromium'
    },
    REST: {
      endpoint: 'https://petstore.swagger.io'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js',
    loginPage: './src/Utils/pages/login_page.js',
    homePage: './src/Utils/pages/home_page.js',
    productPage: './src/Utils/pages/product_page.js',
    cartPage: './src/Utils/pages/cart_page.js',
    jsonSchema: './src/Utils/api/jsonSchema.js',
    responseValidation: './src/Utils/api/responseValidation.js',
    qaConfig: './src/configs/qa.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './src/features/petStore.feature',
    steps: ['./src/step_definitions/petStore_steps.js']

    // features: './src/features/swagLabs.feature',
    // steps: ['./src/step_definitions/swagLabs_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy'
    },
    stepByStepReport: {
      enabled: true,
      screenshotsForAllureReport: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  // tests: './src/tests/api/pet_store_test.js',
  // tests: './src/tests/ui/swag_lab_test.js',
  name: 'web-codeceptjs'
}
