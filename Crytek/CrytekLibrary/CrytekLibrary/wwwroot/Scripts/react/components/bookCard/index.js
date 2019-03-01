import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

const styles = {
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
};

class BookCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(BookCard);
