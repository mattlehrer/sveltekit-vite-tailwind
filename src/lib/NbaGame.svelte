<script>
  import GameRow from "./GameRow.svelte";
  import Checkbox from "./Checkbox.svelte";
  export let game;

  let tma =
    "https://cdn.usteamcolors.com/images/nba/utah-jazz.svg";
  let tmna = "NBA";
  let tmca = "flex row bg-red-500 border-4 border-indigo-500/100";

  let tmh =
    "https://cdn.usteamcolors.com/images/nba/utah-jazz.svg";
  let tmnh = "NBA";
  let tmch = "flex row bg-red-500 border-4 border-indigo-500/100";

  if (game.away == "UTA") {
    tma = "https://cdn.usteamcolors.com/images/nba/utah-jazz.svg";
    tmna = "BAL";
    tmca =
      "flex row bg-purple-400 border-b-purple-400 border-l-purple-900 border-r-purple-900 border-t-purple-900 border-8";
  } else if (game.away == "CLE") {
    tma = "https://cdn.usteamcolors.com/images/nba/utah-jazz.svg";
    tmna = "CLE";
    tmca =
      "flex row bg-orange-300 border-b-orange-300 border-l-orange-900 border-r-orange-900 border-t-orange-900 border-8";
  } else {
    tma =
      "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NBA.png";
    tmna = "NBA";
  }

  if (game.home == "BAL") {
    tmh = "https://cdn.usteamcolors.com/images/NBA/baltimore-ravens.svg";
    tmnh = "BAL";
    tmch =
      "flex row bg-purple-400 border-b-purple-900 border-l-purple-900 border-r-purple-900 border-t-purple-200 border-t-purple-400 border-8";
  } else if (game.home == "ATL") {
    tmh = "https://cdn.usteamcolors.com/images/NBA/atlanta-falcons.svg";
    tmnh = "ATL";
    tmch =
      "flex row bg-slate-200 border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-slate-200 border-t-slate-200 border-8";
  } else {
    tmh =
      "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NBA.png";
    tmnh = "NBA";
    tmch = "flex row bg-green-500";
  }
  let lgo = "ml-4 mr-2";
  let ti = "pt-4 mr-14";
  let sp = "flex row pt-4";
  let ca = "ml-2 mr-2";
</script>

<GameRow type={tmca}>
  <div class={lgo} slot="logo">
    <img src={tma} alt={tmna} width="60" height="60" />
  </div>
  <h1 class={ti} slot="title">{game.away}</h1>
  <h2 class={sp} slot="spread">
    <Checkbox bind:checked={game.valueAwaySpread} id={game.id}>
      {game.away_spread}
    </Checkbox>
    <h1 class={ca}>Over</h1>
    <Checkbox bind:checked={game.valueOver} id={game.id}>
      {game.over_under}
    </Checkbox>
    <h1 class={ca}>M/L</h1>
    <Checkbox bind:checked={game.valueAwayMoneyLine} id={game.id}>
      {game.away_money_line}
    </Checkbox>
  </h2>
</GameRow>

<GameRow type={tmch}>
  <div class={lgo} slot="logo">
    <img src={tmh} alt={tmnh} width="60" height="60" />
  </div>
  <h1 class={ti} slot="title">{game.home}</h1>
  <h2 class={sp} slot="spread">
    <Checkbox bind:checked={game.valueHomeSpread} id={game.id}>
      {game.home_spread}
    </Checkbox>
    <h1 class={ca}>Under</h1>
    <Checkbox bind:checked={game.valueUnder} id={game.id}>
      {game.over_under}
    </Checkbox>
    <h1 class={ca}>M/L</h1>
    <Checkbox bind:checked={game.valueHomeMoneyLine} id={game.id}>
      {game.home_money_line}
    </Checkbox>
  </h2>
</GameRow>

<div class="border-stone-900 border-b-8 border-double" />
<div class="border-stone-900 border-b-8 border-double" />
