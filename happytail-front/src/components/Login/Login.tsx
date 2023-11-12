import React, { useState } from "react";
import { auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "./Login.scss";
import icon from "../../assets/X.png";
import Line from "../../assets/Line 1.png";

import { TextField } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const [registrationType, setRegistrationType] = useState<"pessoal" | "ong">(
    "pessoal"
  );

  const handleToggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleRegistrationType = (type: "pessoal" | "ong") => {
    setRegistrationType(type);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="app__loginpage">
      <div className="app__logincard">
        <div className="app__header">
          <h1 className="app__headertitle">
            {isSignUp ? "Cadastrar" : "Login"}
          </h1>
          <button className="app__cancelbutton" onClick={onClose}>
            <img src={icon} alt="Close" />
          </button>
        </div>

        <div className="flex items-center justify-center mb-4">
          {isSignUp && (
            <>
              <button
                className={`app__registertypebutton ${
                  registrationType === "pessoal" ? "selected" : ""
                } mr-2`}
                onClick={() => handleRegistrationType("pessoal")}
              >
                Pessoal
              </button>
              <button
                className={`app__registertypebutton ${
                  registrationType === "ong" ? "selected" : ""
                }`}
                onClick={() => handleRegistrationType("ong")}
              >
                ONG
              </button>
            </>
          )}
        </div>

        {isSignUp ? (
          <div className="app__signupfield flex flex-col items-center justify-center">
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              className="app__field"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="app__field"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              type="password"
              className="app__field"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />

            {registrationType === "ong" && (
              <>
                <TextField
                  id="outlined-basic"
                  label="CNPJ"
                  variant="outlined"
                  className="app__field"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                />
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Endereço"
                    variant="outlined"
                    className="app__field short"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Bairro"
                    variant="outlined"
                    className="app__field short"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  label="CEP"
                  variant="outlined"
                  className="app__field"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </>
            )}
            <button
              className="app__signupbutton"
              onClick={() =>
                createUserWithEmailAndPassword(
                  auth,
                  signupEmail,
                  signupPassword
                )
              }
            >
              Cadastrar
            </button>
          </div>
        ) : (
          <div className="app__loginfield">
            <TextField
              id="outlined-basic"
              label="Digite seu email"
              variant="outlined"
              className="app__field"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Digite sua senha"
              variant="outlined"
              type="password"
              className="app__field"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button
              className="app__loginbutton"
              onClick={() =>
                signInWithEmailAndPassword(auth, loginEmail, loginPassword)
              }
            >
              Entrar
            </button>
          </div>
        )}

        <div className="app__changefield">
          <img src={Line} alt="Line" style={{ padding: 15 }} />
          <button className="app__changebutton" onClick={handleToggleSignUp}>
            {isSignUp ? "Já tem uma conta? Faça login" : "Criar uma conta"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
