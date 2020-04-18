import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, makeStyles, Typography } from '@material-ui/core';
import memory from "./memory_data"

const useStyles = makeStyles(theme => ({
  container: {
    width: "auto",
    margin: theme.spacing(1),
    // float: "right",
    // maxWidth: "50%",
    flexGrow: 1,
  }
}));

const Memory = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Typography variant="h2">Main Memory</Typography>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Binary</TableCell>
              <TableCell align="right">Hex</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memory.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{(index).toString(2)}</TableCell>
                <TableCell align="right">{(index).toString(16).toUpperCase()}</TableCell>
                <TableCell align="right">{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default Memory;