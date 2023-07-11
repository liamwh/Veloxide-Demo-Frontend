<script lang="ts">
	import type { BankAccountView } from '../bindings/BankAccountView';
	import { depositMoney, getBankAccount } from './bankService';
	import { bankAccountStore } from '$lib/bankAccountStore';

	export let bankAccount: BankAccountView;
	let amount: number;

	async function deposit() {
		await depositMoney(amount, bankAccount.account_id);

		// After deposit, update the bank account
		const updatedBankAccount = await getBankAccount(bankAccount.account_id);
		bankAccountStore.set(updatedBankAccount); // Update the store
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">Deposit</h2>
		<div class="form-control">
			<div class="grid grid-flow-row auto-rows-max space-y-1">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Enter amount to deposit</span>
				</label>
				<label class="input-group">
					<input
						type="number"
						placeholder="0.01"
						class="input input-bordered w-full"
						bind:value={amount}
					/>
					<span>EUR</span>
				</label>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="btn btn-primary" on:click={deposit}>Deposit</div>
			</div>
		</div>
	</div>
</div>
