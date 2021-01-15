import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary" font-weight="bold">
          Search
          </button>
      </div>
    </form>
  );
}

export default SearchForm;
