import React from "react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    width: "auto",
    height: "auto",
    margin: theme.spacing(1),
    flexGrow: 1,
  }
}));

const Cache = ({ setNum, data = [] }) => {
  // console.log(data);
  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Typography variant="h2">Cache Set {setNum}</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Set</TableCell>
            <TableCell align="right">Tag</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((line, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{line.tag && line.tag.toString(16).toUpperCase()}</TableCell>
              <TableCell>{line.data && line.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Cache;