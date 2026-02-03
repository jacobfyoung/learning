<script lang="ts">
	import { onMount } from 'svelte';
	
	onMount(() => {
		window.location.href = '/maps';
	});
</script>

<svelte:head>
	<title>Redirecting to Maps...</title>
</svelte:head>

<div style="text-align: center; margin-top: 50px;">
	<p>Redirecting to Maps...</p>
	<p>If you are not redirected, <a href="/maps">click here</a>.</p>
</div>
