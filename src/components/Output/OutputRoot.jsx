import PropTypes from "prop-types";

const OutputRoot = ({children}) => {
  return (
    <h1 className="output">
      {children.map((child) => (
        <>
          {child}{" "}
        </>
      ))}
    </h1>
  );
}

OutputRoot.propTypes = {
  children: PropTypes.node
}

export default OutputRoot;