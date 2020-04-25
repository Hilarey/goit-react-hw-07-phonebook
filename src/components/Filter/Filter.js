import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import contactsActions from "../../redux/phonebook/phonebookActions";
import styles from "./Filter.module.css";

const Filter = ({ contacts, value, onFilterChange, night }) => {
  if (contacts.length > 1) {
    return (
      <div>
        <h4 className={night ? styles.night : null}>Find contacts by name</h4>
        <input
          type="text"
          value={value}
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Поиск контакта"
        />
      </div>
    );
  }
  return null;
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    value: state.phonebook.filter,
    contacts: state.phonebook.contacts,
  };
};

const mapDispatchToProps = {
  onFilterChange: contactsActions.handleFilterChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Filter));
