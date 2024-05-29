import { LoginMethods } from "./pages/login/login.methods"
import { LoginData } from "./pages/login/login.data"

describe('Login only test', () => {

  // Test for log in
  it('Login', () => {
    cy.visit('/')
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)
  })
})