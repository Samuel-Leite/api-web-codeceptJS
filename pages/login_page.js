const { I } = inject()

module.exports = {
  fields: {
    userName: '//input[@id = "user-name"]',
    password: '//input[@id = "password"]'
  },

  button: {
    enter: '//input[@id = "login-button"]'
  },

  loginApp(userName, password) {
    I.amOnPage('/')
    I.waitForElement(this.fields.userName, 3)
    I.fillField(this.fields.userName, userName)
    I.fillField(this.fields.password, password)
    I.click(this.button.enter)
    I.wait(2)
  }
}
