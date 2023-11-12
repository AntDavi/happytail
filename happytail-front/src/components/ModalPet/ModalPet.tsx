import { AiOutlineClose } from "react-icons/ai";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

import "./ModalPet.scss";
import { FirestorePetData } from "../../interfaces/pets";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  petInfo: FirestorePetData;
}

const ModalPet: React.FC<ModalProps> = ({ isOpen, onClose, petInfo }) => {
  if (!isOpen) {
    return null;
  }

  const genderIcon =
    petInfo.gender === "male" ? (
      <BiMaleSign size={24} />
    ) : (
      <BiFemaleSign size={24} />
    );

  return (
    <div className="app__modalpet">
      <div className="app__modalpet-background"></div>
      <div className="app__modal-content">
        <div className="app__modal-header">
          <div>
            <h2>{petInfo?.name}</h2>
            {genderIcon}
          </div>
          <button onClick={onClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <img src={petInfo?.image} className="app__modal-image" />

        <div className="pet-modal-dividor"></div>

        <p className="app__modal-description">{petInfo?.temperament}</p>

        <div className="modal-infos">
          <p>Raça: {petInfo?.breed}</p>
          <p>Porte: {petInfo?.size}</p>
          <p>Temperamento: {petInfo?.temperament}</p>
          <p>Idade: {petInfo?.age} anos</p>
          {/* Adicione outras informações adicionais do pet aqui */}
        </div>
      </div>
    </div>
  );
};

export default ModalPet;
