import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const PaymentProviderCard = ({ provider, onSelect }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
          {provider.name}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
          Kosten: {provider.costs}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
          Währung: {provider.currency}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>
          Land {provider.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onSelect} sx={{ color: '#8B4513' }}>Compare</Button>
      </CardActions>
    </Card>
  );
};

export default PaymentProviderCard;