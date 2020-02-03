import React from "react";
import { Link } from "react-router-dom";
import css from './NotFoundPage.module.css';

const NotFoundPage = () => (
  <div className={css.root}>
    <div className={css.container}>
      <h1>404 page not found</h1>
      <p>Przykro nam, ale strona, której szukasz, nie istnieje</p>
      <Link to="/">Strona Główna</Link>
    </div>
  </div>
)

export default NotFoundPage;