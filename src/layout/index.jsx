import React from 'react';
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "../context";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import GlobalStyles from '../components/global-styles';


import theme from "assets/theme";
import themeDark from "assets/theme-dark";

export default ({ children, pageContext }) => {
	return (
		<MaterialUIControllerProvider>
			<ThemeProvider theme={darkMode ? themeDark : theme}>
				<GlobalStyles />
				<Header />
				<Sidebar 
					color={sidenavColor}
					brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
					brandName="Material UI"
					routes={routes}
					onMouseEnter={handleOnMouseEnter}
					onMouseLeave={handleOnMouseLeave}
				/>
				{children}
				<Footer />
			</ThemeProvider>
		</MaterialUIControllerProvider>
	);
};
