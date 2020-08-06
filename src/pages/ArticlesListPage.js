import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
const ArticlesListPage = () => {
  return (
    <div>
      <h1>List of Articles</h1>
     <ArticlesList articles={articleContent}/>
    </div>
  );
};

export default ArticlesListPage;
