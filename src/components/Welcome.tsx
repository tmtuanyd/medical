import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Ethereum } from '../Icons/Ethereum';
import { InfoOutlined } from '@mui/icons-material';

const Welcome = () => {
  const classes = useStyles();
  return (
    <Box display='flex' width='100%' justifyContent={'center'} alignItems={'center'}>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={'start'}
        justifyContent={'space-between'}
        p={{ sm: 10 }}
        py={2}
      >
        <Box color={'white'}>
          <Typography variant={'h2'}>
            Send Crypto <br /> across the world
          </Typography>
          <Box width={{ xs: '95%', sm: '75%' }} my={2}>
            <Typography>Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.</Typography>
          </Box>
          <Button variant={'contained'} fullWidth>
            Connect Wallet
          </Button>
          <Box display={'grid'} mt={5} gridTemplateColumns={'auto auto auto'}>
            <Box className={classes.componentStyles} borderRadius={'16px 0 0 0'}>
              Reliability
            </Box>
            <Box className={classes.componentStyles}>Security</Box>
            <Box className={classes.componentStyles} borderRadius={'0 16px 0 0'}>
              Ethereum
            </Box>
            <Box className={classes.componentStyles} borderRadius={'0 0 0 16px'}>
              Web 3.0
            </Box>
            <Box className={classes.componentStyles}>Low Fees</Box>
            <Box className={classes.componentStyles} borderRadius={'0 0 16px 0'}>
              Blockchain
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flex={1} flexDirection='column'>
        <Box
          width={'18rem'}
          height={'10rem'}
          className={'eth-card white-glassmorphism'}
          borderRadius={'0.75rem'}
          my={2}
          p={1}
          display={'flex'}
          flexDirection={'column'}
        >
          <Box display={'flex'} justifyContent={'space-between'}>
            <Ethereum />
            <InfoOutlined style={{ color: 'white' }} />
          </Box>
          <Box mt={'auto'} color={'white'}>
            <Typography gutterBottom>Address</Typography>
            <Typography variant={'h6'}>Ethereum</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: any) => ({
  componentStyles: {
    minHeight: 70,
    padding: '0 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.5px solid grey',
    [theme.breakpoints.up('sm')]: {
      padding: 0,
      minWidth: 120
    }
  }
}));

export default Welcome;
