import { LoginMethods } from "./pages/login/login.methods"
import { LoginData } from "./pages/login/login.data"
import { Logger } from "./util/logger"

describe('Login only test', () => {

  // Test for log in
  it('Login', () => {
    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze Page')
    cy.visit('/')
    Logger.stepNumber(2)
    Logger.step('Do the login')
    LoginMethods.login(LoginData.validCredentials.username, LoginData.validCredentials.password)
  })
})