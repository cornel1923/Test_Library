import React, { Component } from "react";
import BookCard from "../bookCard";

import "./styles.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <BookCard />
      </div>
    );
  }
}