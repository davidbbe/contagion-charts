
import { forwardRef } from "react";


import PropTypes from "prop-types";

// Custom styles for MDInput
import MDInputRoot from "/components/MDInput/MDInputRoot";

const MDInput = forwardRef(({ error, success, disabled, ...rest }, ref) => {
  return (
    <MDInputRoot
      {...rest}
      ref={ref}
      ownerState={{ error, success, disabled }}
    />
  );
});

// Setting default values for the props of MDInput
MDInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MDInput
MDInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

MDInput.displayName = "MDInput";
export default MDInput;
