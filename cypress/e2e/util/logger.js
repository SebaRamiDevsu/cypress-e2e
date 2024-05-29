export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`
        cy.allure().step(text)
    }
    static step(desciption){
        const text = `Step - ${desciption}`
        cy.allure().step(text)
    }
    static subStep(desciption){
        const text = `Step - ${desciption}`
        cy.allure().step(text)
    }
}