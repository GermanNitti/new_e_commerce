// subirProductos.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer productos.json
const productos = JSON.parse(
  fs.readFileSync(path.join(__dirname, "src/data/products.json"), "utf8")
);

// Configuración de Firebase (pon acá tus datos)
const firebaseConfig = {

  apiKey: "AIzaSyCS6zpL6PF51vp20IboQjQ7GyNcYGPqv04",

  authDomain: "my-ecommerce-b315e.firebaseapp.com",

  projectId: "my-ecommerce-b315e",

  storageBucket: "my-ecommerce-b315e.firebasestorage.app",

  messagingSenderId: "269036085987",

  appId: "1:269036085987:web:31fc5a06589fde4d555bd6",

  measurementId: "G-7352B8NMPT"

};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function subirProductos() {
  const coleccion = collection(db, "productos");

  for (const producto of productos) {
    const docRef = doc(coleccion, producto.id.toString());
    await setDoc(docRef, producto);
    console.log(`✅ Producto ${producto.name} cargado`);
  }

  console.log("🎉 Todos los productos fueron cargados.");
}

subirProductos().catch(console.error);
