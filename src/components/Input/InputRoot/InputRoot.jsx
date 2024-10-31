// Stylesheets:
import styles from "./InputRoot.module.css"

// Dependencies:
import PropTypes from "prop-types";

// Hooks:
import { TypeContext } from "../../../hooks/InputContexts";

const InputRoot = ({ type, children }) => {
  return (
    <div className={styles.wrapper}>
      <TypeContext.Provider value={type}>
        {children}
      </TypeContext.Provider>
    </div>
  );
}

InputRoot.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default InputRoot;