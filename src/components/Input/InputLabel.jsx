import PropTypes from "prop-types";

const InputLabel = ({type, error}) => {
  return (
    <label className="label" htmlFor="input-field" style={{
      color: error.color
    }}>
      {type.toUpperCase()}
    </label>
  );
}

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.shape({
    color: PropTypes.string.isRequired
  })
}

export default InputLabel;