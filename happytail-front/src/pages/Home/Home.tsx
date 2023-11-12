import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import Navbar from "../../components/Navbar/Navbar";
import PetSearch from "../../components/PetSearch/PetSearch";
import PetCard from "../../components/PetCard/PetCard";
import ModalPet from "../../components/ModalPet/ModalPet";

import LoginModal from "../../components/Login/Login";

import "./Home.scss";

import { addDoc, collection, getDocs } from "firebase/firestore";
import { FirestorePetData, Gender } from "../../interfaces/pets";

const Home = () => {
  const [dogData, setDogData] = useState<FirestorePetData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const dogs: FirestorePetData[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as FirestorePetData;
        console.log(data);
        dogs.push({
          id: doc.id,
          name: data.name,
          image: data.image,
          gender: data.gender,
          breed: data.breed,
          size: data.size,
          age: data.age,
          temperament: data.temperament,
        });
      });

      setDogData(dogs);
    };

    fetchData();
  }, []);

  //   const newPet = {
  //     name: "Rex",
  //     image:
  //       "https://as1.ftcdn.net/v2/jpg/01/03/97/52/1000_F_103975260_sOa1Cq2QNhenLiovsuFo39qRZbi0eXZM.jpg",
  //     gender: "male" as Gender,
  //     breed: "Golden Retriever",
  //     size: "Médio",
  //     age: "2 anos",
  //     temperament: "Amigável e brincalhão",
  //   };

  //   const addNewPet = async (newPetData: Omit<FirestorePetData, "id">) => {
  //     try {
  //       const petCollectionRef = collection(db, "pets");

  //       await addDoc(petCollectionRef, newPetData);
  //     } catch (error) {
  //       console.error("Erro ao adicionar novo pet:", error);
  //     }
  //   };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState<FirestorePetData | null>(null);

  const handlePetCardClick = (petInfo: FirestorePetData) => {
    setSelectedPet(petInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center flex-col w-[100%] h-[100vh]">
      <Navbar openLoginModal={openLoginModal} />
      {isLoginModalOpen && (
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      )}
      <PetSearch />

      <div className="app__home-content grid grid-cols-5 gap-5">
        {dogData.map((dog) => (
          <PetCard
            key={dog.id}
            name={dog.name}
            imageSrc={dog.image}
            gender={dog.gender}
            breed={dog.breed}
            size={dog.size}
            onClick={() => handlePetCardClick(dog)}
          />
        ))}
      </div>

      {selectedPet && (
        <ModalPet
          isOpen={isModalOpen}
          onClose={closeModal}
          petInfo={selectedPet}
        />
      )}
    </div>
  );
};

export default Home;
