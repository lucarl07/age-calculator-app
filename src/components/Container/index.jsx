import PropTypes from "prop-types";

const Container = ({unique: isUnique = false, children}) => {
  return isUnique ? (
    <main className="container">
      {children}
    </main>
  ) : (
    <section className="container">
      {children}
    </section>
  );
}

Container.propTypes = {
  unique: PropTypes.bool,
  children: PropTypes.node
}

export default Container