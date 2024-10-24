import PropTypes from "prop-types";

const Results = ({children}) => {
  return (
    <ul className="results">
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