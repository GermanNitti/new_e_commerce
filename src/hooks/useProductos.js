import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig"; // Asegúrate de que la ruta sea correcta

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductos() {
      try {
        const productosCol = collection(db, "productos");
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosList);
      } catch (error) {
        console.error("Error trayendo productos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProductos();
  }, []);

  return { productos, loading };
}
