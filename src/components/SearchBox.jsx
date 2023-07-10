import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 me-5">
      <input className="form-control" placeholder="영화 검색..." type="text" />
    </div>
  );
};

export default SearchBox;
