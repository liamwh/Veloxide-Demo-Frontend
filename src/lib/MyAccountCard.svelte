<script lang="ts">
	import DepositMoneyCard from './DepositMoneyCard.svelte';
	import AccountTransactionsCard from './AccountTransactionsCard.svelte';
	import WithdrawMoneyCard from './WithdrawMoneyCard.svelte';
	import type { BankAccountView } from '../bindings/BankAccountView';
	import { onMount } from 'svelte';
	import { getBankAccount } from '$lib/getBankAccount';
	import { bankAccountStore } from '$lib/bankAccountStore';

	export let accountId: string;

	let bankAccount: BankAccountView;

	onMount(async () => {
		const accountData = await getBankAccount(accountId);
		bankAccountStore.set(accountData); // Update the store
	});

	// Subscribe to store changes
	bankAccountStore.subscribe((value) => {
		bankAccount = value;
	});
</script>

<div class="flex justify-center items-center w-screen">
	<article class="prose lg:prose">
		<h2>Account ID: {accountId}</h2>
	</article>
</div>

<div class="flex flex-wrap justify-center items-center w-screen">
	<div class="flex flex-wrap space-x-2 space-y-2 items-center justify-center">
		<DepositMoneyCard {bankAccount} />
		<WithdrawMoneyCard {bankAccount} />
	</div>
	<div class="flex flex-wrap w-screen justify-center p-2 items-center">
		<AccountTransactionsCard {bankAccount} />
	</div>
</div>
