<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class=" lg:flex lg:justify-center">
	<div class="flex justify-center lg:w-5/6">
		<nav class="container relative mx-auto px-6 py-8 md:flex md:items-end md:justify-between ">
			<div class="z-50 flex items-center justify-between ">
				<a class="text-xl font-bold text-gray-800 hover:text-blue-400 md:text-2xl" href="/home"
					>Logo
				</a>
				<!-- Mobile menu button -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={toggleNavbar}
					class="flex  md:hidden {showMenu
						? 'fixed top-0 right-0 z-10 flex h-screen w-40 flex-col  bg-slate-200 pr-3 pt-8 opacity-70   duration-200 ease-linear'
						: 'fixed right-5  duration-200 ease-linear'}"
				>
					<button
						type="button"
						class="text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none
                            {showMenu ? 'mr-2 flex justify-end' : ''}"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>

					<div
						class="  flex-col  justify-center mt-10 ml-10  space-y-4  flex   md:space-x-10
                        {showMenu ? 'flex' : 'hidden'}"
					>
						<a class="z-20  text-gray-800 hover:text-blue-400" href="/">Home</a>
						<a class="z-20 text-gray-800 hover:text-blue-400" href="/blog">Blog</a>
						<a class="z-20 text-gray-800 hover:text-blue-400" href="/contact">Contact US</a>
						<a class="z-20 text-gray-800 hover:text-blue-400" href="/about">About Us</a>
					</div>
				</div>
			</div>
       <div
						class="invisible md:visible"
					>
						<a class="mx-4  text-gray-800 hover:text-blue-400" href="/">Home</a>
						<a class="mx-4 text-gray-800 hover:text-blue-400" href="/blog">Blog</a>
						<a class="mx-4 text-gray-800 hover:text-blue-400" href="/contact">Contact US</a>
						<a class="mx-4 text-gray-800 hover:text-blue-400" href="/about">About Us</a>
					</div>
			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		</nav>
	</div>
</div>
