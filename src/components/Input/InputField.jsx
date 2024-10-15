import PropTypes from "prop-types";

const InputField = ({getter, setter, placeholder, hasError}) => {
  const borderColor = hasError ? "red" : "grey"

  return (
    <input 
      type="number" 
      name="input-field"
      className="input-field"
      placeholder={placeholder.toUpperCase()}
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
  placeholder: PropTypes.string,
  hasError: PropTypes.bool
}

export default InputField