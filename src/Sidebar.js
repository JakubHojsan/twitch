import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, Icons } from "@material-ui/core";
import ChannelButton from "./ChannelButton";
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

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <Stack spacing={6.5}>
                {ChannelButton(logosvg, "loltyler1", "League of Legends", 531200)} 
                {ChannelButton(logosvg, "DoubleLift", "League of Legends", 10220)}     
    
            </Stack>
        </div>
    )
}
