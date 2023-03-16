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
    loginPage: './pages/login_page.js',
    homePage: './pages/home_page.js',
    productPage: './pages/product_page.js',
    cartPage: './pages/cart_page.js',
    jsonSchema: './resource/api/jsonSchema.js',
    responseValidation: './resource/api/responseValidation.js',
    qaConfig: './configs/qa.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    // features: './features/petStore.feature',
    // steps: ['./step_definitions/petStore_steps.js']

    features: './features/swagLabs.feature',
    steps: ['./step_definitions/swagLabs_steps.js']
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
  // tests: './tests/api/pet_store_test.js',
  // tests: './tests/ui/swag_lab_test.js',
  name: 'web-codeceptjs'
}
