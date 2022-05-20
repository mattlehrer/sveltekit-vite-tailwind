import { writable } from 'svelte/store';

export const nba = writable([]);

const secretKeyNba = import.meta.env.VITE_API_NBA;

const fetchNba = async () => {
    const url = `https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2015-OCT-31?key=${secretKeyNba}`;
    const res = await fetch(url);
    const data = await res.json();

    const loadedData = data.map((data, index) => {
        return {
            isSelected: false,
            isSelectedAsParly: false,
            isSelectedAsTease: false,
            valueHomeSpread: false,
            valueAwaySpread: false,
            valueOver: false,
            valueUnder: false,
            id: index + 1,
            away: data.AwayTeam,
            home: data.HomeTeam,
        };

    });
    nba.set(loadedData);
};
fetchNba();