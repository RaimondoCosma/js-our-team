'use strict';

// Dichiaro variabile relativa all'oggetto Team
const teamMembers = [
    {
        fullName: 'Wayne Barnett',
        occupation: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullName: 'Angela Caroll',
        occupation: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullName: 'Walter Gordon',
        occupation: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        fullName: 'Angela Lopez',
        occupation: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullName: 'Scott Estrada',
        occupation: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        fullName: 'Barbara Ramos',
        occupation: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
]

console.log(teamMembers);

// Creo un ciclo per stampare in console.log le informazioni relative alle chiavi dei membri
// for ( let i = 0; i < teamMembers.length; i++ ){
// }

// Dichiaro variabile relativa a #members del DOM
const members = document.getElementById('members');

// Creo ciclo per aggiungere <li> e inserirli nel DOM
for ( let i = 0; i < teamMembers.length; i++ ){
    console.log(teamMembers[i].fullName, teamMembers[i].occupation, teamMembers[i].image);
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <h3>${teamMembers[i].fullName}</h3>
    <h5>${teamMembers[i].occupation}</h5>
    <img src="" alt="${teamMembers[i].image}"></img>`;
    members.append(listItem);
}