// Stylesheets:
import styles from "./InputLabel.module.css"

// Dependencies:
import { useContext } from 'react';

// Hooks:
import { TypeContext, ErrorContext } from "../../../hooks/InputContexts";

const InputLabel = () => {
  const type = useContext(TypeContext)
  const error = useContext(ErrorContext)

  // Determining the font color
  const color = error.isActive ? "var(--light-red)" : "var(--smokey-grey)"

  return (
    <label className={styles.label} htmlFor="input_field" style={{color}}>
      {type.toUpperCase()}
    </label>
  );
}

export default InputLabel;