import React, {useState} from 'react';
import Header from '../../organisms/Header';

// Theming
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "../../../util/styleComponentUtil/Themes";
import  {useDarkMode} from "../../../util/useDarkMode";


const Layout = ({ children, className }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
if(!mountedComponent) return <div/>
return (
  <ThemeProvider theme={themeMode}>
    <Header theme={theme} themeToggler={themeToggler} />
    <main className={`${className  || ''} container`}>
      <div className="vertical-rule" />
      <div className="col-xs-12 col-sm-11 col-sm-offset-2 col-lg-10 col-lg-offset-2">
        {children}
      </div>
    </main>
  </ThemeProvider>
)};

export default Layout;