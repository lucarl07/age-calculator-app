// Stylesheet:
import styles from './Output.module.css'

// Dependencies:
import PropTypes from "prop-types";

const Output = ({value, period}) => {
  return (
    <p className={styles.output}>
      <span className={styles.number}>
        {value || "--"}
      </span>
      {" "}
      <span className={styles.time_period}>
        {Math.abs(value) != 1 ? period + 's' : period}
      </span>
    </p>
  );
}

Output.propTypes = {
  value: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired
}

export default Output;