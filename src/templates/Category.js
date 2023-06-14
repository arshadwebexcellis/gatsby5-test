import React, { Component } from "react";

const Category = ({ pageContext }) => {
  return <h1>{JSON.stringify(pageContext.categories)}</h1>;
};

export default Category;
