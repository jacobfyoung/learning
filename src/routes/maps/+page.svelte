<script lang="ts">
  let { data } = $props();
</script>

<h1>My Maps</h1>

<ul>
  {#each data.maps as map}
    <li>{map.name}</li>
  {:else}
    <p>No maps found. Try adding one in the Supabase dashboard!</p>
  {/each}
</ul>


