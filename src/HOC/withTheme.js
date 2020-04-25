import React from "react";
import ThemeContext from "../context/ThemeContext";

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <WrappedComponent
            {...props}
            night={theme.night}
            onToggleTheme={theme.onToggleTheme}
          />
        )}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
