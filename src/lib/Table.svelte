<script>
  export let tableData = [
    {
      vitae: "dolorem",
      lectus: "ipsum",
      quisquam: "quia",
    },
    {
      vitae: "amet",
      lectus: "consectetur",
      quisquam: "adipisci",
    },
  ];

  let stylehead = "table w-full";
  let stylerow = "bg-green-300";

  if (Object.keys(tableData[0]) == "AMERICAN FOOTBALL") {
    stylehead = "table w-full bg-red-400";
    stylerow = "pl-6 bg-red-300";
  } else if (Object.keys(tableData[0]) == "AMERICAN HOOPS") {
    stylehead = "table w-full bg-blue-400";
    stylerow = "pl-6 bg-blue-300";
  } else {
    stylerow = "bg-green-300";
  }

  export let coverage = [];
</script>

<table class={stylehead}>
  <thead>
    <tr>
      {#each Object.keys(tableData[0]) as columnHeading}
        <th>{columnHeading}</th>
      {/each}
    </tr><tr />
  </thead>
  <tbody>
    {#each Object.values(tableData) as row}
      <tr>
        {#each Object.values(row) as cell}
          <td class={stylerow}
            ><input type="checkbox" bind:group={coverage} value={cell} />
            {cell}</td
          >
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
