import PropTypes from "prop-types";
import setInputPlaceholder from "../../helpers/setInputPlaceholder";

const InputField = ({getter, setter, type, getError, setError}) => {
  const placeholder = setInputPlaceholder(type);

  const borderColor = getError.color

  return (
    <input 
      type="number" 
      name="input-field"
      className="input-field"
      placeholder={placeholder}
      value={getter}
      onChange={({target}) => setter(target.value)}
      style={{borderColor}} />
  );
}

InputField.propTypes = {
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired,
  type: PropTypes.string,

  /* Error related props: */
  getError: PropTypes.exact({
    color: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  setError: PropTypes.func.isRequired
}

export default InputField