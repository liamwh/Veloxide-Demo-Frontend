<script>
	import '../app.scss';
	import Navbar from '$lib/Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<main class="container">
	<SvelteToast />
	<Navbar />
	<slot />
</main>
