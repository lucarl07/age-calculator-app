// Stylesheets:
import styles from "./InputRoot.module.css"

// Dependencies:
import PropTypes from "prop-types";

const InputRoot = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

InputRoot.propTypes = {
  children: PropTypes.node.isRequired
}

export default InputRoot;