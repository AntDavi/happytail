import React, { useState } from 'react';
import './Login.scss';
import icon from '../../assets/X.png';
import Line from '../../assets/Line 1.png';

import { TextField } from '@mui/material';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [registrationType, setRegistrationType] = useState<'pessoal' | 'ong'>('pessoal');

    const handleToggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const handleRegistrationType = (type: 'pessoal' | 'ong') => {
        setRegistrationType(type);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className='app__loginpage'>
            <div className='app__logincard'>
                <div className='app__header'>
                    <h1 className='app__headertitle'>
                        {isSignUp ? 'Cadastrar' : 'Login'}
                    </h1>
                    <button className='app__cancelbutton' onClick={onClose}>
                        <img src={icon} alt="Close" />
                    </button>
                </div>

                {isSignUp ? (
                    <div className='app__signupfield'>
                        <TextField id="outlined-basic" label="Nome" variant="outlined" className='app__field' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='app__field' />
                        <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" className='app__field' />

                        {registrationType === 'ong' && (
                            <>
                                <TextField id="outlined-basic" label="CNPJ" variant="outlined" className='app__field' />
                                <TextField id="outlined-basic" label="Cidade" variant="outlined" className='app__field' />
                                <TextField id="outlined-basic" label="Estado" variant="outlined" className='app__field' />
                                <TextField id="outlined-basic" label="Endereço" variant="outlined" className='app__field' />
                                <TextField id="outlined-basic" label="Bairro" variant="outlined" className='app__field' />
                                <TextField id="outlined-basic" label="CEP" variant="outlined" className='app__field' />
                            </>
                        )}

                        <button className='app__signupbutton'>
                            Cadastrar
                        </button>
                    </div>
                ) : (
                    <div className='app__loginfield'>
                        <TextField id="outlined-basic" label="Digite seu email" variant="outlined" className='app__field' />
                        <TextField id="outlined-basic" label="Digite sua senha" variant="outlined" type="password" className='app__field' />
                        <button className='app__loginbutton'>
                            Entrar
                        </button>
                    </div>
                )}

                <div className='app__changefield'>
                    <img src={Line} alt="Line" style={{ padding: 15 }} />
                    <button className='app__changebutton' onClick={handleToggleSignUp}>
                        {isSignUp ? 'Já tem uma conta? Faça login' : 'Criar uma conta'}
                    </button>
                    {isSignUp && (
                        <>
                            <button
                                className={`app__registertypebutton ${registrationType === 'pessoal' ? 'selected' : ''}`}
                                onClick={() => handleRegistrationType('pessoal')}
                            >
                                Pessoal
                            </button>
                            <button
                                className={`app__registertypebutton ${registrationType === 'ong' ? 'selected' : ''}`}
                                onClick={() => handleRegistrationType('ong')}
                            >
                                ONG
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
