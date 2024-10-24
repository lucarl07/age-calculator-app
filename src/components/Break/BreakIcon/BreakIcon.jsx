import PropTypes from "prop-types"

const BreakIcon = ({src, alt}) => {
  return (
    <div
      className="icon"
      style={{
        width: "fit-content",
        backgroundColor: "purple"
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