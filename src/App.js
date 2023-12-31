import React from 'react';
import './App.css';

const profileData = [
  {
    id: 1,
    name: 'Dr. Manish Sarkar',
    experience: '21',
    contact: 'CR Park,Delhi  EHSAAS',
    Fees: '₹2000',
    imageSrc: './Images/dr-manish-sarkar-psychiatrist-delhi-2cd483e6-e14a-4148-8bbf-a2fad49be69a.jpg',
  },
  {
    id: 2,
    name: 'Dr. Manish Jain',
    experience: '20',
    contact: 'Pusa Road,Delhi  BLK-Max Super Speciality',
    Fees: '₹1800',
    imageSrc: './Images/dr-manish-jain-psychiatrist-delhi-48762b8f-6d21-4699-94b4-47d130ee396a.jpg',
  },
  {
    id: 3,
    name: 'Dr. Sugandha Gupta',
    experience: '18',
    contact: 'Karol Bagh,Delhi  Delhi Mind Clinic',
    Fees: '₹1200',
    imageSrc: './Images/dr-sugandha-gupta-psychiatrist-delhi-c5c16569-197f-487e-9642-74479b0a4bcc.jpg',
  },
  {
    id: 4,
    name: 'Dr. Anuneet Sabharwal',
    experience: '12',
    contact: 'Vivek Vihar,Delhi  The Happy Tree - De-addiction And Mental Health Hospital',
    Fees: '₹1000',
    imageSrc: './Images/dr-anuneet-sabharwal-psychiatrist-delhi-ed8dfffa-b3bf-40f2-84cd-31cffccfdbc6 (1).jpg',
  },
  {
    id: 5,
    name: 'Dr. Monica Chib',
    experience: '46',
    contact: 'Sarita Vihar,Delhi  Indraprastha Apollo Hospitals',
    Fees: '₹2500',
    imageSrc: './Images/dr-monica-chib-psychiatrist-delhi-695318d0-81b8-4dc1-b124-f4296719d1f4.jpg',
  },
  {
    id: 6,
    name: 'Dr. Amit Garg',
    experience: '17',
    contact: 'Rohini Sector 9,Delhi  Felicity Mind Care Clinic',
    Fees: '₹1500',
    imageSrc: './Images/dr-amit-garg-psychiatrist-delhi-c1256e0e-9a55-431a-b715-f534375de336.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <div className="profile-cards">
        {profileData.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img
              className="profile-pic"
              src={process.env.PUBLIC_URL + profile.imageSrc}
              alt={`Profile of ${profile.name}`}
            />
            <h2>{profile.name}</h2>
            <p>{profile.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
