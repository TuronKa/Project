export default class RegistrationFormData {
    firstNameInput = () => cy.get('[data-test="first-name"]');
    lastNameInput = () => cy.get('[data-test="last-name"]');
    dateOfBirthInput = () => cy.get('[data-test="dob"]');
    streetInput = () => cy.get('[data-test="street"]');
    postCodeInput = () => cy.get('[data-test="postal_code"]');
    cityInput = () => cy.get('[data-test="city"]');
    stateInput = () => cy.get('[data-test="state"]');
    countryInput = () => cy.get('[data-test="country"]');
    phoneInput = () => cy.get('[data-test="phone"]');
    emailInput = () => cy.get('[data-test="email"]');
    passwordInput = () => cy.get('[data-test="password"]');

    registerButton = () => cy.get('[data-test="register-submit"]');

    errorMessage = () => cy.get('[data-test="password-error"]');

}