import React, {useState} from 'react';
// import Header from '../../organisms/Header';
// import Footer from '../../organisms/Footer';
import ThemeToggler from '../../organisms/ThemeToggler';

// Theming
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../../util/Themes";
import  {useDarkMode} from "../../util/useDarkMode"


const Layout = ({ children, className }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
if(!mountedComponent) return <div/>
return(
  <ThemeProvider theme={themeMode}>
    {/* <Header pageData={headerFooter} /> */}
      <ThemeToggler theme={theme} toggleTheme={themeToggler} />
    <main className={`${className || ''}`}>
      {children}
    </main>
    {/* <Footer pageData={headerFooter} /> */}
  </ThemeProvider>
)};

// Layout.defaultProps = {};

export default Layout;