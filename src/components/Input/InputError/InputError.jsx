import PropTypes from "prop-types";

const InputError = ({src}) => {
  return (
    <span className="error-msg">
      {src.message}
    </span>
  );
}

InputError.propTypes = {
  src: PropTypes.shape({
    message: PropTypes.string
  })
}

export default InputError;