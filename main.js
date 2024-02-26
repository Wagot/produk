import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyATgcvem8XVd_Au44mcR2FKjKctx1MmZsQ",
    authDomain: "produl.firebaseapp.com",
    projectId: "produl",
    storageBucket: "produl.appspot.com",
    messagingSenderId: "77023582951",
    appId: "1:77023582951:web:5fd60105e5b08cda366042",
    measurementId: "G-G6X2VN52QK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export async function ambilDaftarProduk(){
    const refDokumen = collection(db,"produk");
    const query = query(refDokumen,ordery("nama"));
    const cuplikanquery = await getDocs(query);
    
    let hasil = [];
    cuplikanquery.forEach((dok) => {
    hasil.push({
      id: dok,id,
      nama: dok.data().nama,
      harga: dok.data().harga,
      stok: dok.data().stok,
    });
    });
  
  return hasil;
  }