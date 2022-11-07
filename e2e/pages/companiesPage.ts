import {Page} from 'puppeteer';
import companyData from 'src/e2e/data/companySimpleActions.json';
import accountData from 'src/e2e/data/accountTestData.json';
import {submit} from '../components/buttons';
import {openAssignToUserCaretDown, selectValueOfDropdown} from '../components/dropdowns';

/**
 * List of elements on the Companies page
 *
 * @author Tatiana Khokholko
 */
export const companiesPage = {
  pageRoot: {
    value: 'div[data-testid="CompaniesPage-Root"]'
  },
  createPropertiesCompany: {
    createCompanyLabel: {
      value: './/h1[normalize-space(.)="Create company"]'
    },
    createDomainNameLabel: {
      value: './/label[normalize-space(.)="Domain name"]'
    },
    createCompanyNameLabel: {
      value: './/label[normalize-space(.)="Company Name"]'
    },
    createAssignedUserLabel: {
      value: './/label[normalize-space(.)="Assign to user"]'
    },
    createDomainNameInput: {
      value: 'input[data-testid="CreateCompanyForm-DomainNameTextField"]'
    },
    createCompanyNameInput: {
      value: 'input[data-testid="CreateCompanyForm-CompanyNameTextField"]'
    },
    createAssignedUserInput: {
      value: 'input[data-testid="CreateCompanyForm-SelectUserComboBox"]'
    }
  },
  propertiesCompany: {
    domainNameLabel: {
      value: './/label[normalize-space(text())="Domains"]'
    },
    domainNameInput: {
      value: 'input[data-testid="DomainsForm-DomainsTextField"]'
    },
    companyNameLabel: {
      value: './/label[normalize-space(text())="Company name"]'
    },
    companyNameInput: {
      value: 'input[data-testid="CompanyName-SingleLinePropertyField"]'
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
    annualRevenueLabel: {
      value: './/label[normalize-space(text())="Annual revenue"]'
    },
    annualRevenueInput: {
      value: 'input[data-testid="AnnualRevenue-MonetaryPropertyField"]'
    },
    descriptionLabel: {
      value: './/label[normalize-space(text())="Description"]'
    },
    descriptionInput: {
      value: 'input[data-testid="Description-MultiLinePropertyField"]'
    },
    industryLabel: {
      value: './/label[normalize-space(text())="Industry"]'
    },
    typeLabel: {
      value: './/label[normalize-space(text())="Type"]'
    },
    employeeCountLabel: {
      value: './/label[normalize-space(text())="Employee count"]'
    },
    employeeCountInput: {
      value: 'input[data-testid="EmployeeCount-NumericPropertyField"]'
    },
    addressLine1Label: {
      value: './/label[normalize-space(text())="Street address (Line 1)"]'
    },
    addressLine1Input: {
      value: 'input[data-testid="StreetAddressLine1-SingleLinePropertyField"]'
    },
    addressLine2Label: {
      value: './/label[normalize-space(text())="Street address (Line 2)"]'
    },
    addressLine2Input: {
      value: 'input[data-testid="StreetAddressLine2-SingleLinePropertyField"]'
    },
    zipLabel: {
      value: './/label[normalize-space(text())="Zip"]'
    },
    zipInput: {
      value: 'input[data-testid="Zip-SingleLinePropertyField"]'
    },
    cityLabel: {
      value: './/label[normalize-space(text())="City"]'
    },
    cityInput: {
      value: 'input[data-testid="City-SingleLinePropertyField"]'
    },
    stateLabel: {
      value: './/label[normalize-space(text())="State"]'
    },
    stateInput: {
      value: 'input[data-testid="State-SingleLinePropertyField"]'
    },
    linkedInUrlLabel: {
      value: './/label[normalize-space(text())="LinkedIn URL"]'
    },
    linkedInUrlInput: {
      value: 'input[data-testid="LinkedInUrl-SingleLinePropertyField"]'
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
 * Create new company, fill in the required fields to create
 *
 * @param page instance
 * @author Tatiana Khokholko
 */
export async function createNewCompany(page: Page) {
  await page.waitForXPath(companiesPage.createPropertiesCompany.createCompanyLabel.value);
  const companyNameField = await page.$(companiesPage.createPropertiesCompany.createCompanyNameInput.value);
  await companyNameField?.type(companyData.Company1.name);

  await page.waitForXPath(companiesPage.createPropertiesCompany.createDomainNameLabel.value);
  const domainNameField = await page.$(companiesPage.createPropertiesCompany.createDomainNameInput.value);
  await domainNameField?.type(companyData.Company1.domain);

  const userName = accountData.tenantAuto01.tenant;
  await openAssignToUserCaretDown(page);
  await selectValueOfDropdown(page, userName);
  await submit(page);
}
