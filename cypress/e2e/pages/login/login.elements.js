export class LoginElements{
    static get textboxes(){
        return{
            get username(){
                return cy.get('#loginusername');
            },
            get password(){
                return cy.get('#loginpassword')
            }
        }
    }
    static get buttons(){
        return {
            get close(){
                return cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary');
            },
            get login(){
                return cy.contains("button", "Log in");
            }
        }
    }
}