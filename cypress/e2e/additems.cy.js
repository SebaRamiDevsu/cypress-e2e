import { LoginMethods } from "./pages/login/login.methods"
import { LoginData } from "./pages/login/login.data"
import { HomeMethods } from "./pages/home/home.methods"
import { HomeData } from "./pages/home/home.data"

describe('Test only for adding items to the cart', () => {

  // Test for only adding 2 items to cart
  it('Add 2 items to cart', () => {
    cy.visit('/')
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)
    HomeMethods.addProductToCard(HomeData.categorie.phones, HomeData.productsCatPhone.nexus6)
    HomeMethods.addProductToCard(HomeData.categorie.laptops, HomeData.productsCatLaptops.sonyVaioi5)
    HomeMethods.goToCart()
  })
})