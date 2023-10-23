import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérifier les informations d'identification de l'utilisateur
    if (username === 'onnom' && password === 'onmotdepasse') {
      // Si les informations d'identification sont correctes, rediriger vers la page principale
      window.location.href = '/';
    } else {
      // Si les informations d'identification sont incorrectes, afficher un message d'erreur
      alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur :
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Mot de passe :
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Se connecter</button>
      </form>
      <div className="bottom-button">
        <Link to="/home">Retour à la page d'accueil</Link>
      </div>
    </div>
  );
}

export default Login;