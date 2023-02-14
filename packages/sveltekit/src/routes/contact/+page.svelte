<script lang="ts">
	import { goto } from '$app/navigation';
	import { contact } from '../../store/contact/Contact';
	import {
		useForm,
		Hint,
		validators,
		required,
		maxLength,
		HintGroup,
		email
	} from 'svelte-use-form';

	const form = useForm();

	const onSubmit = () => {
		goto('/confirm');
	};
</script>

<svelte:head>
	<title>お問い合わせフォーム</title>
</svelte:head>
<div class="z-10 mx-auto text-center lg:w-5/6 ">
	<div class="">
		<h1 class="text-2xl font-bold underline">Welcome to SvelteKit</h1>

		<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

		<h2 class="mt-6 mb-12 text-xl">Contact us</h2>
		<div class="card  mx-auto  mb-32 w-4/5 bg-base-300 text-center shadow-xl lg:w-2/5 ">
			<form use:form>
				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="name">お名前</label>
					<div class="mb-2 flex justify-center">
						<input
							type="text"
							class="m-0focus:text-gray-700 form-control block
                            rounded
                            border
                            border-solid
                            border-gray-300
                            bg-white bg-clip-padding
                            px-3 py-1.5 text-base
                            font-normal
                            text-gray-700
                            transition
                            ease-in-out focus:border-blue-600
						    focus:bg-white focus:outline-none"
							bind:value={$contact.name}
							id="name"
							name="name"
							use:validators={[required, maxLength(255)]}
						/>
					</div>
					<div>
						<HintGroup for="name">
							<Hint on="required" class="text-sm text-red-600">お名前は必須です。</Hint>
							<Hint on="maxLength" class="text-sm text-red-600" hideWhenRequired
								>お名前は255文字以内で入力してください。</Hint
							>
						</HintGroup>
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="nameKana">お名前(カナ)</label>
					<div class="mb-2 flex justify-center">
						<input
							class="m-0focus:text-gray-700 form-control block
                            rounded
                            border
                            border-solid
                            border-gray-300
                            bg-white bg-clip-padding
                            px-3 py-1.5 text-base
                            font-normal
                            text-gray-700
                            transition
                            ease-in-out focus:border-blue-600
						    focus:bg-white focus:outline-none"
							bind:value={$contact.nameKana}
							id="nameKana"
							name="nameKana"
							use:validators={[maxLength(255)]}
						/>
					</div>
					<div>
						<Hint for="nameKana" class="text-sm text-red-600" on="maxLength"
							>お名前(カナ)は255文字以内で入力してください。</Hint
						>
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="email">メールアドレス</label>
					<div class="mb-2 flex justify-center">
						<input
							class="m-0focus:text-gray-700 form-control block
                            rounded
                            border
                            border-solid
                            border-gray-300
                            bg-white bg-clip-padding
                            px-3 py-1.5 text-base
                            font-normal
                            text-gray-700
                            transition
                            ease-in-out focus:border-blue-600
						    focus:bg-white focus:outline-none"
							bind:value={$contact.email}
							id="email"
							type="email"
							name="email"
							use:validators={[required, email]}
						/>
					</div>
					<div>
						<HintGroup for="email">
							<Hint on="required" class="text-sm text-red-600">メールアドレスは必須です。</Hint>
							<Hint on="email" class="text-sm text-red-600" hideWhenRequired
								>メールアドレスの形式で入力してください。</Hint
							>
						</HintGroup>
					</div>
				</div>

				<div class="mb-6 mt-4">
					<label class="mb-4 flex justify-center" for="inquiry">お問い合わせ内容</label>
					<div class="mb-6 flex justify-center">
						<textarea
							class="
							m-0focus:text-gray-700
							form-control block h-40
                            justify-center
                            rounded
                            border
                            border-solid
                            border-gray-300 bg-white
                            bg-clip-padding px-3 py-1.5
                            text-base
							font-normal
                            text-gray-700
                            transition
                            ease-in-out focus:border-blue-600
						    focus:bg-white focus:outline-none"
							bind:value={$contact.inquiry}
							id="inquiry"
							name="inquiry"
							use:validators={[required, maxLength(10000)]}
						/>
					</div>
					<div>
						<HintGroup for="inquiry">
							<Hint on="required" class="help is-danger text-sm text-red-600"
								>お問い合わせ内容は必須です。</Hint
							>
							<Hint on="maxLength" class="help is-danger text-sm text-red-600" hideWhenRequired
								>お問い合わせ内容は1万文字以内で入力してください。</Hint
							>
						</HintGroup>
					</div>
				</div>

				<div class="mb-8 flex justify-center">
					<button class="btn" disabled={!$form.valid} on:click|preventDefault={onSubmit}
						>確認</button
					>
				</div>
			</form>
		</div>
	</div>
</div>
