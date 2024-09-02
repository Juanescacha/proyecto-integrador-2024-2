import { create } from "zustand"
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth"
import { auth } from "~/firebase.config"

const provider = new GoogleAuthProvider()

const useAuthStore = create((set) => ({
	user: null,
	loading: true,

	loginGoogleWithPopup: async () => {
		try {
			await signInWithPopup(auth, provider)
		} catch (error) {
			console.log(error)
		}
	},
	logout: async () => {
		try {
			await signOut(auth)
			set({ user: null })
		} catch (error) {
			console.log(error)
		}
	},
	observeAuthState: () => {
		set({ loading: true })
		onAuthStateChanged(auth, (user) => {
			if (user) {
				set({ user, loading: false })
			} else {
				set({ user: null, loading: false })
			}
		})
	},
}))

export default useAuthStore
