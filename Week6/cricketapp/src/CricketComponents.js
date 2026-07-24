import React from 'react';

// --- Data ---
export const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
];

export const T20Players = ['First Player', 'Second Player', 'Third Player'];
export const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merge using ES6 Spread Operator
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];


// --- Components ---

// 1. Map all players
export function ListofPlayers({ players }) {
    return (
        <div>
            {players.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            ))}
        </div>
    );
}

// 2. Filter players below 70 score using arrow functions
export function Scorebelow70({ players }) {
    const players70 = [];
    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>
            {players70.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span> {item.score} </span></li>
                </div>
            ))}
        </div>
    );
}

// 3. Destructure Odd Players
export function OddPlayers([first, , third, , fifth]) {
    return (
        <div>
            <li> First : {first.name}</li>
            <li> Third : {third.name}</li>
            <li> Fifth : {fifth.name}</li>
        </div>
    );
}

// 4. Destructure Even Players
export function EvenPlayers([, second, , fourth, , sixth]) {
    return (
        <div>
            <li> Second : {second.name}</li>
            <li> Fourth : {fourth.name}</li>
            <li> Sixth : {sixth.name}</li>
        </div>
    );
}

// 5. Display Merged Indian Players
export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <div>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </div>
    );
}