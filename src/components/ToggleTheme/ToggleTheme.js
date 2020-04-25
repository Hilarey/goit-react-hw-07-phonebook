import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withTheme from "../../HOC/withTheme";
import contactsActions from "../../redux/phonebook/phonebookActions";
import styles from "./ToggleTheme.module.css";

const ToggleTheme = ({ night, onToggleTheme }) => (
  <>
    <button type="button" onClick={onToggleTheme} className={styles.button}>
      {night ? "Night Mode" : "Day Mode"}
    </button>
  </>
);

ToggleTheme.propTypes = {
  night: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  night: state.phonebook.nightMode,
});

const mapDispatchToProps = { onToggleTheme: contactsActions.handlModeToggle };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(ToggleTheme));
