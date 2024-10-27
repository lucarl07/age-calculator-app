// Stylesheet:
import styles from "./InputField.module.css"

// Dependencies & Helpers:
import PropTypes from "prop-types";
import setInputPlaceholder from "../../../utils/setInputPlaceholder";

const InputField = ({type, getter, setter, error}) => {
  const placeholder = setInputPlaceholder(type);
  const borderColor = error.isActive ? "var(--light-red)" : "var(--light-grey)"
  
  return (
    <input 
      type="number" 
      name="input_field"
      className={styles.input}
      placeholder={placeholder}
      value={getter}
      onChange={setter}
      style={{ borderColor }} />
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired,
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
  })
}

export default InputField