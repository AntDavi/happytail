import React from "react";
import "./PetCard.scss";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { Gender } from "../../interfaces/pets";

interface PetCardProps {
  name: string;
  imageSrc: string;
  gender: Gender;
  breed: string;
  size: string;
  onClick?: () => void;
}

const PetCard: React.FC<PetCardProps> = ({
  name,
  imageSrc,
  gender,
  breed,
  size,
  onClick,
}) => {
  const genderIcon =
    gender === "male" ? <BiMaleSign size={24} /> : <BiFemaleSign size={24} />;

  return (
    <div className="app__petcard" onClick={onClick}>
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
};

export default PetCard;
