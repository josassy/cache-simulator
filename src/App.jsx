import React, { useState } from 'react';
import Header from "./Header";
import Memory from "./Memory";
import Cache from "./Cache";
import memoryData from "./memory_data";
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
    setIteration(0);
    setSearch("");
  }
  const [cacheData, setCacheData] = useState(initialCache);
  const [iteration, setIteration] = useState(1);

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

  const searchMemory = e => {
    e.preventDefault();
    if (search === '') {
      return;
    }
    const address = parseInt(search, searchBase);
    if (address >= memoryData.length) {
      setStatusText("Invalid Address. Try Again.");
    }
    else {
      const data = memoryData[address];
      const tag = Math.floor(address / 4);
      const index = address % 4;
      let cache = cacheData;
      let setNum = -1;
      if (cacheData[0][index].tag === tag) {
        setNum = 0;
      }
      else if (cacheData[1][index].tag === tag) {
        setNum = 1;
      }
      if (setNum >= 0) {
        // display hit
        setStatusText(`Cache Hit (Set 1): ${data}`);
  
        // update cache iteration
        cache[setNum][index].iteration = iteration;
        setCacheData(cache);
        setIteration(iteration + 1);
      }
      // data miss
      else {
        if ((cacheData[1][index].iteration == null && cacheData[0][index].iteration != null) || cacheData[0][index].iteration > cacheData[1][index].iteration) {
          setNum = 1;
        }
        else {
          setNum = 0
        }
        cache[setNum][index] = { data: data, tag: tag, iteration: iteration };
        setCacheData(cache);
        setStatusText(`Cache Miss: ${data}. Storing in Set ${setNum}`);
        setIteration(iteration + 1);
      }
    }
  }

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.flexContainer}>
        <div className={classes.leftPane}>
          <Typography className={classes.formControl} variant="body1">{statusText}</Typography>
          <form className={classes.centerAlign} onSubmit={searchMemory}>
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
              type="submit"
              className={classes.formControl}
              variant="contained"
              color="primary"
            >
              Retrieve
            </Button>
            <Button
              className={classes.formControl}
              variant="contained"
              color="secondary"
              onClick={resetCache}
            >
              Reset
            </Button>
          </form>
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

