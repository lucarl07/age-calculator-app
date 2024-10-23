import PropTypes from "prop-types";
import setInputPlaceholder from "../../helpers/setInputPlaceholder";

const InputField = ({type, getter, setter, getError}) => {
  const placeholder = setInputPlaceholder(type);
  const borderColor = getError.color
  
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
  getError: PropTypes.shape({
    color: PropTypes.string.isRequired,
  })
}

export default InputField