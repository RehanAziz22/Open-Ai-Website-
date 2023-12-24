import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';


export default function DenseTable(props) {
  const { datasource, Cols } = props;

  return (
    <Grid item xs={12} sm={12} md={12} sx={{ overflow: "hidden", width: { xs: "300px", md: "600px", lg: "100%" } }}>
             
      {Cols && Array.isArray(Cols) && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
            <TableHead className='drawer' >
              <TableRow>
                <TableCell sx={{color:'white'}}>s#</TableCell>
                {Cols.map((y, i) => (
                  <TableCell sx={{color:'white'}} key={i}>{y.displayName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {datasource &&
                Array.isArray(datasource) &&
                datasource.length > 0 ? (
                datasource.map((x, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    {Cols.map((y, ind) => (
                      <TableCell key={ind}>{x[y.key]}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <h1>No Data Found</h1>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
}
