import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1>Bienvenue sur notre site d'annonces d'emploi</h1>
      <p>Consultez nos offres d'emploi et postulez dès maintenant !</p>
      <Link to="/joblist">Voir les offres d'emploi</Link>
    </div>
  );
}

export default Home;