import React from 'react';
import './Login.scss';
import icon from '../../assets/X.png';
import Line from '../../assets/Line 1.png';

import { TextField } from '@mui/material';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className='app__loginpage'>
            <div className='app__logincard'>
                <div className='app__header'>
                    <h1 className='app__headertitle'>
                        Login
                    </h1>
                    <button className='app__cancelbutton' onClick={onClose}>
                        <img src={icon} alt="Close" />
                    </button>
                </div>

                <div className='app__loginfield'>
                    <TextField id="outlined-basic" label="Digite seu email" variant="outlined" className='app__field' />
                    <TextField id="outlined-basic" label="Digite sua senha" variant="outlined" 
                    type="password" className='app__field'/>
                    <button className='app__loginbutton'>
                        Entrar
                    </button>
                </div>

                <div className='app__changefield'>
                    <img src={Line} alt="Line" style={{ padding: 15 }} />
                    <button className='app__changebutton'>
                        Entrar como uma ONG
                    </button>
                    <button className='app__createAccbutton'>
                        Criar uma conta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
