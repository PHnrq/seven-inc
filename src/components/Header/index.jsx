import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import logo from '../../assets/seven-inc-logo.svg'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{py: .6}}>
        <Toolbar>
          <img src={logo} alt="Seven Inc" width={200}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
