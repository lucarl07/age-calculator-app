// Stylesheet:
import styles from './BreakIcon.module.css'

// Dependencies:
import PropTypes from "prop-types"

const BreakIcon = ({src, alt}) => {
  return (
    <div className={styles.icon}>
      <img src={src} alt={alt} />
    </div>
  );
}

BreakIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default BreakIcon;