import PropTypes from "prop-types";
import setInputPlaceholder from "./setInputPlaceholder";

const InputField = ({type, getter, setter, error}) => {
  const placeholder = setInputPlaceholder(type);
  const borderColor = error.isActive ? "red" : "grey"
  
  return (
    <input 
      type="number" 
      name="input-field"
      className="input-field"
      placeholder={placeholder}
      value={getter}
      onChange={setter}
      style={{borderColor}} />
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  getter: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string
  ]),
  setter: PropTypes.func.isRequired,
  error: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
  })
}

export default InputField