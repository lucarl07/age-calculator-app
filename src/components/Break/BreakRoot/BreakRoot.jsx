import PropTypes from "prop-types"

const BreakRoot = ({children}) => {
  return (
    <div 
      role="separator"
      className='x-break'>
      <hr/>
      {children}
    </div>
  );
}

BreakRoot.propTypes = {
  children: PropTypes.node
}

export default BreakRoot;