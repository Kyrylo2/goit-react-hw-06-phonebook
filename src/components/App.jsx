import ContactsForm from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';

import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.contactList);

  const filterRedux = useSelector(state => state.filter);

  const contactsFilterData = filterData =>
    filterData.filter(el => el.name.toLowerCase().includes(filterRedux));

  return (
    <>
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
        gutterBottom
        align="center"
      >
        Phonebook
      </Typography>

      <ContactsForm />

      {contacts.length > 1 || filterRedux !== '' ? <Filter /> : null}

      {contacts.length > 0 && (
        <ContactList contacts={contactsFilterData(contacts)} />
      )}
    </>
  );
}
