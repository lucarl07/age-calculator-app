// Stylesheets:
import styles from "./InputRoot.module.css"

// Dependencies:
import PropTypes from "prop-types";

// Hooks:
import { TypeContext, ErrorContext } from "../../../hooks/InputContexts";

const InputRoot = ({ type, error, children }) => {
  return (
    <div className={styles.wrapper}>
      <TypeContext.Provider value={type}>
        <ErrorContext.Provider value={error}>    
          {children}
        </ErrorContext.Provider>
      </TypeContext.Provider>
    </div>
  );
}

InputRoot.propTypes = {
  type: PropTypes.string,
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired
}

export default InputRoot;