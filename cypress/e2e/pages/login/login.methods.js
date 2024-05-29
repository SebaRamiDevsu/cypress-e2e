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
        this.openLogin()
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickLoginButton(username)
        this.validateLogin(username)
    }
}