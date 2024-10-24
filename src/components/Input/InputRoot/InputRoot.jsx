import PropTypes from "prop-types";

const InputRoot = ({children}) => {
  return (
    <div className="input-wrapper">
      {children}
    </div>
  );
}

InputRoot.propTypes = {
  children: PropTypes.node.isRequired
}

export default InputRoot;