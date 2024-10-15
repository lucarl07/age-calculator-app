import PropTypes from "prop-types";

const InputError = ({message}) => {
  return (
    <span className="error-msg">
      {message}
    </span>
  );
}

InputError.propTypes = {
  message: PropTypes.string
}

export default InputError;