import {
  checkLoginLabel,
  checkLoginLabelAfterLogout,
  checkTitlePage,
  login,
  loginPage,
  logout,
  forgotPasswordPage
} from '../../pages/loginPage';
import {global} from '../baseDriverInitializeTest';

/**
 * The set of tests for simple action login/logout pages
 *
 * @author Tatiana Khokholko
 */
describe('Block tests for Login page', () => {
  const pageProvider = global();

  test('Should <title> is correct', async () => {
    await checkTitlePage(pageProvider());
  });

  test('Should login/logout', async () => {
    await checkLoginLabel(pageProvider());
    await login(pageProvider());

    const startMainContent = await pageProvider().$$eval(loginPage.startMainContent.value, (el) => !!el);
    expect(startMainContent).toBeTruthy();

    await logout(pageProvider());
    await checkLoginLabelAfterLogout(pageProvider());
  }, 10000);

  test('Should "forgot password -> back to start page" functionality', async () => {
    await checkLoginLabel(pageProvider());
    const forgotPasswordButton = await pageProvider().waitForXPath(loginPage.forgotPasswordLink.value);
    await forgotPasswordButton?.click();

    const forgotPasswordLabel = await pageProvider().waitForXPath(forgotPasswordPage.forgotPasswordLabel.value);
    expect(forgotPasswordLabel).toBeTruthy();

    const emailForRecovery = await pageProvider().$$eval(forgotPasswordPage.emailTextFieldInput.value, (el) => !!el);
    expect(emailForRecovery).toBeTruthy();

    const resetPasswordButton = await pageProvider().$$eval(forgotPasswordPage.resetPasswordButton.value, (el) => !!el);
    expect(resetPasswordButton).toBeTruthy();

    await pageProvider().click(forgotPasswordPage.backToLoginPage.value);
    await checkLoginLabel(pageProvider());
  }, 30000);
});
