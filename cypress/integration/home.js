describe("renders home page", ()=>{
    it("renders fine", ()=>{
        cy.visit("/");
        cy.get("#page").should("exist");
    });
});