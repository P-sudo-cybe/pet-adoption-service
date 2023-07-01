
const pets = [
    {
      name: "Buddy",
      breed: "Golden Retriever",
      age: 2,
      image : "C:\Users\LENOVO\OneDrive\Desktop\images/dog1.jfif",
    },
    {
      name: "Max",
      breed: "Labrador Retriever",
      age: 3,
     
    },
    {
      name: "Charlie",
      breed: "Bulldog",
      age: 1,
      image: "images/dog3.jpg",
    },
  ];

  function generatePetCards() {
    const petList = document.querySelector(".pet-list");

    petList.innerHTML = "";
  
    pets.forEach((pet) => {
      const petCard = document.createElement("div");
      petCard.classList.add("pet-card");
  
      const petImage = document.createElement("img");
      petImage.src = pet.image;
      petImage.alt = pet.name;
      petCard.appendChild(petImage);
  
      const petName = document.createElement("h3");
      petName.textContent = pet.name;
      petCard.appendChild(petName);
  
      const petDetails = document.createElement("p");
      petDetails.textContent = `${pet.breed}, ${pet.age} years old`;
      petCard.appendChild(petDetails);
  
      petList.appendChild(petCard);
    });
  }
  window.addEventListener("DOMContentLoaded", generatePetCards);