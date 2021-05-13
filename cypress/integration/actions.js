//pruebas en el store de redux
describe("LOAD OK", function() {
    it('has expected state on load', () => {
        cy.visit('/')
        cy.window().its('store').invoke('getState').should('deep.equal', {
            song:"", selectedSong:"",  //initialState
        })
      })
  });