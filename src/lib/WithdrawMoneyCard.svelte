<script lang="ts">
	import type { BankAccountView } from '../bindings/BankAccountView';
	import { withdrawMoney, getBankAccount } from './bankService';
	import { bankAccountStore } from '$lib/bankAccountStore';

	export let bankAccount: BankAccountView;

	let amount: number;
	let atmId: string;

	async function withdraw() {
		await withdrawMoney(amount, atmId, bankAccount.account_id);
		const updatedBankAccount = await getBankAccount(bankAccount.account_id);
		bankAccountStore.set(updatedBankAccount);
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<div class="form-control">
			<h2 class="card-title">Withdraw Money</h2>
			<div class="grid grid-flow-row auto-rows-max space-y-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Enter amount to withdraw</span>
				</label>
				<label class="input-group w-full">
					<span>ATM ID</span>
					<input
						type="text"
						placeholder="atm-1"
						class="input input-bordered w-full"
						bind:value={atmId}
					/>
				</label>
				<label class="input-group w-full">
					<input
						type="number"
						placeholder="0.01"
						class="input input-bordered w-full"
						bind:value={amount}
					/>
					<span>EUR</span>
				</label>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="btn btn-primary" on:click={withdraw}>Withdraw Money</div>
			</div>
		</div>
	</div>
</div>
