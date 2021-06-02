import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";

import useStyles from "./Main.styles";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <Typography align="center" variant="h5">
        Total Balance $100
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ lineHeight: "1.5em", marginTop: "20px" }}
      >
        Try saying: Add income for $100 in Category Salary for Monday...
        {/*<InfoCard />*/}
      </Typography>
      <Divider />
      <CardContent>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            {/*<List />*/}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
