import PropTypes from "prop-types";

const OutputPeriod = ({period}) => {
  return (
    <span className="period">
      {period}
    </span>
  )
}

OutputPeriod.propTypes = {
  period: PropTypes.string.isRequired
}

export default OutputPeriod;