import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Inscription soumise !");
        console.log(`Nom d'utilisateur : ${username}`);
        console.log(`Email : ${email}`);
        console.log(`Mot de passe : ${password}`);
        console.log(`Confirmation du mot de passe : ${confirmPassword}`);
    };

    return (
        <div className="register-box">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nom d'utilisateur :</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        onFocus={(event) => event.target.select()}
                        onClick={(event) => event.target.select()}
                    />
                </div>
                <div className="form-group">
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onFocus={(event) => event.target.select()}
                        onClick={(event) => event.target.select()}
                    />
                </div>
                <div className="form-group">
                    <label>Mot de passe :</label>
                    <input
                        className="password-input"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onFocus={(event) => event.target.select()}
                        onClick={(event) => event.target.select()}
                    />
                </div>
                <div className="form-group">
                    <label>Confirmation du mot de passe :</label>
                    <input
                        className="password-input"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        onFocus={(event) => event.target.select()}
                        onClick={(event) => event.target.select()}
                    />
                </div>
                <button type="submit">S'inscrire</button>
            </form>

            <div className="bottom-button">
                <Link to="/home">Retour à la page d'accueil</Link>
             </div>

        </div> 
    );
}

export default Register;