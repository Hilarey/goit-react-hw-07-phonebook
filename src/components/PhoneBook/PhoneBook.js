import React, { Component } from "react";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import withTheme from "../../HOC/withTheme";
import ToggleTheme from "../ToggleTheme/ToggleTheme.js";

import phonebookOperations from "../../redux/phonebook/phonebookOperations";
import phonebookSelectors from "../../redux/phonebook/phonebookSelectors";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

class PhoneBook extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    const { isLoadingContacts, error } = this.props;
    return (
      <>
        <ToggleTheme />
        {isLoadingContacts && (
          <Loader type="Puff" color="#00BFFF" height={50} width={50} />
        )}
        {error === {} && <p>Whoops, something went wrong: {error.message}</p>}
        <ContactForm />
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: phonebookSelectors.getLoading(state),
  error: phonebookSelectors.getError(state),
});

const mapDispatchToProps = {
  onFetchTasks: phonebookOperations.fetchContacts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(PhoneBook));
