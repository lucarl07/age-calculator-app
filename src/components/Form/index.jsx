// Stylesheets:
import styles from "./Form.module.css"

// Dependencies:
import PropTypes from "prop-types";

const Form = ({action = "", children}) => {
  return (
    <form
      action={action}
      className={styles.form}>
      {children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
}

export default Form;