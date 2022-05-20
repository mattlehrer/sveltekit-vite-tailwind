import { writable } from 'svelte/store';

export const nfl = writable([]);
// YOU WILL NEED TO UPDATE THIS FEED CREATED AS A TEST
const secretKeyNfl = import.meta.env.VITE_API_NFL;

const fetchNfl = async () => {
    const url = `https://api.sportsdata.io/v3/nfl/odds/json/LiveGameOddsByWeek/2020/3?key=${secretKeyNfl}`;
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
            away: data.AwayTeamName,
            away_spread: data.LiveOdds[0].AwayPointSpread,
            home: data.HomeTeamName,
            home_spread: data.LiveOdds[0].HomePointSpread,
            away_money_line: data.LiveOdds[0].AwayMoneyLine,
            home_money_line: data.LiveOdds[0].HomeMoneyLine,
            over_under: data.LiveOdds[0].OverUnder,
        };

    });
    nfl.set(loadedData);
};
fetchNfl();