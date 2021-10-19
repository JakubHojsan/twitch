import { AppBar, Toolbar, Typography, Icons } from "@material-ui/core";
import React from "react";
import './App.css';
import logo from'./logo.png';
import logosvg from'./logosvg.svg';

import SearchBar from "material-ui-search-bar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccessAlarm, ThreeDRotation, Notifications, ViewStream, MoreVert, Person  } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';




<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

export default function Header() {
    const displayDesktop = () => {
      return (
        <Toolbar>
          <div className='left'>
            <Stack direction='row' spacing={2}>
              <Button disabled> 
                <img src={logosvg} alt='test' width='32px' height='32px' />
              </Button>
              <Button style={{color: "#000000"}}
                variant="text">
                  Browse
                </Button>
                <IconButton style={{color: "#000000"}}>
                  <MoreVert fontSize="small" />
                </IconButton>
            </Stack>
          </div>



            <div className='middle'>
              <SearchBar
                //value={this.state.value}
                //onChange={(newValue) => this.setState({ value: newValue })}
                //onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            
            </div>

            <div className='right'>
            <Stack spacing={2} direction="row">
                <IconButton style={{color: "#000000"}}>
                  <Notifications fontSize="medium" />
                </IconButton>
                <Button 
                style={{backgroundColor: "#D3D3D3"}}
                variant="contained">
                  <Typography variant="inherit">Log in</Typography>
                </Button>
                <Button   
                style={{backgroundColor: "#6441a5"}}
                variant="contained">
                  <Typography variant="inherit">Sign up</Typography>
                </Button>
                <IconButton style={{color: "#000000"}}>
                  <Person fontSize="medium" />
                </IconButton>
            </Stack>


            </div>
        </Toolbar>
      );


    };
    
    return (
      <header color>
        <AppBar style={{background: '#ffffff'}}>{displayDesktop()}</AppBar>
      </header>
    );
  }