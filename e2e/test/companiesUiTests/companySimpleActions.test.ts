import {getkVisibleCreatedItem} from 'src/e2e/components/tables';
import companyData from 'src/e2e/data/companySimpleActions.json';
import {create} from '../../components/buttons';
import {companiesPage, createNewCompany} from '../../pages/companiesPage';
import {openCompanies} from '../../pages/dashboardPage';
import {login} from '../../pages/loginPage';
import {openSell} from '../../pages/mainPage';
import {global} from '../baseDriverInitializeTest';

/**
 * The set of tests for creating, editing and deleting companies
 *
 * @author Tatiana Khokholko
 */
describe('Create/update/delete companies', () => {
  const pageProvider = global();

  test('Should create company', async () => {
    await login(pageProvider());
    await openSell(pageProvider());
    await openCompanies(pageProvider());
    await create(pageProvider());
    await createNewCompany(pageProvider());
    expect(await pageProvider().$$eval(companiesPage.pageRoot.value, (el) => !!el)).toBeTruthy();
    await getkVisibleCreatedItem(pageProvider(), companyData.Company1.name);
  }, 40000);
});
