import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{

    static openLogin(){
        cy.get('#login2').click()
    }
    static insertUsername(username){
        // Utilizo invoke porque cuando uso la funcion type el navegador no escribe a veces todo el texto
        LoginElements.textboxes.username.invoke('val', username)
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickLoginButton(){
        LoginElements.buttons.login.click()
    }
    static validateLogin(username){
        cy.get('#nameofuser').should('have.text', 'Welcome ' + username)
    }
    static login(username, password){
        Logger.subStep('Open login modal')
        this.openLogin()

        Logger.subStep('Insert username')
        this.insertUsername(username)

        Logger.subStep('Insert password')
        this.insertPassword(password)

        Logger.subStep('Click on Login')
        this.clickLoginButton(username)

        Logger.subStep('Validate if login was successfull')
        this.validateLogin(username)
    }
}