import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/actions';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactListt/ContactList';
import { Section } from 'components/Sectio/Section';
import { Container } from './App.styled';

export function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() =>{
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}









  
 

 

 