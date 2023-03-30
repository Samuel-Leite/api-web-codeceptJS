const { I } = inject()

module.exports = {
  buttons: {
    removeProduct: '//*[contains(text(),"Remove")]',
    continueShopping: '//input[@id = "continue"]',
    checkout: '//*[contains(text(),"Checkout")]',
    cancel: '//button[@id = "cancel"]',
    finish: '//button[@id = "finish"]'
  },

  fields: {
    firstName: '//input[@id = "first-name"]',
    lastName: '//input[@id = "last-name"]',
    postalCode: '//input[@id = "postal-code"]'
  },

  message: {
    paymentSuccess: '//*[contains(text(),"Thank you for your order!")]'
  },

  checkoutProduct() {
    I.click(this.buttons.checkout)
    I.wait(3)
  },

  dataBuyer(txtFirstName, txtLastName, txtPostalCode) {
    I.fillField(this.fields.firstName, txtFirstName)
    I.fillField(this.fields.lastName, txtLastName)
    I.fillField(this.fields.postalCode, txtPostalCode)
    I.click(this.buttons.continueShopping)
    I.wait(3)
  },

  completePayment() {
    I.waitForElement(this.buttons.finish)
    I.click(this.buttons.finish)
    I.wait(3)
    I.waitForElement(this.message.paymentSuccess)
    I.seeElement(this.message.paymentSuccess)
    I.wait(3)
  }
}
