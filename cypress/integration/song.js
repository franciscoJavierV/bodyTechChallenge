//first render 
describe("renders song page", ()=>{
    it("renders fine", ()=>{
        cy.visit("/song");
        cy.get("#song").should("exist");
    });
});