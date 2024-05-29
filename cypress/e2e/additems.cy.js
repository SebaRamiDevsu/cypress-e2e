import { LoginMethods } from "./pages/login/login.methods"
import { LoginData } from "./pages/login/login.data"
import { HomeMethods } from "./pages/home/home.methods"
import { HomeData } from "./pages/home/home.data"
import { Logger } from "./util/logger"

describe('Test only for adding items to the cart', () => {

  // Test for only adding 2 items to cart
  it('Add 2 items to cart', () => {
    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze Page')
    cy.visit('/')
    Logger.stepNumber(2)
    Logger.step('Do the login')
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)
    Logger.stepNumber(3)
    Logger.step('Add the first product to the cart')
    HomeMethods.addProductToCard(HomeData.categorie.phones, HomeData.productsCatPhone.nexus6)
    Logger.stepNumber(4)
    Logger.step('Add the second product to the cart')
    HomeMethods.addProductToCard(HomeData.categorie.laptops, HomeData.productsCatLaptops.sonyVaioi5)
    Logger.stepNumber(5)
    Logger.step('Go to the cart')
    HomeMethods.goToCart()
  })
})