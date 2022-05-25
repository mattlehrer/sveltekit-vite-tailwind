<script>
  import Card from "./Card.svelte";
  import GameRow from "./GameRow.svelte";
  import { crossfade, fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  export let game;

  const [send, receive] = crossfade({ fallback: fade });

  let tma =
    "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
  let tmna = "NFL";
  let tmca = "flex row bg-red-500 border-4 border-indigo-500/100";

  let tmh =
    "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
  let tmnh = "NFL";
  let tmch = "flex row bg-red-500 border-4 border-indigo-500/100";

  if (game.away == "BAL") {
    tma = "https://cdn.usteamcolors.com/images/nfl/baltimore-ravens.svg";
    tmna = "BAL";
    tmca =
      "flex row bg-purple-400 border-b-purple-400 border-l-purple-900 border-r-purple-900 border-t-purple-900 border-8";
  } else if (game.away == "CLE") {
    tma = "https://cdn.usteamcolors.com/images/nfl/cleveland-browns.svg";
    tmna = "CLE";
    tmca =
      "flex row bg-orange-300 border-b-orange-300 border-l-orange-900 border-r-orange-900 border-t-orange-900 border-8";
  } else if (game.away == "BUF") {
    tma = "https://cdn.usteamcolors.com/images/nfl/buffalo-bills.svg";
    tmna = "BUF";
    tmca =
      "flex row bg-blue-600 border-b-blue-600 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "ATL") {
    tma = "https://cdn.usteamcolors.com/images/nfl/atlanta-falcons.svg";
    tmna = "ATL";
    tmca =
      "flex row bg-stone-300 border-b-stone-300 border-l-stone-900 border-r-stone-900 border-t-stone-900 border-8";
  } else if (game.away == "ARI") {
    tma = "https://cdn.usteamcolors.com/images/nfl/arizona-cardinals.svg";
    tmna = "ARI";
    tmca =
      "flex row bg-red-300 border-b-red-300 border-l-red-900 border-r-red-900 border-t-red-900 border-8";
  } else if (game.away == "CIN") {
    tma = "https://cdn.usteamcolors.com/images/nfl/cincinnati-bengals.svg";
    tmna = "CIN";
    tmca =
      "flex row bg-orange-300 border-b-orange-300 border-l-orange-900 border-r-orange-900 border-t-orange-900 border-8";
  } else if (game.away == "CAR") {
    tma = "https://cdn.usteamcolors.com/images/nfl/carolina-panthers.svg";
    tmna = "CAR";
    tmca =
      "flex row bg-teal-500 border-b-teal-500 border-l-teal-900 border-r-teal-900 border-t-teal-900 border-8";
  } else if (game.away == "CHI") {
    tma = "https://cdn.usteamcolors.com/images/nfl/chicago-bears.svg";
    tmna = "CHI";
    tmca =
      "flex row bg-orange-300 border-b-orange-300 border-l-orange-900 border-r-orange-900 border-t-orange-900 border-8";
  } else if (game.away == "DAL") {
    tma = "https://cdn.usteamcolors.com/images/nfl/dallas-cowboys.svg";
    tmna = "DAL";
    tmca =
      "flex row bg-blue-700 border-b-blue-700 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "DEN") {
    tma = "https://cdn.usteamcolors.com/images/nfl/denver-broncos.svg";
    tmna = "DEN";
    tmca =
      "flex row bg-orange-400 border-b-orange-400 border-l-orange-900 border-r-orange-900 border-t-orange-900 border-8";
  } else if (game.away == "DET") {
    tma = "https://cdn.usteamcolors.com/images/nfl/detroit-lions.svg";
    tmna = "DET";
    tmca =
      "flex row bg-teal-300 border-b-teal-300 border-l-teal-900 border-r-teal-900 border-t-teal-900 border-8";
  } else if (game.away == "GB") {
    tma = "https://cdn.usteamcolors.com/images/nfl/green-bay-packers.svg";
    tmna = "GB";
    tmca =
      "flex row bg-green-500 border-b-green-500 border-l-green-900 border-r-green-900 border-t-green-900 border-8";
  } else if (game.away == "HOU") {
    tma = "https://cdn.usteamcolors.com/images/nfl/houston-texans.svg";
    tmna = "HOU";
    tmca =
      "flex row bg-blue-600 border-b-blue-600 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "IND") {
    tma = "https://cdn.usteamcolors.com/images/nfl/indianapolis-colts.svg";
    tmna = "IND";
    tmca =
      "flex row bg-blue-700 border-b-blue-700 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "JAX") {
    tma = "https://cdn.usteamcolors.com/images/nfl/jacksonville-jaguars.svg";
    tmna = "JAX";
    tmca =
      "flex row bg-teal-500 border-b-teal-500 border-l-teal-900 border-r-teal-900 border-t-teal-900 border-8";
  } else if (game.away == "KC") {
    tma = "https://cdn.usteamcolors.com/images/nfl/kansas-city-chiefs.svg";
    tmna = "KC";
    tmca =
      "flex row bg-red-500 border-b-red-500 border-l-red-900 border-r-red-900 border-t-red-900 border-8";
  } else if (game.away == "LAC") {
    tma = "https://cdn.usteamcolors.com/images/nfl/los-angeles-chargers.svg";
    tmna = "LAC";
    tmca =
      "flex row bg-cyan-500 border-b-cyan-500 border-l-cyan-900 border-r-cyan-900 border-t-cyan-900 border-8";
  } else if (game.away == "LAR") {
    tma = "https://cdn.usteamcolors.com/images/nfl/los-angeles-rams.svg";
    tmna = "LAR";
    tmca =
      "flex row bg-yellow-500 border-b-yellow-500 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "MIA") {
    tma = "https://cdn.usteamcolors.com/images/nfl/miami-dolphins.svg";
    tmna = "MIA";
    tmca =
      "flex row bg-teal-500 border-b-teal-500 border-l-teal-900 border-r-teal-900 border-t-teal-900 border-8";
  } else if (game.away == "MIN") {
    tma = "https://cdn.usteamcolors.com/images/nfl/minnesota-vikings.svg";
    tmna = "MIN";
    tmca =
      "flex row bg-purple-400 border-b-purple-400 border-l-purple-900 border-r-purple-900 border-t-purple-900 border-8";
  } else if (game.away == "NE") {
    tma = "https://cdn.usteamcolors.com/images/nfl/new-england-patriots.svg";
    tmna = "NE";
    tmca =
      "flex row bg-blue-400 border-b-blue-400 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "NO") {
    tma = "https://cdn.usteamcolors.com/images/nfl/new-orleans-saints.svg";
    tmna = "NO";
    tmca =
      "flex row bg-yellow-400 border-b-yellow-400 border-l-yellow-900 border-r-yellow-900 border-t-yellow-900 border-8";
  } else if (game.away == "NYG") {
    tma = "https://cdn.usteamcolors.com/images/nfl/new-york-giants.svg";
    tmna = "NYG";
    tmca =
      "flex row bg-blue-400 border-b-blue-400 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "NYJ") {
    tma = "https://cdn.usteamcolors.com/images/nfl/new-york-jets.svg";
    tmna = "NYJ";
    tmca =
      "flex row bg-green-500 border-b-green-500 border-l-green-900 border-r-green-900 border-t-green-900 border-8";
  } else if (game.away == "LV") {
    tma = "https://cdn.usteamcolors.com/images/nfl/oakland-raiders.svg";
    tmna = "LV";
    tmca =
      "flex row bg-slate-400 border-b-slate-400 border-l-slate-900 border-r-slate-900 border-t-slate-900 border-8";
  } else if (game.away == "PHI") {
    tma = "https://cdn.usteamcolors.com/images/nfl/philadelphia-eagles.svg";
    tmna = "PHI";
    tmca =
      "flex row bg-green-600 border-b-green-600 border-l-green-900 border-r-green-900 border-t-green-900 border-8";
  } else if (game.away == "PIT") {
    tma = "https://cdn.usteamcolors.com/images/nfl/pittsburgh-steelers.svg";
    tmna = "PIT";
    tmca =
      "flex row bg-stone-300 border-b-stone-300 border-l-stone-900 border-r-stone-900 border-t-stone-900 border-8";
  } else if (game.away == "SF") {
    tma = "https://cdn.usteamcolors.com/images/nfl/san-francisco-49ers.svg";
    tmna = "SF";
    tmca =
      "flex row bg-red-400 border-b-red-400 border-l-red-900 border-r-red-900 border-t-red-900 border-8";
  } else if (game.away == "SEA") {
    tma = "https://cdn.usteamcolors.com/images/nfl/seattle-seahawks.svg";
    tmna = "SEA";
    tmca =
      "flex row bg-green-500 border-b-green-500 border-l-green-900 border-r-green-900 border-t-green-900 border-8";
  } else if (game.away == "TB") {
    tma = "https://cdn.usteamcolors.com/images/nfl/tampa-bay-buccaneers.svg";
    tmna = "TB";
    tmca =
      "flex row bg-red-400 border-b-red-400 border-l-red-900 border-r-red-900 border-t-red-900 border-8";
  } else if (game.away == "TEN") {
    tma = "https://cdn.usteamcolors.com/images/nfl/tennessee-titans.svg";
    tmna = "TEN";
    tmca =
      "flex row bg-blue-600 border-b-blue-600 border-l-blue-900 border-r-blue-900 border-t-blue-900 border-8";
  } else if (game.away == "WAS") {
    tma = "https://cdn.usteamcolors.com/images/nfl/washington-redskins.svg";
    tmna = "WAS";
    tmca =
      "flex row bg-red-400 border-b-red-400 border-l-red-900 border-r-red-900 border-t-red-900 border-8";
  } else {
    tma =
      "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
    tmna = "NFL";
  }

  if (game.home == "BAL") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/baltimore-ravens.svg";
    tmnh = "BAL";
    tmch =
      "flex row bg-purple-400 border-b-purple-900 border-l-purple-900 border-r-purple-900 border-t-purple-200 border-t-purple-400 border-8";
  } else if (game.home == "ATL") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/atlanta-falcons.svg";
    tmnh = "ATL";
    tmch =
      "flex row bg-slate-200 border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-slate-200 border-t-slate-200 border-8";
  } else if (game.home == "DET") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/detroit-lions.svg";
    tmnh = "DET";
    tmch =
      "flex row bg-teal-200 border-b-teal-900 border-l-teal-900 border-r-teal-900 border-t-teal-200 border-t-teal-200 border-8";
  } else if (game.home == "LAR") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/los-angeles-rams.svg";
    tmnh = "LAR";
    tmch =
      "flex row bg-yellow-200 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-yellow-200 border-8";
  } else if (game.home == "KC") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/kansas-city-chiefs.svg";
    tmnh = "KC";
    tmch =
      "flex row bg-red-200 border-b-red-900 border-l-red-900 border-r-red-900 border-t-red-200 border-t-red-200 border-8";
  } else if (game.home == "CAR") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/carolina-panthers.svg";
    tmnh = "CAR";
    tmch =
      "flex row bg-teal-200 border-b-teal-900 border-l-teal-900 border-r-teal-900 border-t-teal-200 border-t-teal-200 border-8";
  } else if (game.home == "SF") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/san-francisco-49ers.svg";
    tmnh = "SF";
    tmch =
      "flex row bg-red-400 border-b-red-900 border-l-red-900 border-r-red-900 border-t-red-400 border-8";
  } else if (game.home == "DEN") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/denver-broncos.svg";
    tmnh = "DEN";
    tmch =
      "flex row bg-orange-400 border-b-orange-900 border-l-orange-900 border-r-orange-900 border-t-orange-200 border-t-orange-400 border-8";
  } else if (game.home == "WAS") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/washington-redskins.svg";
    tmnh = "WAS";
    tmch =
      "flex row bg-red-200 border-b-red-900 border-l-red-900 border-r-red-900 border-t-red-200 border-t-red-200 border-8";
  } else if (game.home == "NYG") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/new-york-giants.svg";
    tmnh = "NYG";
    tmch =
      "flex row bg-blue-400 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-200 border-t-blue-400 border-8";
  } else if (game.home == "NO") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/new-orleans-saints.svg";
    tmnh = "NO";
    tmch =
      "flex row bg-yellow-400 border-b-yellow-900 border-l-yellow-900 border-r-yellow-900 border-t-yellow-200 border-t-yellow-400 border-8";
  } else if (game.home == "NE") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/new-england-patriots.svg";
    tmnh = "NE";
    tmch =
      "flex row bg-blue-400 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-200 border-t-blue-400 border-8";
  } else if (game.home == "BUF") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/buffalo-bills.svg";
    tmnh = "BUF";
    tmch =
      "flex row bg-blue-400 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-200 border-t-blue-400 border-8";
  } else if (game.home == "LV") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/oakland-raiders.svg";
    tmnh = "LV";
    tmch =
      "flex row bg-slate-200 border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-slate-200 border-t-slate-200 border-8";
  } else if (game.home == "SEA") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/seattle-seahawks.svg";
    tmnh = "SEA";
    tmch =
      "flex row bg-green-300 border-b-green-900 border-l-green-900 border-r-green-900 border-t-green-200 border-t-green-300 border-8";
  } else if (game.home == "JAX") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/jacksonville-jaguars.svg";
    tmnh = "JAX";
    tmch =
      "flex row bg-teal-200 border-b-teal-900 border-l-teal-900 border-r-teal-900 border-t-teal-200 border-t-teal-200 border-8";
  } else if (game.home == "MIN") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/minnesota-vikings.svg";
    tmnh = "MIN";
    tmch =
      "flex row bg-purple-200 border-b-purple-900 border-l-purple-900 border-r-purple-900 border-t-purple-200 border-t-purple-200 border-8";
  } else if (game.home == "TB") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/tampa-bay-buccaneers.svg";
    tmnh = "TB";
    tmch =
      "flex row bg-red-400 border-b-red-900 border-l-red-900 border-r-red-900 border-t-red-200 border-t-red-400 border-8";
  } else if (game.home == "LAC") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/los-angeles-chargers.svg";
    tmnh = "LAC";
    tmch =
      "flex row bg-cyan-300 border-b-cyan-900 border-l-cyan-900 border-r-cyan-900 border-t-cyan-200 border-t-cyan-300 border-8";
  } else if (game.home == "PHI") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/philadelphia-eagles.svg";
    tmnh = "PHI";
    tmch =
      "flex row bg-green-400 border-b-green-900 border-l-green-900 border-r-green-900 border-t-green-200 border-t-green-400 border-8";
  } else if (game.home == "MIA") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/miami-dolphins.svg";
    tmnh = "MIA";
    tmch =
      "flex row bg-teal-200 border-b-teal-900 border-l-teal-900 border-r-teal-900 border-t-teal-200 border-8";
  } else if (game.home == "NYJ") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/new-york-jets.svg";
    tmnh = "NYJ";
    tmch =
      "flex row bg-green-600 border-b-green-900 border-b-green-900 border-l-green-900 border-r-green-900 border-b-green-600 border-t-green-600 border-8";
  } else if (game.home == "IND") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/indianapolis-colts.svg";
    tmnh = "IND";
    tmch =
      "flex row bg-blue-500 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-500 border-8";
  } else if (game.home == "TEN") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/tennessee-titans.svg";
    tmnh = "TEN";
    tmch =
      "flex row bg-blue-400 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-200 border-t-blue-400 border-8";
  } else if (game.home == "GB") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/green-bay-packers.svg";
    tmnh = "GB";
    tmch =
      "flex row bg-green-500 border-b-green-900 border-l-green-900 border-r-green-900 border-t-green-500 border-8";
  } else if (game.home == "CHI") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/chicago-bears.svg";
    tmnh = "CHI";
    tmch =
      "flex row bg-orange-400 border-b-orange-900 border-l-orange-900 border-r-orange-900 border-t-orange-400 border-8";
  } else if (game.home == "ARI") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/arizona-cardinals.svg";
    tmnh = "ARI";
    tmch =
      "flex row bg-red-300 border-b-red-900 border-l-red-900 border-r-red-900 border-t-red-300 border-8";
  } else if (game.home == "PIT") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/pittsburgh-steelers.svg";
    tmnh = "PIT";
    tmch =
      "flex row bg-yellow-300 border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-yellow-300 border-8";
  } else if (game.home == "CLE") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/cleveland-browns.svg";
    tmnh = "CLE";
    tmch =
      "flex row bg-orange-300 border-t-orange-500 border-b-orange-900 border-l-orange-900 border-r-orange-900 border-t-orange-300 border-8";
  } else if (game.home == "CIN") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/cincinnati-bengals.svg";
    tmnh = "CIN";
    tmch =
      "flex row bg-orange-300 border-t-orange-500 border-b-orange-900 border-l-orange-900 border-r-orange-900 border-t-orange-300 border-8";
  } else if (game.home == "HOU") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/houston-texans.svg";
    tmnh = "HOU";
    tmch =
      "flex row bg-blue-300 border-t-blue-300 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-b-blue-900 border-8";
  } else if (game.home == "DAL") {
    tmh = "https://cdn.usteamcolors.com/images/nfl/dallas-cowboys.svg";
    tmnh = "DAL";
    tmch =
      "flex row bg-blue-300 border-b-blue-900 border-l-blue-900 border-r-blue-900 border-t-blue-300 border-8";
  } else {
    tmh =
      "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
    tmnh = "NFL";
    tmch = "flex row bg-green-500";
  }
  let lgo = "ml-4 mr-2";
  let ti = "pt-4 mr-14";
  let sp = "flex row pt-8 ml-2";
  let ca = "ml-2 mr-4";

  export let selected = [];
</script>

<GameRow type={tmca}>
  <div class={lgo} slot="logo">
    <img src={tma} alt={tmna} width="60" height="60" />
  </div>
  <h1 class={ti} slot="title">{game.away}</h1>
  <h2 class={sp} slot="spread">
    <input
      class={ca}
      type="checkbox"
      name="awsp"
      bind:group={selected}
      value={game.away_spread}
    />
    {game.away_spread}
    <input
      class={ca}
      type="checkbox"
      name="over"
      bind:group={selected}
      value={game.over}
    />
    {game.over}
    <h1>Over</h1>
    <input
      class={ca}
      type="checkbox"
      name="awml"
      bind:group={selected}
      value={game.away_money_line}
    />
    {game.away_money_line}
    <h1 class={ca}>M/L</h1>
  </h2>
</GameRow>

<GameRow type={tmch}>
  <div class={lgo} slot="logo">
    <img src={tmh} alt={tmnh} width="60" height="60" />
  </div>
  <h1 class={ti} slot="title">{game.home}</h1>
  <h2 class={sp} slot="spread">
    <input
      class={ca}
      type="checkbox"
      name="hmsp"
      bind:group={selected}
      value={game.home_spread}
    />
    {game.home_spread}
    <input
      class={ca}
      type="checkbox"
      name="under"
      bind:group={selected}
      value={game.under}
    />
    {game.under}
    <h1>Under</h1>
    <input
      class={ca}
      type="checkbox"
      name="hmml"
      bind:group={selected}
      value={game.home_money_line}
    />
    {game.home_money_line}
    <h1 class={ca}>M/L</h1>
  </h2>
</GameRow>

<div class="border-stone-900 border-b-8 border-double" />
<div class="border-stone-900 border-b-8 border-double" />

<ul>
  {#each selected as action}
    <li>
      {action}
    </li>
  {/each}
</ul>
