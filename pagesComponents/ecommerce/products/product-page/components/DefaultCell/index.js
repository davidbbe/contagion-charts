

import PropTypes from "prop-types";

// Components
import MDTypography from "/components/MDTypography";

function DefaultCell({ children }) {
  return (
    <MDTypography variant="button" color="secondary">
      {children}
    </MDTypography>
  );
}

// Typechecking props for the DefaultCell
DefaultCell.propTypes = {
  children: PropTypes.string.isRequired,
};

export default DefaultCell;
