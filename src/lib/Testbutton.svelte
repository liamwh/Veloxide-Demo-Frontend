<script lang="ts">
	import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
	import { GreeterClient } from '$lib/protos/helloworld.client';

	const baseUrl: string = 'http://localhost:8080';

	function createClient(): GreeterClient {
		const transport = new GrpcWebFetchTransport({ baseUrl });
		return new GreeterClient(transport);
	}

	const client = createClient();
	let name: string = 'World';

	async function sayHello(): Promise<void> {
		const request = { name };
		const response = await client.sayHello(request);
		console.log(response.response);
	}
</script>

<label for="name" class="block text-sm font-medium text-gray-700">Enter your name</label>
<input
	type="text"
	id="name"
	name="name"
	class="mt-1 p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
	bind:value={name}
/>
<button
	on:click={sayHello}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
	Say Hello
</button>

