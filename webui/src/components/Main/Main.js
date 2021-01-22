import React from "react";
import { Header, NavBar } from "../Layout";
import useStyles from "./MainStyles";
import { Grid } from "@material-ui/core";
import { Configure } from "../Configure";
import { ConfigureStream } from "../ConfigureStream";
import { SensorStream } from "../SensorStream";
import { Results } from "../Results";
import CssBaseline from "@material-ui/core/CssBaseline";

const Main = () => {
  const [activeView, setActiveView] = React.useState(0);

  function handleChange(newValue) {
    setActiveView(newValue);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Header />
        <NavBar onChange={handleChange} />
        <main className={classes.content}>
          {activeView === 0 ? <Configure /> : null}
          {activeView === 1 ? <ConfigureStream /> : null}
          {activeView === 2 ? <Results /> : null}
        </main>
      </Grid>
    </div>
  );
};

export default Main;
