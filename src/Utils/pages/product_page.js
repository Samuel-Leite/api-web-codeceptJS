// eslint-disable-next-line no-undef
const { I } = inject()

module.exports = {
  homeMenu: {
    addCart: '//*[contains(text(),"Add to cart")]',
    pageBack: '//*[contains(text(),"Back to products")]'
  },

  products: {
    backPack: '//*[contains(text(),"Sauce Labs Backpack")]',
    bikeLight: '//*[contains(text(),"Sauce Labs Bike Light")]',
    boltTShirt: '//*[contains(text(),"Sauce Labs Bolt T-Shirt")]',
    fleeceJacket: '//*[contains(text(),"Sauce Labs Fleece Jacket")]',
    onesie: '//*[contains(text(),"Sauce Labs Onesie")]',
    tShirtRED: '//*[contains(text(),"Test.allTheThings() T-Shirt (Red)")]'
  },

  addBackpackToCart() {
    I.wait(2)
    I.click(this.products.backPack)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  addBikeLightToCart() {
    I.wait(2)
    I.click(this.products.bikeLight)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  addBoltTShirtToCart() {
    I.wait(2)
    I.click(this.products.boltTShirt)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  addFleeceJacketToCart() {
    I.wait(2)
    I.click(this.products.fleeceJacket)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  addOnesieToCart() {
    I.wait(2)
    I.click(this.products.onesie)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  addTShirtREDToCart() {
    I.wait(2)
    I.click(this.products.tShirtRED)
    I.wait(2)
    I.click(this.homeMenu.addCart)
    I.wait(3)
  },

  backMenu() {
    I.click(this.homeMenu.pageBack)
    I.wait(3)
  }
}
