import {Page} from 'puppeteer';
import contactData from 'src/e2e/data/contactSimpleActions.json';
import {submit} from '../components/buttons';
import {openAssignToUserCaretDown, selectValueOfDropdown} from '../components/dropdowns';

/**
 * List of elements on the Contacts page
 *
 * @author Tatiana Khokholko
 */
export const contactsPage = {
  pageRoot: {
    value: 'div[data-testid="ContactsPage-Root"]'
  },
  createPropertiesContact: {
    createContactLabel: {
      value: './/h1[normalize-space(text())="Create contact"]'
    },
    createEmailLabel: {
      value: './/label[normalize-space(text())="Email"]'
    },
    createFirstNameLabel: {
      value: './/label[normalize-space(text())="First name"]'
    },
    createLastNameLabel: {
      value: './/label[normalize-space(text())="Last name"]'
    },
    createAssignedUserLabel: {
      value: './/label[normalize-space(text())="Assign to user"]'
    },
    associateWithCompanyLabel: {
      value: './/label[normalize-space(text())="Associate with company"]'
    },
    createEmailInput: {
      value: 'input[data-testid="CreateContactForm-EmailTextField"]'
    },
    createFirstNameInput: {
      value: 'input[data-testid="CreateContactForm-FirstNameTextField"]'
    },
    createLastNameInput: {
      value: 'input[data-testid="CreateContactForm-LastNameTextField"]'
    }
  },
  propertiesContact: {
    firstNameLabel: {
      value: './/label[normalize-space(text())="First name"]'
    },
    firstNameInput: {
      value: 'input[data-testid="FirstName-SingleLinePropertyField"]'
    },
    jobTitleLabel: {
      value: './/label[normalize-space(text())="Job title"]'
    },
    jobTitleInput: {
      value: 'input[data-testid="JobTitle-SingleLinePropertyField"]'
    },
    twitterUrlLabel: {
      value: './/label[normalize-space(text())="Twitter URL"]'
    },
    twitterUrlInput: {
      value: 'input[data-testid="TwitterUrl-SingleLinePropertyField"]'
    },
    facebookUrlLabel: {
      value: './/label[normalize-space(text())="Facebook URL"]'
    },
    facebookUrlInput: {
      value: 'input[data-testid="FacebookUrl-SingleLinePropertyField"]'
    },
    instagramUrlLabel: {
      value: './/label[normalize-space(text())="Instagram URL"]'
    },
    instagramUrlInput: {
      value: 'input[data-testid="InstagramUrl-SingleLinePropertyField"]'
    },
    birthdateLabel: {
      value: './/label[normalize-space(text())="Birthdate"]'
    },
    birthdateInput: {
      value: './/button[@aria-label="Calendar"]'
    },
    emailsLabel: {
      value: './/label[normalize-space(text())="Emails"]'
    },
    emailsInput: {
      value: '//TO DO'
    },
    phoneNumbersLabel: {
      value: './/label[normalize-space(text())="Phone numbers"]'
    },
    phoneNumbersInput: {
      value: '//TO DO'
    },
    lastNameLabel: {
      value: './/label[normalize-space(text())="Last name"]'
    },
    lastNameInput: {
      value: 'input[data-testid="LastName-SingleLinePropertyField"]'
    },
    countryLabel: {
      value: './/label[normalize-space(text())="Country"]'
    },
    countryInput: {
      value: 'input[data-testid="Country-DictionaryPropertyField"]'
    }
  }
};

/**
 * Create new contact, fill in the required fields to create without assign to company
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function createNewContactWithoutCompany(page: Page) {
  await page.waitForXPath(contactsPage.createPropertiesContact.createContactLabel.value);
  const emailField = await page.$(contactsPage.createPropertiesContact.createEmailInput.value);
  await emailField?.type(contactData.Contact1.email);

  await page.waitForXPath(contactsPage.createPropertiesContact.createFirstNameLabel.value);
  const firstNameField = await page.$(contactsPage.createPropertiesContact.createFirstNameInput.value);
  await firstNameField?.type(contactData.Contact1.firstName);

  await page.waitForXPath(contactsPage.createPropertiesContact.createLastNameLabel.value);
  const lastNameField = await page.$(contactsPage.createPropertiesContact.createLastNameInput.value);
  await lastNameField?.type(contactData.Contact1.lastName);

  const userNameSelect = contactData.Contact1.assignToUser;
  await openAssignToUserCaretDown(page);
  await selectValueOfDropdown(page, userNameSelect);
  await submit(page);
}
