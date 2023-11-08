import React from 'react';
import './PetCard.scss';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

interface PetCardProps {
    name: string;
    imageSrc: string;
    gender: 'male' | 'female';
    breed: string;
    size: string;
}

const PetCard: React.FC<PetCardProps> = ({ name, imageSrc, gender, breed, size }) => {
    const genderIcon = gender === 'male' ? <BiMaleSign size={24} /> : <BiFemaleSign size={24}/>;

        return (
        <div className="app__petcard">
            <img src={imageSrc} alt={name} />
            <div className="app__petcard-header">
                <h2>{name}</h2>
                {genderIcon}
            </div>
            <div className="app__petcard-footer">
                <p>{breed}</p>
                <span>{size}</span>
            </div>
        </div>
        );
}

export default PetCard
