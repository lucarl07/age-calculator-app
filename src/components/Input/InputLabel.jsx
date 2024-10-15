import PropTypes from "prop-types";

const InputLabel = ({type, hasError = false}) => {
  return (
    <label className="label" htmlFor="input-field" style={{
      color: hasError ? "red" : "grey"
    }}>
      {type.toUpperCase()}
    </label>
  );
}

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  hasError: PropTypes.bool
}

export default InputLabel;