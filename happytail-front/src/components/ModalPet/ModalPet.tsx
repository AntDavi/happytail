// Componente ModalPet
import React from 'react';

import './ModalPet.scss';
//import estopinha from '../../assets/estopinha.png'

import { AiOutlineClose } from 'react-icons/ai'
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

interface PetInfo {
    name: string;
    imageSrc: string;
    gender: 'male' | 'female';
    breed: string;
    size: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    petInfo: PetInfo | null;
}

const ModalPet: React.FC<ModalProps> = ({ isOpen, onClose, petInfo }) => {
    if (!isOpen) {
        return null;
    }

    const genderIcon = petInfo.gender === 'male' ? <BiMaleSign size={24} /> : <BiFemaleSign size={24}/>;

    return (
        <div className="app__modalpet">
            <div className='app__modalpet-background'>

            </div>
            <div className="app__modal-content">
                <div className='app__modal-header'>
                    <div>
                        <h2>{petInfo?.name}</h2>
                        {genderIcon}
                    </div>
                    <button onClick={onClose}>
                        <AiOutlineClose
                            size={24}
                        />
                    </button>
                </div>
                <p>Raça: {petInfo?.breed}</p>
                <p>Tamanho: {petInfo?.size}</p>
                <img src={petInfo?.imageSrc} className="app__modal-image"/>
                {/* Adicione outras informações adicionais do pet aqui */}
            </div>
        </div>
    );
};

export default ModalPet;
