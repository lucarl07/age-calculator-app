import PropTypes from "prop-types";

const Results = ({children}) => {
  return (
    <hgroup className="results">
      {children}
    </hgroup>
  );
}

Results.propTypes = {
  children: PropTypes.node
}

export default Results;