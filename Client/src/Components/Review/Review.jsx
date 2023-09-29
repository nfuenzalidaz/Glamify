// import { useEffect, useState } from "react";
// import axios from "axios";
// // import Style from "./Review.module.css";
// import "./Review.module.css";

// function Review({ userId, productId }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     rating: "",
//     comment: "",
//   });

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await updateUserPasswordHandler(
//         formData.rating,
//         formData.comment,
//         productId,
//         userId
//       );
// ////////////////////////////
//       onSave(response);
// //////////////////
//       closeModal();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   async function updateUserPasswordHandler(rating, comment, productId, userId) {
//     try {
//       const response = await axios.post(
//         `https://glamifystore.vercel.app/reviews`,
//         {
//           rating,
//           comment,
//           productId,
//           userId,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <div className="text-center">
//         <button onClick={openModal} className="text-indigo-600 hover:underline">
//           Agregar opinión
//         </button>
//       </div>

//       {isOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3 className="modal-title">Opinión</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <select
//                   name="rating"
//                   id="rating"
//                   value={formData.rating}
//                   onChange={handleInputChange}
//                   className="select-box"
//                 >
//                   <option value="">-- Calificación --</option>
//                   <option value="1">⭐ ☆ ☆ ☆ ☆</option>
//                   <option value="2">⭐⭐ ☆ ☆ ☆</option>
//                   <option value="3">⭐⭐⭐ ☆ ☆</option>
//                   <option value="4">⭐⭐⭐⭐ ☆</option>
//                   <option value="5">⭐⭐⭐⭐⭐</option>
//                 </select>
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="comment" className="comment-label">
//                   Comentario:
//                 </label>
//                 <textarea
//                   name="comment"
//                   value={formData.comment}
//                   maxLength={255}
//                   placeholder="Este producto me cambio la vida!"
//                   onChange={handleInputChange}
//                   className="textarea"
//                 ></textarea>
//               </div>

//               <div className="flex justify-end">
//                 <button className="save-button" type="submit">
//                   Guardar
//                 </button>
//                 <button className="close-button" onClick={closeModal}>
//                   Cerrar
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Review;
//////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import axios from "axios";

// function Review({ userId, productId, onSave }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     rating: "",
//     comment: "",
//   });

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await updateUserPasswordHandler(
//         formData.rating,
//         formData.comment,
//         productId,
//         userId
//       );

//       onSave(response); // Llama a la función onSave con la nueva revisión
//       closeModal();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   async function updateUserPasswordHandler(rating, comment, productId, userId) {
//     try {
//       const response = await axios.post(
//         `https://glamifystore.vercel.app/reviews`,
//         {
//           rating,
//           comment,
//           productId,
//           userId,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <div className="text-center">
//         <button onClick={openModal} className="text-indigo-600 hover:underline">
//           Add review
//         </button>
//       </div>

//       {isOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h3 className="modal-title">Review</h3>
//             <form onSubmit={handleSubmit}>
//               {/* ... rest of the form ... */}
//               <div className="flex justify-end">
//                 <button className="save-button" type="submit">
//                   Save
//                 </button>
//                 <button className="close-button" onClick={closeModal}>
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Review;

//////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import axios from "axios";

function Review({ userId, productId, onSave }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    async function checkIfPurchased() {
      try {
        const response = await axios.get(
          `https://glamifystore.vercel.app/user/${userId}/purchase`
        );
        const purchases = response.data;
        const hasPurchasedProduct = purchases.some(
          (purchase) => purchase.productId === productId
        );
        setHasPurchased(hasPurchasedProduct);
      } catch (error) {
        console.error(error);
      }
    }

    checkIfPurchased();
  }, [userId, productId]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUserPasswordHandler(
        formData.rating,
        formData.comment,
        productId,
        userId
      );

      if (hasPurchased) {
        onSave(response);
      }

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  async function updateUserPasswordHandler(rating, comment, productId, userId) {
    try {
      const response = await axios.post(
        `https://glamifystore.vercel.app/reviews`,
        {
          rating,
          comment,
          productId,
          userId,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {hasPurchased && (
        <div >
          <button
            onClick={openModal}
          >
            Agregar opinión
          </button>
        </div>
      )}

      {isOpen && hasPurchased && (
        <div >
          <div >
            <h3 >Opinión</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <select
                  name="rating"
                  id="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                >
                  <option value="">-- Calificación --</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="comment" >
                  Comentario:
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  maxLength={255}
                  placeholder="Este producto me cambio la vida!"
                  onChange={handleInputChange}
                  className="textarea"
                ></textarea>
              </div>

              <div >
                <button  type="submit">
                  Guardar
                </button>
                <button  onClick={closeModal}>
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
