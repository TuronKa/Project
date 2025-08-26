export default class LoginData {
    loginEmailInput = () => cy.get('[data-test="email"]');
    loginPasswordInput = () => cy.get('[data-test="password"]');
    loginButton = () => cy.get('[data-test="login-submit"]');

    myAccountButton = () => cy.get('[data-test="nav-menu"]');
    loginErrorMessage = () => cy.get('[data-test="login-error"]');

}
