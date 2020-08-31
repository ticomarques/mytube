import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from './../img/logo.svg';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
  });

const Header = ({ onVideoCategory }) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
        <header>
            <img src={logo} alt ="mytube" style={{ width: '5%', margin: '10px auto 20px', display: 'block' }}/>
            
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    aria-label="disabled tabs example"
                >
                    <Tab label="Javascript" onClick={() => onVideoCategory('javascript')} />
                    <Tab label="ReactJS" onClick={() => onVideoCategory('reactjs')} />
                    <Tab label="NodeJS" onClick={() => onVideoCategory('nodejs')} />
                    <Tab label="Docker" onClick={() => onVideoCategory('Docker')} />
                    <Tab label="Linux" onClick={() => onVideoCategory('Linux ubuntu')} />
                </Tabs>
            </Paper>
        </header>
    )
};

export default Header;