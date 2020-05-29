import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


 let firebaseConfig = {
    apiKey: "AIzaSyAHhT2jOnQo87LQxf755Zu21DmU4FawN3M",
    authDomain: "reactapp-6cda6.firebaseapp.com",
    databaseURL: "https://reactapp-6cda6.firebaseio.com",
    projectId: "reactapp-6cda6",
    storageBucket: "reactapp-6cda6.appspot.com",
    messagingSenderId: "219254258763",
    appId: "1:219254258763:web:688c9630cab08af49f61ce",
    measurementId: "G-NWY5ECSMDK"
  };
  // Initialize Firebase




class Firebase{
	constructor(){
		if(!app.apps.length){
      		app.initializeApp(firebaseConfig);
      		this.app = app.database();
    	}
	}

	login(email, password){
		return app.auth().signInEmailAndPassword(email, password);
	}

	async registro(nome, email, password){
		await app.auth().createUserWithEmailAndPassword(email, password);

		const uid = app.auth().currentUser.uid;

		return app.database().ref('usarios').child(uid).set({
			nome: nome
		})
	}

	isInitialized(){
		return new Promise(resolve => {
			app.auth().onAuthStateChanged(resolve);
		})
	}
}

export default new Firebase();