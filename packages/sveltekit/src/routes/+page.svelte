<script lang="ts">
	import { connected, signer, signerAddress, defaultEvmStores } from 'svelte-ethers-store';

	const connect = async () => {
		// ここでメタマスクと繋がる
		await defaultEvmStores.setProvider();

		// レンダリングの部分じゃなくても `$` シンタックスを使って、subscribeを省略可能
		const b = await $signer.getBalance();
		console.log(b);
	};
</script>

<svelte:head>
	<title>foundry sveltekit template</title>
</svelte:head>
<div class="mx-auto text-center lg:w-5/6 ">
	<div class="ml-6 mb-8">
		<h1 class="text-2xl font-bold underline">Welcome to SvelteKit</h1>

		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	</div>
	<div>
		<ul class="mb-4">
			<li>connected?: {$connected}</li>
			<li>signerAddress: {$signerAddress}</li>
		</ul>

		<button class="btn" on:click={connect}>connect</button>
	</div>
</div>