import {Page} from 'puppeteer';
import data from 'src/e2e/data/accountTestData.json';

/**
 * List of elements on the Login page
 *
 * @author Tatiana Khokholko
 */
export const loginPage = {
  loginEmailInput: {
    value: 'input[data-testid="LoginPage-EmailTextField"]'
  },
  passwordInput: {
    value: 'input[data-testid="LoginPage-PasswordTextField"]'
  },
  loginPageForm: {
    value: 'div[data-testid="LoginPage-Root"]'
  },
  loginPageLabel: {
    value: '//h1[normalize-space(text())= "Log in to Inperium"]'
  },
  submitButton: {
    value: 'button[data-testid="LoginPage-SubmitButton"]'
  },
  startMainContent: {
    value: 'div[data-testid="StartPage-Root"]'
  },
  logOutLink: {
    value: '//a[normalize-space(text())="Log out"]'
  },
  forgotPasswordLink: {
    value: '//a[normalize-space(text())="Forgot password?"]'
  },
  signUpLink: {
    value: '//a[normalize-space(text())="Sign up"]'
  }
};

/**
 * List of elements on the Reset password page
 *
 * @author Tatiana Khokholko
 */
export const forgotPasswordPage = {
  forgotPasswordLabel: {
    value: '//h1[normalize-space(text())="Reset password"]'
  },
  emailTextFieldInput: {
    value: 'input[data-testid="ForgotPasswordPage-EmailTextField"]'
  },
  resetPasswordButton: {
    value: 'button[data-testid=ForgotPasswordPage-SubmitButton]'
  },
  backToLoginPage: {
    value: 'a[href$="login"]'
  }
};

const titleLoginPage = 'Inperium Account';

export async function login(page: Page) {
  const email = await page.waitForSelector(loginPage.loginEmailInput.value);
  const password = await page.waitForSelector(loginPage.passwordInput.value);
  await email?.type(data.tenantAuto01.login);
  await password?.type(data.tenantAuto01.password);
  await page.click(loginPage.submitButton.value);
}

export async function logout(page: Page) {
  await page.$$eval(loginPage.startMainContent.value, (el) => !!el);
  const logOutLink = await page.waitForXPath(loginPage.logOutLink.value);
  await logOutLink?.click();
}

export async function checkLoginLabel(page: Page) {
  const loginLabel = await page.waitForXPath(loginPage.loginPageLabel.value);
  expect(loginLabel).toBeTruthy();
}

export async function checkLoginLabelAfterLogout(page: Page) {
  const loginLabel = await page.waitForXPath(loginPage.loginPageLabel.value);
  expect(loginLabel).toBeTruthy();
}

export async function checkTitlePage(page: Page) {
  const title = await page.title();
  expect(title).toBe(titleLoginPage);
}
