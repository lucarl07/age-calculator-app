// Stylesheets:
import styles from "./InputLabel.module.css"

// Dependencies:
import PropTypes from "prop-types";

const InputLabel = ({type, error}) => {
  const color = error.isActive ? "var(--light-red)" : "var(--smokey-grey)"

  return (
    <label className={styles.label} htmlFor="input_field" style={{color}}>
      {type.toUpperCase()}
    </label>
  );
}

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired
  })
}

export default InputLabel;