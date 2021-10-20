import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, Icons } from "@material-ui/core";
import React from "react";
import './App.css';
import logo from'./logo.png';
import logosvg from'./logosvg.svg';
import SearchBar from "material-ui-search-bar";
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccessAlarm, ThreeDRotation, Notifications, ViewStream, MoreVert, Person  } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

export default function ChannelButton(picture, name, topic, viewers) {
    return (
        <div className='channelButton'>
            <div className='pictureContainer'> 
                <img width='32px' height='32px' src={picture} alt={name} />
             </div>
            <div className='channelName'> 
                <Typography variant='inherit'> {name} </Typography>
            </div>
            <div className='topic'>
                <Typography variant='inherit'> {topic} </Typography> 
            </div>
            <div className='viewers'> 
            <Typography variant='inherit'> {"O   " + viewers} </Typography>
            </div>
        </div>
    )
}
