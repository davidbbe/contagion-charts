
// Base styles
import colors from "/assets/theme-dark/base/colors";
import borders from "/assets/theme-dark/base/borders";
import boxShadows from "/assets/theme-dark/base/boxShadows";

// helper functions
import pxToRem from "/assets/theme-dark/functions/pxToRem";
import linearGradient from "/assets/theme-dark/functions/linearGradient";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.dark.main, gradients.dark.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.dark,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
