<script lang="ts">
	import { onMount } from 'svelte';
	import { contact } from '../../store/contact/Contact';
	import { goto } from '$app/navigation';
	import { navigate } from 'svelte-routing';
	onMount(async () => {
		if (!$contact.name || !$contact.email || !$contact.inquiry) {
			goto('/contact');
		}
	});

	function handleNavigation() {
		navigate('/', { replace: true });
		goto('/');
	}
	const onCancel = () => {
		goto('/contact');
	};
</script>

<svelte:head>
	<title>確認ページ</title>
</svelte:head>
<div class="mx-auto text-center lg:w-5/6 ">
	<div class="">
		<h1 class="text-2xl font-bold underline">Welcome to SvelteKit</h1>

		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

		<h2 class="mt-6 mb-12 text-xl">confirm</h2>
		<div class="card mx-auto mb-32 w-4/5 bg-base-300 text-center shadow-xl lg:w-2/5 ">
			<form>
				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="name">お名前</label>
					<div class="control">
						<input disabled class="input" bind:value={$contact.name} id="name" name="name" />
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="nameKana">お名前(カナ)</label>
					<div class="control">
						<input
							disabled
							class="input"
							bind:value={$contact.nameKana}
							id="nameKana"
							name="nameKana"
						/>
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="email">メールアドレス</label>
					<div class="control">
						<input
							disabled
							class="input"
							bind:value={$contact.email}
							id="email"
							type="email"
							name="email"
						/>
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="inquiry">お問い合わせ内容</label>
					<div class="mb-12 flex justify-center">
						<textarea
							disabled
							class="form-control m-0
							block h-40 justify-center
                            rounded
                            border
                            border-solid
                            border-gray-300
                            bg-white bg-clip-padding
                            px-3 py-1.5 text-base
                            font-normal
							text-gray-700
                            transition
                            ease-in-out
                            focus:border-blue-600 focus:bg-white
						    focus:text-gray-700 focus:outline-none"
							bind:value={$contact.inquiry}
							id="inquiry"
							name="inquiry"
						/>
					</div>
				</div>

				<div class="mb-8 flex justify-center">
					<label for="send-modal" class="btn mx-2">送信</label>

					<input type="checkbox" id="send-modal" class="modal-toggle" />
					<div class="modal">
						<div class="modal-box">
							<h3 class="text-lg font-bold">送信完了</h3>
							<p class="py-4">お問い合わせありがとうございました。返信までしばらくお待ちください</p>
							<div class="modal-action">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<label for="my-modal" class="btn" on:click={handleNavigation}>ホームに戻る</label>
							</div>
						</div>
					</div>
					<button class="btn mx-2" on:click|preventDefault={onCancel}>戻る</button>
				</div>
			</form>
		</div>
	</div>
</div>
