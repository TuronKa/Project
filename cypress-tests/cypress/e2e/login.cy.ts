import { faker } from '@faker-js/faker';
import LoginData from '../pages/loginData';

describe('Login test', () => {
    it('Should log in with valid credentials', () => {
        cy.visit('/auth/login', { failOnStatusCode: false });

        const loginData = new LoginData();

        cy.fixture('loginUser.env.json').then((user) => {
            loginData.loginEmailInput().type(user.email);
            loginData.loginPasswordInput().type(user.password);
            loginData.loginButton().click();

            cy.url().should('include', '/account');
            loginData.myAccountButton().should('be.visible').contains('Jane Doe');
        });
    });

    it('Should show an error message for invalid credentials', () => {
        cy.visit('/auth/login');

        const loginData = new LoginData();

        cy.fixture('loginUser.env.json').then((user) => {
            loginData.loginEmailInput().type(user.email);
            loginData.loginPasswordInput().type(user.invalidPassword);
            loginData.loginButton().click();

            cy.url().should('include', 'login');
            loginData.loginErrorMessage().should('be.visible').contains('Invalid email or password');
        });
    });
});

