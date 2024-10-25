// Stylesheet:
import styles from './Results.module.css'

// Dependencies:
import PropTypes from "prop-types";

const Results = ({children}) => {
  return (
    <ul className={styles.results}>
      {children.map((child, i) => (
        <li key={i}>
          {child}
        </li>
      ))}
    </ul>
  );
}

Results.propTypes = {
  children: PropTypes.node
}

export default Results;