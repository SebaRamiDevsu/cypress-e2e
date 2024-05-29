import { LoginMethods } from "./pages/login/login.methods"
import { LoginData } from "./pages/login/login.data"
import { HomeMethods } from "./pages/home/home.methods"
import { HomeData } from "./pages/home/home.data"
import { CartMethods } from "./pages/cart/cart.methods"

describe('Add items to carts > check cart > confirm purchase > validate purchase', () => {
    it('confirm purchase', () => {
      cy.visit('/')
      LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)
      HomeMethods.addProductToCard(HomeData.categorie.phones, HomeData.productsCatPhone.nexus6)
      HomeMethods.addProductToCard(HomeData.categorie.laptops, HomeData.productsCatLaptops.sonyVaioi5)
      CartMethods.completePlaceOrderModal()
    })
  })