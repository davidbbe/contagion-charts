import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import GlobalStyles from '../components/global-styles';

export default ({ children, pageContext }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Header />
      <Sidebar />
      {children}
      <Footer />
		</React.Fragment>
	);
};
