import React from 'react';
import { AppBar, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const items = ['Market', 'Exchanges', 'Tutorial', 'Wallets'];

const NavbarItem = ({ title, classProps }: { title: string; classProps?: string }) => {
  return (
    <Box mx={2} style={{ cursor: 'pointer' }} className={classProps}>
      {title}
    </Box>
  );
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='relative' sx={{ bgcolor: 'unset' }}>
      <Box display='flex' alignItems={'center'} justifyContent={'space-around'}>
        <Box display='flex' justifyContent={{ xs: 'between', md: 'center' }} alignItems='center' p={2}>
          <img src={'/assets/images/logo.png'} alt='' style={{ width: '8rem' }} />
        </Box>
        <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems='center'>
          {items.map((item, index) => (
            <NavbarItem title={item} key={index} />
          ))}
          <Button variant='contained' className={classes.loginButton}>
            Login
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

const useStyles = makeStyles({
  loginButton: {
    borderRadius: 9999,
    margin: 16
  }
});

export default Navbar;
