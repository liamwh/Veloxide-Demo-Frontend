import type { BankAccountCommand } from 'src/bindings/BankAccountCommand';
import { PUBLIC_BANK_ACCOUNT_SERVICE_API_URL } from '$env/static/public';
import { toast } from '@zerodevx/svelte-toast';

export async function depositMoney(amount: number, accountId: string) {
  let command: BankAccountCommand = {
    DepositMoney: {
      amount: amount
    }
  };
  if (amount <= 0 || amount == null) {
    toast.push('Amount must be greater than 0');
    return;
  }
  try {
    const response = await fetch(
      `${PUBLIC_BANK_ACCOUNT_SERVICE_API_URL}/bank-accounts/${accountId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(command, null, 2)
      }
    );
    if (!response.ok) {
      switch (response.status) {
        case 404:
          toast.push('Account not found');
          return;
        default:
          if (response.body) {
            response.text().then((text) => {
              toast.push(text);
            });
            return;
          }
          toast.push('Error fetching account');
      }
    }
  } catch {
    toast.push('Error fetching account');
    return;
  }
}


export async function getBankAccount(accountId: string): Promise<BankAccountView | void> {
  try {
    const response = await fetch(
      `${PUBLIC_BANK_ACCOUNT_SERVICE_API_URL}/bank-accounts/${accountId}`
    );
    switch (response.status) {
      case 200:
        const bankAccount: BankAccountView = await response.json();
        return bankAccount;
      case 204:
        return;
      case 404:
        toast.push('Account not found');
        return;
      default:
        toast.push('Error fetching account');
        return;
    }
  } catch {
    toast.push('Error fetching account');
    return;
  }
}

export async function withdrawMoney(amount: number, atmId: string, accountId: string) {
  if (amount <= 0 || amount == null) {
    toast.push('Amount must be greater than 0');
    return;
  }
  if (atmId == null) {
    toast.push('ATM ID must be provided');
    return;
  }
  let command: BankAccountCommand = {
    WithdrawMoney: {
      atm_id: atmId,
      amount: amount
    }
  };
  try {
    const response = await fetch(
      `${PUBLIC_BANK_ACCOUNT_SERVICE_API_URL}/bank-accounts/${accountId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(command, null, 2)
      }
    );
    if (!response.ok) {
      switch (response.status) {
        case 404:
          toast.push('Account not found');
          return;
        default:
          if (response.body) {
            response.text().then((text) => {
              toast.push(text);
            });
            return;
          }
          toast.push('Error fetching account');
      }
    }
  } catch {
    toast.push('Error fetching account');
    return;
  }
}