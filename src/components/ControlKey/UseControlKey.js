import React from 'react';
import { InputLabel, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useUsekeyStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '& fieldset': {
      borderRadius: 0,
    },
  },
  label: {
    color: 'black',
    fontWeight: 600,
  },
  button: {
    backgroundColor: '#ffffff',
    textTransform: 'none',
    border: '4px solid #fe8d4a',
    borderRadius: 0,
    color: '#fe8d4a',
    width: '100%',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
  },
  input: {
    width: '100%',
  },
  tableContainer: {
    paddingBottom: '5vh',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData(`Settlor's beneficiary address key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Trustee's beneficiary address key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Settlor's distribution schedule key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Trustee's distribution schedule key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Settlor's revocation key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Trustee's revocation key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Settlor's asset swap key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
  createData(`Trustee's transaction key`, 0x71C7656EC7ab88b098defB751B7401B5f6d8976F),
];

export default function UseControlKey() {
  const classes = useUsekeyStyles();

  return (
    <div>
      <div className={classes.pageTitle}>Use a Control Key</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <InputLabel className={classes.label}>Enter the dtrust identification number</InputLabel>
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField className={classes.input} label="the dtrust address" id="" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4} sm={1}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Relevant control keys</TableCell>
              <TableCell align="center">Detail</TableCell>
              {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
