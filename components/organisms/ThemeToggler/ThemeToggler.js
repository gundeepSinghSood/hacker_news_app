import React from 'react'
import { func, string } from 'prop-types';
import withStyles from '../../../util/styleComponentUtil/withStyles';
import styles, { Button } from './ThemeToggler.style';

  

const ThemeToggler = ({theme, toggleTheme, className }) => {

    return (
        <Button onClick={toggleTheme} className={`${className} col-lg-4`} >
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </Button>
    );
};

ThemeToggler.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default withStyles(ThemeToggler, styles);

export { ThemeToggler as ThemeTogglerVanilla };
