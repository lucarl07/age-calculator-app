import PropTypes from "prop-types";

const OutputValue = ({value}) => {
  return (
    <span className="number">
      {value || "--"}
    </span>
  )
}

OutputValue.propTypes = {
  value: PropTypes.number
}

export default OutputValue;