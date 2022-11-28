import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <Contact contact={contacts} deleteBtn={deleteContact} />
    </ul>
  );
};
