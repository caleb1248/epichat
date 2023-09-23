import { onAuthStateChanged, type Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { readable } from 'svelte/store';

const provider = new GoogleAuthProvider();

export function authStore(auth: Auth) {
	return readable(auth.currentUser, (set) => {
		const unsubscribe = onAuthStateChanged(auth, (user) => set(user));
		return () => unsubscribe();
	});
}

export async function signInWithGoogle(auth: Auth) {
	return await signInWithPopup(auth, provider);
}
