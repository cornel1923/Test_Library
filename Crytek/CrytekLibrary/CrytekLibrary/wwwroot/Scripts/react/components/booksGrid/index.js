import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import BookCard from "../bookCard";

import styles from './styles.js';

class BooksGrid extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            justify="center"
            spacing={Number(16)}
          >
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
               <BookCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

BooksGrid.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(BooksGrid);
