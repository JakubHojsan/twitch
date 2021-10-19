import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import './App.css';
import logo from'./logo.png';
import SearchBar from "material-ui-search-bar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




export default function Header() {
    const displayDesktop = () => {
      return (
        <Toolbar>
          <div className='left'>
            <img  src={logo} alt='test' width='35px' height='35px'/>

          </div>



            <div className='middle'>
            
              <SearchBar
                //value={this.state.value}
                //onChange={(newValue) => this.setState({ value: newValue })}
                //onRequestSearch={() => doSomethingWith(this.state.value)}
            />
            
            </div>

            <div className='right'>
            <Stack spacing={1} direction="row">
                <Button 
                style={{backgroundColor: "#D3D3D3"}}
                variant="contained">Log in</Button>
                <Button 
                style={{backgroundColor: "#6441a5"}}
                variant="contained">Sign up</Button>
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