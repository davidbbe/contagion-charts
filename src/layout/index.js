import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalStyles from '../global-styles';

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
