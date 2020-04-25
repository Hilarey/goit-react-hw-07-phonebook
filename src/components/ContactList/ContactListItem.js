import React from "react";
import { connect } from "react-redux";
import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import styles from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemoveContact, night }) => {
  return (
    <li className={styles.item}>
      <p className={night ? styles.night : null}>
        {name}: {number}
        <button className={styles.button} onClick={onRemoveContact}>
          Delete Contact
        </button>
      </p>
    </li>
  );
};

// const mapStateToProps = ({ phonebook }, ownProps) => {
//   const contact = phonebook.contacts.find(({ id }) => id === ownProps.id);
//   return { ...contact };
// };

const mapStateToProps = (state, ownProps) => {
  const contact = phonebookSelectors.getContactById(state, ownProps.id);

  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () =>
    dispatch(phonebookOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
