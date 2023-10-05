import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../Redux/Features/reviewSlice"; 

function Review({ userId, ProductId, onSave }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   rating: "",
  //   comment: "",
  // });

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user); 
  // const purchases = useSelector((state) => state.purchases.purchases); 

  // useEffect(() => {
  //   if (user) {
  //     const hasPurchasedProduct = purchases.some(
  //       (purchase) => purchase.ProductId === ProductId && purchase.UserId === userId
  //     );
      
  //     if (hasPurchasedProduct) {
  //       setIsOpen(true);
  //     }
  //   }
  // }, [user, userId, ProductId, purchases]);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await dispatch(
  //       createReview({
  //         rating: formData.rating,
  //         comment: formData.comment,
  //         ProductId,
  //         userId,
  //       })
  //     );

  //     onSave(formData);

  //     closeModal();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // return (
  //   <div>
  //     {isOpen && (
  //       <div>
  //         <div>
  //           <h3>Opinión</h3>
  //           <form onSubmit={handleSubmit}>
  //             {/* Renderiza el formulario de revisión */}
  //             <div className="mb-4">
  //               <select
  //                 name="rating"
  //                 id="rating"
  //                 value={formData.rating}
  //                 onChange={handleInputChange}
  //               >
  //                 <option value="">-- Calificación --</option>
  //                 <option value="1">⭐ ☆ ☆ ☆ ☆</option>
  //                 <option value="2">⭐⭐ ☆ ☆ ☆</option>
  //                 <option value="3">⭐⭐⭐ ☆ ☆</option>
  //                 <option value="4">⭐⭐⭐⭐ ☆</option>
  //                 <option value="5">⭐⭐⭐⭐⭐</option>
  //               </select>
  //             </div>
  //             <div className="mb-4">
  //               <label htmlFor="comment">Comentario:</label>
  //               <textarea
  //                 name="comment"
  //                 value={formData.comment}
  //                 maxLength={255}
  //                 placeholder="Este producto me cambió la vida!"
  //                 onChange={handleInputChange}
  //                 className="textarea"
  //               ></textarea>
  //             </div>
  //             <div>
  //               <button type="submit">Guardar</button>
  //               <button onClick={closeModal}>Cerrar</button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Review;
