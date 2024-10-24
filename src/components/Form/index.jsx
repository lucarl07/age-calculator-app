import PropTypes from "prop-types";

const Form = ({action = "", children}) => {
  return (
    <form
      action={action}
      className="form">
      {children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
}

export default Form;