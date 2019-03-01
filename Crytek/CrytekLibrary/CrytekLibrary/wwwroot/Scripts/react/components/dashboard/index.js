import React, { Component } from "react";
import BooksGrid from "../booksGrid";
import CategoryMenu from "../categoryMenu";

import "./styles.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <CategoryMenu />
        <BooksGrid />
      </div>
    );
  }
}
