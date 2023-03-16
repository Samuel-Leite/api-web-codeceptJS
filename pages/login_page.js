const { I, qaConfig } = inject()

module.exports = {
  fields: {
    userName: '//input[@id = "user-name"]',
    password: '//input[@id = "password"]'
  },

  button: {
    enter: '//input[@id = "login-button"]'
  },

  loginApp(userName, password) {
    I.amOnPage(qaConfig.swagLabs.baseUrl)
    I.waitForElement(this.fields.userName, 3)
    I.fillField(this.fields.userName, userName)
    I.fillField(this.fields.password, password)
    I.click(this.button.enter)
    I.wait(2)
  }
}
