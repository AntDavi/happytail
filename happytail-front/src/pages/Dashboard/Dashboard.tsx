import React, { useState } from 'react';
import { BiLogOut, BiPlus } from 'react-icons/bi';
import PetCard from '../../components/PetCard/PetCard';
import ModalAppPet from '../../components/ModalAppPet/ModalAppPet'; // Importe o seu componente ModalAppPet
import './Dashboard.scss';

import { BsFillPersonFill } from 'react-icons/bs'

interface PetInfo {
    name: string;
    gender: 'male' | 'female';
    breed: string;
    size: string;
}

interface DashboardProps {
    ongName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ ongName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const pets: PetInfo[] = [
        { name: 'Pet1', gender: 'male', breed: 'Breed1', size: 'Small' },
        { name: 'Pet2', gender: 'female', breed: 'Breed2', size: 'Medium' },
        // Adicione mais pets conforme necessário
    ];

    return (
        <div className="dashboard">
            <div className="sidebar flex items-center justify-between">
                <div className="ong-info flex flex-col items-center">
                    <BsFillPersonFill size={30} className="mb-3"/>
                    <p className="ong-name">{ongName}</p>
                </div>
                <div className="logout">
                    <BiLogOut size={24} />
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <button className="add-pet-button" onClick={handleOpenModal}>
                        <BiPlus size={20} />
                        Adicionar PET
                    </button>
                </div>
                <div className="pet-list">
                    {pets.map((pet, index) => (
                        <PetCard key={index} {...pet} />
                    ))}
                </div>
            </div>
            <ModalAppPet isOpen={isModalOpen} onClose={handleCloseModal} onAddPet={(petData) => {
                // Adicione lógica para adicionar o pet à lista de pets
                console.log('Adicionar pet:', petData);
                handleCloseModal();
            }} />
        </div>
    );
};

export default Dashboard;
