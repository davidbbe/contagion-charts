

import PropTypes from "prop-types";

// Components
import MDTypography from "/components/MDTypography";

function DefaultCell({ children }) {
  return (
    <MDTypography variant="button" fontWeight="regular" color="text">
      {children}
    </MDTypography>
  );
}

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultCell;
