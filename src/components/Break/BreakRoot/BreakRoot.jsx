// Stylesheet:
import styles from './BreakRoot.module.css'

// Dependencies:
import PropTypes from "prop-types"

// Helpers:
import useWindowDimensions from './useWindowDimensions'

const BreakRoot = ({children}) => {
  const { width, height } = useWindowDimensions();
  const isViewportMobile = height > width && width <= 425 ? true : false

  return (
    <div role='group' className={styles.x_break}>
      <div role='separator' className={styles.ruler}></div>
      {children}
      {isViewportMobile && 
        <div role='separator' className={styles.ruler}></div>}
    </div>
  );
}

BreakRoot.propTypes = {
  children: PropTypes.node
}

export default BreakRoot;