// import { useEffect, useState } from "react";

// import {
//   collection,
//   getDocs,
//   getFirestore,
//   query,
//   where,
// } from "firebase/firestore";

// export default function useProductsByCategory(categoria) {
//   const [productos, setProducto] = useState(null);
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     const bd = getFirestore();

//     const q = query(
//       collection(bd, "productos"),
//       where("categoria", "===", categoria)
//     );

//     getDocs(q)
//       .then((snapshot) => {
//         setProducto(
//           snapshot.docs.map((doc) => ({
//             categoria: doc.categoria,
//             ...doc.data(),
//           }))
//         );
//       })
//       .finally(() => {
//         setCargando(false);
//       });
//   }, [categoria]);

//   return {
//     productos,
//     cargando,
//   };
// }
