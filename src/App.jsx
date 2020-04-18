import React, { useState } from 'react';
import Header from "./Header";
import Memory from "./Memory";
import Cache from "./Cache";
import { makeStyles, Typography, TextField, MenuItem, Button, Select, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: theme.background,
  },
  flexContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexFlow: "row wrap",
  },
  centerAlign: {
    display: "flex",
    alignItems: "flex-start",
    flexFlow: "row wrap",
    alignItems: "stretch"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


const App = () => {
  const classes = useStyles();

  const initialCache = [
    [
      { tag: null, data: null },
      { tag: null, data: null },
      { tag: null, data: null },
      { tag: null, data: null },
    ],
    [
      { tag: null, data: null },
      { tag: null, data: null },
      { tag: null, data: null },
      { tag: null, data: null },
    ]
  ]
  const resetCache = () => {
    setCacheData(initialCache);
    setStatusText(welcome);
  }
  const [cacheData, setCacheData] = useState(initialCache);

  const welcome = "Please enter an address to retrieve from memory:"
  const [statusText, setStatusText] = useState(welcome);

  const [searchBase, setSearchBase] = useState(10);
  const updateSearchBase = e => {
    if (search !== "") {
      setSearch(parseInt(search, searchBase).toString(e.target.value).toUpperCase());
    }
    setSearchBase(e.target.value);
  }

  const [search, setSearch] = useState("");
  const updateSearch = e => {
    const re = {
      10: /^[0-9\b]+$/,
      16: /^[0-9a-fA-F]+$/,
      2: /^[01]+$/
    }[searchBase];

    // if value is not blank, then test the regex
    if (e.target.value === '' || re.test(e.target.value)) {
      setSearch(e.target.value);
    }
  }

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.flexContainer}>
        <div className={classes.leftPane}>
          <Typography className={classes.formControl} variant="body1">{statusText}</Typography>
          <div className={classes.centerAlign}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel>Radix</InputLabel>
              <Select
                value={searchBase}
                onChange={updateSearchBase}
              >
                <MenuItem value={10}>Decimal</MenuItem>
                <MenuItem value={16}>Hex</MenuItem>
                <MenuItem value={2}>Binary</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className={classes.formControl}
              label="Address"
              variant="filled"
              value={search}
              onChange={updateSearch}
            />
            <Button
              className={classes.formControl}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
            <Button
              className={classes.formControl}
              variant="contained"
              color="secondary"
              onClick={resetCache}
            >
              Reset
            </Button>
          </div>
          <div className={classes.flexContainer}>
            <Cache setNum={0} data={cacheData[0]} />
            <Cache setNum={1} data={cacheData[1]} />
          </div>
        </div>
        <Memory />
      </div>
    </div>
  );
}

export default App;

