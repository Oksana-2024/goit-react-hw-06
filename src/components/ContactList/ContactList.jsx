import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  return (
    <ul className={s.contactsList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().match(filter.toLowerCase()))
        .map(({ id, number, name }) => (
          <li className={s.contactItem} key={id}>
            <Contact
              number={number}
              name={name}
              onDelete={() => dispatch(deleteContact(id))}
            />
          </li>
        ))}
    </ul>
  );
};
export default ContactList;
