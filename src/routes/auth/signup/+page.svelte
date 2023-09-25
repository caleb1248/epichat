<script lang="ts">
	import { goto } from '$app/navigation';
	import { signInWithGoogle } from '$lib/auth';
	import { auth } from '$lib/firebase';
	import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
	onAuthStateChanged(auth, (user) => {
		if (user) goto('/app');
	});

	let email: string;
	let password: string;
	let passwordConfirm: string;
	let error: string = '<br>';

	async function signUp() {
		if (!email) {
			error = 'Provide an email';
			return;
		} else if (!password) {
			error = 'Provide a password';
			return;
		} else if (password != passwordConfirm) {
			error = 'Passwords do not match';
			return;
		}
		createUserWithEmailAndPassword(auth, email, password).catch((err) => {
			let error = err.message.replace('Firebase: ', '');
		});
	}
</script>

<main>
	<div class="signup-container">
		<p class="error">{@html error}</p>
		<input type="text" placeholder="Email" bind:value={email} />
		<input type="password" placeholder="Password" bind:value={password} />
		<input type="password" placeholder="Confirm password" bind:value={passwordConfirm} />
		<button
			on:click={() => signUp()}
			class:disabled={!email || !password || password != passwordConfirm}>Sign Up</button
		>
		<button on:click={() => signInWithGoogle(auth)}> Sign up with google</button>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		align-items: center;

		> div.signup-container {
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 30vw;
			gap: 10px;
			min-width: 300px;
			height: 30vmin;
			> p.error {
				color: red;
			}
			> input {
				font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
					sans-serif;
				width: 100%;
				padding: 1rem;
				background-color: #555;
				color: white;
				border: 2px solid white;
				border-radius: 2px;
				&::placeholder {
					color: white;
				}
			}
			> button {
				align-items: center;
				background-clip: padding-box;
				background-color: #555;
				border: 1px solid transparent;
				border-radius: 0.25rem;
				box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
				box-sizing: border-box;
				color: #fff;
				cursor: pointer;
				display: inline-flex;
				font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica, Arial,
					sans-serif;
				font-size: 16px;
				font-weight: 600;
				justify-content: center;
				line-height: 1.25;
				margin: 0;
				min-height: 3rem;
				padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
				position: relative;
				text-decoration: none;
				transition: all 250ms;
				user-select: none;
				-webkit-user-select: none;
				touch-action: manipulation;
				vertical-align: baseline;
				width: auto;

				&:not(.disabled) {
					&:hover,
					&:focus {
						background-color: #fb8332;
						box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
					}

					&:hover {
						transform: translateY(-1px);
					}

					&:active {
						background-color: #fd6805;
						box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
						transform: translateY(0);
					}
				}
				&.disabled {
					background-color: #333;
					color: #444;
					cursor: default;
				}
			}
		}
	}
</style>
