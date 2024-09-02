import {
	collection,
	doc,
	getDoc,
	deleteDoc,
	updateDoc,
	addDoc,
} from "firebase/firestore"
import { db } from "~/firebase.config"

class UserDAO {
	constructor() {
		this.collectionRef = collection(db, "users")
	}

	async getUserById(id) {
		try {
			const userDoc = await getDoc(doc(this.collectionRef, id))

			if (userDoc.exists()) {
				return { success: true, data: userDoc.data() }
			} else {
				return { success: false, data: null }
			}
		} catch (error) {
			console.log("Error getting document: ", error)
		}
	}

	async createUser(userData) {
		try {
			const docRef = await addDoc(this.collectionRef, userData)
			console.log("Document written with ID: ", docRef.id)
		} catch (error) {
			console.log("Error adding document: ", error)
		}
	}

	async updateUser(id, userData) {
		const userRef = doc(this.collectionRef, id)
		try {
			await updateDoc(userRef, userData)
			console.log("Document successfully updated!")
		} catch (error) {
			console.log("Error updating document: ", error)
		}
	}

	async deleteUser(id) {
		try {
			await deleteDoc(doc(this.collectionRef, id))
			console.log("Document successfully deleted!")
		} catch (error) {
			console.log("Error removing document: ", error)
		}
	}
}

export default new UserDAO()
