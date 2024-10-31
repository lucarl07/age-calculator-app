// Stylesheet:
import styles from "./InputField.module.css"

// Dependencies:
import PropTypes from "prop-types";
import { useContext } from 'react';

// Hooks & Helpers:
import { TypeContext, ErrorContext } from "../../../hooks/InputContexts";
import setInputPlaceholder from "../../../utils/setInputPlaceholder";

const InputField = ({getter, setter}) => {
  const type = useContext(TypeContext)
  const error = useContext(ErrorContext)
  const placeholder = setInputPlaceholder(type);

  // Determining the border color
  const borderColor = error.isActive ? "var(--light-red)" : "var(--light-grey)"
  
  return (
    <input 
      type="number" 
      name="input_field"
      className={styles.input}
      placeholder={placeholder}
      value={getter}
      onChange={setter}
      style={{borderColor}} />
  );
}

InputField.propTypes = {
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired
}

export default InputField