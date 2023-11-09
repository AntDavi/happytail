import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PetSearch from '../../components/PetSearch/PetSearch';
import PetCard from '../../components/PetCard/PetCard';
import ModalPet from '../../components/ModalPet/ModalPet';

import './Home.scss';

import Estopinha from '../../assets/estopinha.png';

// Interface para representar as informações do pet
interface PetInfo {
    name: string;
    gender: 'male' | 'female';
    breed: string;
    size: string;
}

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState<PetInfo | null>(null);

    const handlePetCardClick = (petInfo: PetInfo) => {
        setSelectedPet(petInfo);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
    };

    return (
        <div className='flex items-center justify-center flex-col w-[100%] h-[100vh]'>
            <Navbar />
            <PetSearch />

            <div className='app__home-content grid grid-cols-5 gap-5'>
                <PetCard
                    name="Estopinha"
                    imageSrc={Estopinha}
                    gender="female"
                    breed="SRD"
                    size="Pequeno"
                    onClick={() => handlePetCardClick({
                        name: "Estopinha",
                        gender: "female",
                        breed: "SRD",
                        size: "Pequeno",
                    })}
                />
                <PetCard
                    name="Estopinha"
                    imageSrc={Estopinha}
                    gender="male"
                    breed="SRD"
                    size="Pequeno"
                    onClick={() => handlePetCardClick({
                        name: "Estopinha",
                        gender: "male",
                        breed: "SRD",
                        size: "Pequeno",
                    })}
                />
            </div>

            <ModalPet isOpen={isModalOpen} onClose={closeModal} petInfo={selectedPet} />
        </div>
    );
};

export default Home;
