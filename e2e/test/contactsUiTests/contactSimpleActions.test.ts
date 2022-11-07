import {getkVisibleCreatedItem} from 'src/e2e/components/tables';
import contactData from 'src/e2e/data/contactSimpleActions.json';
import {create} from '../../components/buttons';
import {contactsPage, createNewContactWithoutCompany} from '../../pages/contactsPage';
import {openContacts} from '../../pages/dashboardPage';
import {login} from '../../pages/loginPage';
import {openSell} from '../../pages/mainPage';
import {global} from '../baseDriverInitializeTest';

/**
 * The set of tests for creating, editing and deleting contacts
 *
 * @author Tatiana Khokholko
 */
describe('Create/update/delete contacts', () => {
  const pageProvider = global();

  test('Should create contact', async () => {
    await login(pageProvider());
    await openSell(pageProvider());
    await openContacts(pageProvider());
    await create(pageProvider());
    await createNewContactWithoutCompany(pageProvider());
    expect(await pageProvider().$$eval(contactsPage.pageRoot.value, (el) => !!el)).toBeTruthy();
    await getkVisibleCreatedItem(pageProvider(), `${contactData.Contact1.firstName} ${contactData.Contact1.lastName}`);
  }, 40000);
});
