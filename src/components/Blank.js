import React from 'react'
import PropTypes from 'prop-types'

const Blank = (props) => {
  return <div></div>
};

Blank.propTypes = {
  optionalArray: PropTypes.array,
  optionalBigInt: PropTypes.bigint,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  optionalNode: PropTypes.node, // Anything that can be rendered: numbers, strings, elements or an array
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number), // An array of a certain type
  optionalObjectOf: PropTypes.objectOf(PropTypes.number), // An object with property values of a certain type
  optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
  }), // An object taking on a particular shape
  requiredFunc: PropTypes.func.isRequired,
  requiredAny: PropTypes.any.isRequired, // A value of any data type
}

export default Blank;
