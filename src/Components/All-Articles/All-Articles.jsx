import React from "react";
import AddArticle from "../User-Profile/AddArticle/Add-Article";

export const allArticle = (props) => {
  console.log(props);
  return (
    <div className='card-list'>
      {props.newArticle.map((article) => (
        <AddArticle key={article.id} article={article} />
      ))}
    </div>
  );
};
