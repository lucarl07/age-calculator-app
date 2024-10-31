// Stylesheet:
import styles from "./InputError.module.css"

// Dependencies:
import { useContext } from 'react';

// Hooks:
import { ErrorContext } from "../../../hooks/InputContexts";

const InputError = () => {
  const errorSrc = useContext(ErrorContext)

  return (
    <span className={styles.error_msg}>
      {errorSrc.message}
    </span>
  );
}

export default InputError;