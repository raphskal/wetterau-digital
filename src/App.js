import React, {useState, useEffect} from 'react';
import Header from './Header';
import PaymentProviderList from './PaymentProviderList';
import ComparisonTable from './ComparisonTable';
import { Container, CssBaseline } from '@mui/material';
import getData from './fetchFirestore';


const App = () => {
  const [selectedProviders, setSelectedProviders] = React.useState([]);

  const handleSelectProvider = (provider) => {
    setSelectedProviders([...selectedProviders, provider]);
  };


const [providers, setProviders] = useState([]);
const GetPaymentProvider = () => {
  

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
  fetchData(); }, [] )
  } ;
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Header />
        <PaymentProviderList providers={providers} onSelectProvider={handleSelectProvider} />
        {selectedProviders.length > 0 && <ComparisonTable providers={selectedProviders} />}
      </Container>
    </React.Fragment>
  );
};

export default App;