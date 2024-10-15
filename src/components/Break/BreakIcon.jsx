import PropTypes from "prop-types"

const BreakIcon = ({src, alt}) => {
  return (
    <div
      className="icon"
      style={{
        backgroundColor: "green"
      }}>
      <img src={src} alt={alt} />
    </div>
  );
}

BreakIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default BreakIcon;