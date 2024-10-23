import PropTypes from "prop-types";

const InputLabel = ({type, error}) => {
  const color = error.isActive ? "red" : "grey"

  return (
    <label className="label" htmlFor="input-field" style={{color}}>
      {type.toUpperCase()}
    </label>
  );
}

InputLabel.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired
  })
}

export default InputLabel;