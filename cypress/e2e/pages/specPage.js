class SpecPages{
    elements ={
        cookiesButton:()=>cy.get('.styles__buttons-container--1GIqr > .primary__default--25RCR'),
        applyButton:()=>cy.get('[data-ui="overview-apply-now"]'),
        applicationTitle:()=>cy.get('[data-ui="application-form-title"]'),
        firstNameInput:()=>cy.get('[id="firstname"]'),
        lastNameInput:()=>cy.get('[id="lastname"]'),
        emailInput:()=>cy.get('[id="email"]'),
        phoneInput:()=>cy.get('[name="phone"]'),
        coverLetterInput:()=>cy.get('[data-ui="cover_letter"]'),
        resumeFile:()=>cy.get('[data-role="dropzone"]'),
        resuneName:()=>cy.get('[data-id="filename"]'),
        desaireGross:()=>cy.get('[data-ui="QA_7187615"]'),
        optionButton:()=>cy.get('[data-ui="option"]').first(),
        sponsorshipInput:()=>cy.get('[data-ui="CA_8807"]'),
        ulRecluter:()=>cy.get('[id="input_CA_8807_listbox"]'),
        submitButton:()=>cy.get('[data-ui="application-form-submit"]')
    }

    acceptCookies(){
        this.elements.cookiesButton().click();
    }

    clickApply(){
        this.elements.applyButton().click();
    }

    typeFirstName(firstName){
        this.elements.firstNameInput().type(firstName);
    }

    typeLastName(lastName){
        this.elements.lastNameInput().type(lastName);
    }

    typeEmail(email){
        this.elements.emailInput().type(email);
    }

    typePhone(phone){
        this.elements.phoneInput().type(phone);
    }

    typeCLetter(summary){
        this.elements.coverLetterInput().type(summary);
    }

    selectFile(filePath){
        this.elements.resumeFile().selectFile(filePath,{ action: 'drag-drop' });
    }

    typeDesaireGross(grossDesaire){
        this.elements.desaireGross().type(grossDesaire);
    }

    checkPrivacy(){
        this.elements.optionButton().click();
    }

    selectSponsorship(){
        this.elements.sponsorshipInput().click();
        this.elements.sponsorshipInput().contains('No').click({force: true});

    }

    clickSubmit(){
        this.elements.submitButton().click();
    }
}
export default new SpecPages();