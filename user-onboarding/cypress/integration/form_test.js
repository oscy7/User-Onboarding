describe('User On Boarding App', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=username'); 
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheck = () => cy.get('input[name=tos]');


    it('Type name in Name', () => {
        nameInput()
            .should('have.value', '')
            .type('Dune is awesome')
            .should('have.value', 'Dune is awesome')
    })

    it('Type an email in Email', () => {
        emailInput()
            .should('have.value','')
            .type('PaulAtreides@Dune.com')
            .should('have.value', 'PaulAtreides@Dune.com')
    })

    it('Type a password in Password', () => {
        passwordInput()
            .should('have.value', '')
            .type('Dune123')
            .should('have.value', 'Dune123')
    })

    it('Check to see if user can check ToS box', () => {
        tosCheck().check();
    })
    
    it('The submit button enables when all inputs are filled out', () => {
        nameInput().type('Paul A');
        emailInput().type('Paul@Dune.com');
        passwordInput().type('Dune1234')
        cy.contains('Submit your Character!').click();
    })

    it('Form should show validation requirements to submit', () => {
        nameInput().type('Du');
        emailInput().type('Pau');
        passwordInput().type('Dune')
        cy.contains('must be atleast 3 characters long')
        cy.contains('Must enter an email')
        cy.contains('must be 10 char. long')
       
    })

})