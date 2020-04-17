import React from "react";
import New from "./New";

const noticiasList = ({ news }) => {
  return (
    <div className="row">
      {news.map((oneNew) => (
        <New key={oneNew.url} oneNew={oneNew} />
      ))}
    </div>
  );
};

export default noticiasList;
