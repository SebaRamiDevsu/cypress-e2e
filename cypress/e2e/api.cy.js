
describe('API test for page demoblaze', () => {

    it('Create new user in Sign Up', () => {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `testname${id}`
        cy.request('POST','https://api.demoblaze.com/signup', { username:testname, password:'testtesttest'}).then(response => {
            expect(response.body).eq('')
        })
    })

    it('Create a user with the data of one already registered', () => {
        cy.request('POST','https://api.demoblaze.com/signup', { username:'1', password:'1'}).then(response => {
            expect(response.body).to.have.property('errorMessage', 'This user already exist.')
        })
    })

    it('Login with a valid user', () => {
        cy.request('POST','https://api.demoblaze.com/login', { username:'1', password:'MQ==' }).then(response => {
            expect(response.body).to.contains('Auth_token') 
            
        })
    })

    it('Login with an invalid user', () => {
        cy.request('POST','https://api.demoblaze.com/login', { username:'1', password:'1' }).then(response => {
            expect(response.body).to.have.property('errorMessage', 'Wrong password.')
        })
    })

})