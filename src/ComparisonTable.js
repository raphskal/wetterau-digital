import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ComparisonTable = ({ providers }) => {
  return (
<TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2, boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>Name</Typography></TableCell>
            <TableCell><Typography variant="h6" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>Kosten</Typography></TableCell>
            <TableCell><Typography variant="h6" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>Währung</Typography></TableCell>
            <TableCell><Typography variant="h6" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>Land</Typography></TableCell>
            {/* Add more columns as needed */}

          </TableRow>
        </TableHead>
        <TableBody>
          {providers.map((provider, index) => (
            <TableRow key={index}>
              <TableCell><Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>{provider.name}</Typography></TableCell>
              <TableCell><Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>{provider.costs}</Typography></TableCell>
              <TableCell><Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>{provider.currency}</Typography></TableCell>
              <TableCell><Typography variant="body2" sx={{ fontFamily: 'Courier New, monospace', color: '#8B4513' }}>{provider.country}</Typography></TableCell>
              {/* Add more rows as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;