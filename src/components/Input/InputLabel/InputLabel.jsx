// Stylesheets:
import styles from "./InputLabel.module.css"

// Dependencies:
import PropTypes from "prop-types";
import { useContext } from 'react';

// Hooks:
import { TypeContext } from "../../../hooks/InputContexts";

const InputLabel = ({error}) => {
  const type = useContext(TypeContext)
  const color = error.isActive ? "var(--light-red)" : "var(--smokey-grey)"

  return (
    <label className={styles.label} htmlFor="input_field" style={{color}}>
      {type.toUpperCase()}
    </label>
  );
}

InputLabel.propTypes = {
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired
  })
}

export default InputLabel;