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
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((line, index) => (
            <TableRow key={index}>
              <TableCell align="right">{index}</TableCell>
              <TableCell align="right">{line.tag && line.tag.toString(16).toUpperCase()}</TableCell>
              <TableCell align="right">{line.data && line.data}</TableCell>
              <TableCell align="right">{line.iteration && line.iteration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Cache;