import SpecPage from './pages/specPage';
import user from '../fixtures/user.json';

describe('template spec', () => {
  it('passes', () => {
   cy.visit('');
   cy.wait(3000);
   SpecPage.acceptCookies();
   SpecPage.clickApply();
   SpecPage.elements.applicationTitle().contains('Apply for #11704 API Automation Tester');
   SpecPage.typeFirstName(user.firstName);
   SpecPage.typeLastName(user.lastName);
   SpecPage.typeEmail(user.email);
   SpecPage.typePhone(user.phone);
   SpecPage.typeCLetter(user.cLetter);
   SpecPage.selectFile('cypress/fixtures/OmarRodriguez-Resume.pdf');
   cy.wait(3000);
   SpecPage.elements.resuneName().contains('OmarRodriguez-Resume.pdf');
   SpecPage.typeDesaireGross(user.salaryD);
   SpecPage.checkPrivacy();
   SpecPage.selectSponsorship();
   SpecPage.clickSubmit();
  })
})