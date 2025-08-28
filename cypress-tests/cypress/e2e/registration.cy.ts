import RegistrationFormData from '../pages/registrationFormData';
import { faker } from '@faker-js/faker'

describe('Registration test', () => {
  it('Should register a new user with valid credentials', () => {
    cy.visit('/auth/register', { failOnStatusCode: false })

    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0];
    const password = faker.internet.password() + '@!';
    const phoneNumber = faker.string.numeric(9);
    const form = new RegistrationFormData()

    form.firstNameInput().type(faker.person.firstName())
    form.lastNameInput().type(faker.person.lastName())
    form.dateOfBirthInput().type(birthDate)
    form.streetInput().type(faker.location.streetAddress())
    form.postCodeInput().type(faker.location.zipCode())
    form.cityInput().type(faker.location.city())
    form.stateInput().type(faker.location.state())
    form.countryInput().select(faker.location.countryCode())
    form.phoneInput().type(phoneNumber)
    form.emailInput().type(faker.internet.email())
    form.passwordInput().type(password)
    form.registerButton().click()

    cy.url().should('include', 'https://practicesoftwaretesting.com/auth/login')
  })

  it('Should register a new user with invalid password', () => {
    cy.visit('/auth/register')

    const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0];
    const password = faker.internet.password();
    const phoneNumber = faker.string.numeric(9);
    const form = new RegistrationFormData()

    form.firstNameInput().type(faker.person.firstName())
    form.lastNameInput().type(faker.person.lastName())
    form.dateOfBirthInput().type(birthDate)
    form.streetInput().type(faker.location.streetAddress())
    form.postCodeInput().type(faker.location.zipCode())
    form.cityInput().type(faker.location.city())
    form.stateInput().type(faker.location.state())
    form.countryInput().select(faker.location.countryCode())
    form.phoneInput().type(phoneNumber)
    form.emailInput().type(faker.internet.email())
    form.passwordInput().type(password)
    form.registerButton().click()

    form.errorMessage().should('be.visible').contains('Password can not include invalid characters.')
  })
})

