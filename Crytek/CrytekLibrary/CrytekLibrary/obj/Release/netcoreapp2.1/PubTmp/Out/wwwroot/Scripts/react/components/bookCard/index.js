import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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
          <Typography gutterBottom>Word of the Day</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(BookCard);
