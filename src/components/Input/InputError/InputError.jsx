// Stylesheet:
import styles from "./InputError.module.css"

// Dependencies
import PropTypes from "prop-types";

const InputError = ({src}) => {
  return (
    <span className={styles.error_msg}>
      {src.message}
    </span>
  );
}

InputError.propTypes = {
  src: PropTypes.shape({
    message: PropTypes.string
  })
}

export default InputError;