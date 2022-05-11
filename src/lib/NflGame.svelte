<script>
  import GameRow from "./GameRow.svelte";
  import Checkbox from "./Checkbox.svelte";
  export let game;

  let tm =
    "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
  let tmn = "NFL";

  if (game.away === "BAL") {
    tm = "https://cdn.usteamcolors.com/images/nfl/baltimore-ravens.svg";
    tmn = "BAL";
  } else if (game.away === "ARI") {
    tm = "https://cdn.usteamcolors.com/images/nfl/arizona-cardinals.svg";
    tmn = "ARI";
  } else if (game.away === "CIN") {
    tm = "https://cdn.usteamcolors.com/images/nfl/cincinnati-bengals.svg";
    tmn = "CIN";
  } else if (game.away === "JAX") {
    tm = "https://cdn.usteamcolors.com/images/nfl/jacksonville-jaguars.svg";
    tmn = "JAX";
  } else {
    tm =
      "https://d2p3bygnnzw9w3.cloudfront.net/req/202204281/tlogo/pfr/NFL.png";
    tmn = "NFL";
  }

  let src = tm;
  let logo = tmn;

  let lgo = "flex row mr-2 justify-start";
  let ti = "flex row pt-4 mr-14";
  let sp = "flex row pt-4justify-end";
  let ca = "flex row ml-2 mr-2";
</script>

<GameRow>
  <div class={lgo} slot="logo">
    <img class="w-14 h-14" {src} alt={logo} />
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
  </h2></GameRow
>

<GameRow>
  <div class={lgo} slot="logo">
    <img class="w-14 h-14" {src} alt={logo} />
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
  </h2></GameRow
>

<div class="border-b-4" />
