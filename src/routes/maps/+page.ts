<script lang="ts">
  let { data } = $props(); // Svelte 5 syntax
</script>

<h1>My Rocket Notes</h1>

<ul>
  {#each data.notes as note}
    <li>{note.content}</li>
  {:else}
    <p>No notes found. Try adding one in the Supabase dashboard!</p>
  {/each}
</ul>