// Stylesheet:
import styles from './Container.module.css'

// Dependencies:
import PropTypes from "prop-types";

const Container = ({unique: isUnique = false, children}) => {
  return isUnique ? (
    <main className={styles.container}>
      {children}
    </main>
  ) : (
    <section className={styles.container}>
      {children}
    </section>
  );
}

Container.propTypes = {
  unique: PropTypes.bool,
  children: PropTypes.node
}

export default Container