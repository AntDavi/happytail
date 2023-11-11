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
    age: string;
    temperance: string;
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

    const genderIcon = petInfo.gender === 'male' ? <BiMaleSign size={24} /> : <BiFemaleSign size={24} />;

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
                <img src={petInfo?.imageSrc} className="app__modal-image" />

                <div className="pet-modal-dividor"></div>

                <p className="app__modal-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veritatis, dignissimos sapiente similique, adipisci ea dolorum repudiandae et unde iste, voluptates consequuntur tempore numquam totam nisi quaerat eius exercitationem impedit!
                </p>

                <div className="modal-infos">
                    <p>Raça: {petInfo?.breed}</p>
                    <p>Porte: {petInfo?.size}</p>
                    <p>Temperamento: {petInfo?.temperance}</p>
                    <p>Idade: {petInfo?.age} anos</p>
                    {/* Adicione outras informações adicionais do pet aqui */}
                </div>

            </div>
        </div>
    );
};

export default ModalPet;
