import PropTypes from "prop-types";

const Output = ({value, period}) => {
  return (
    <h1 className="output">
      <span className="number">
        {value || "--"}
      </span>
      {" "}
      <span className="period">
        {Math.abs(value) != 1 ? period + 's' : period}
      </span>
    </h1>
  );
}

Output.propTypes = {
  value: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired
}

export default Output;