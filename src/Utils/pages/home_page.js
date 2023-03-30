// eslint-disable-next-line no-undef
const { I } = inject()

module.exports = {
  homeMenu: {
    menu: '//*[contains(@class, "app_logo")]',
    cart: '//*[contains(@class, "shopping_cart_link")]'
  },

  checkLoginSuccess() {
    I.waitForElement(this.homeMenu.menu, 5)
    I.seeElement(this.homeMenu.menu)
  },

  checkCart() {
    I.click(this.homeMenu.cart)
    I.wait(2)
  }
}
