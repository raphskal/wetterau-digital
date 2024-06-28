import React, {useState, useEffect} from 'react';
import PaymentProviderCard from './PaymentProviderCard';
import getData from './fetchFirestore';
import { Grid, Box } from '@mui/material';

const PaymentProviderList = ({ onSelectProvider }) => {
  const [providers, setProviders] = useState([]);

  useEffect( () => {
    async function fetchData() {
      try {
        const res = await getData();
        setProviders(res);
      }
      catch (err) {
      console.log(err);
    }
  }
  fetchData();
  }, [] ) ;
  console.log(providers)

  return (
  <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {providers.map((provider, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PaymentProviderCard 
                provider={provider} 
                onSelect={() => onSelectProvider(provider)} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

export default PaymentProviderList;