<script>
	import MyAccountCard from '$lib/MyAccountCard.svelte';
	export let data;

	export let accountId = data.account_id;
</script>

<MyAccountCard {accountId} />
