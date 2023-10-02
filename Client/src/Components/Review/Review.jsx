import { useEffect, useState } from "react";
import axios from "axios";

function Review({ UserId, ProductId, onSave }) {
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
          `https://glamifystore.vercel.app/user/${UserId}/purchase`
        );
        const purchases = response.data;
        const hasPurchasedProduct = purchases.some(
          (purchase) => purchase.productId === ProductId
        );
        setHasPurchased(hasPurchasedProduct);
      } catch (error) {
        console.error(error);
      }
    }

    checkIfPurchased();
  }, [UserId, ProductId]);

  // Agregamos una nueva función para obtener las revisiones del usuario
  async function fetchUserReviews(userId) {
    try {
      const response = await axios.get(
        `https://glamifystore.vercel.app/user/${UserId}/reviews`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

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
        ProductId,
        UserId
      );

      if (hasPurchased) {
        onSave(response);
      }

      closeModal();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateUserPasswordHandler(rating, comment, ProductId, UserId) {
    try {
      const response = await axios.post(
        `https://glamifystore.vercel.app/reviews`,
        {
          rating,
          comment,
          ProductId,
          UserId,
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
        <div>
          <button onClick={openModal}>Agregar opinión</button>
        </div>
      )}

      {isOpen && hasPurchased && (
        <div>
          <div>
            <h3>Opinión</h3>
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
                <label htmlFor="comment">
                  Comentario:
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  maxLength={255}
                  placeholder="Este producto me cambió la vida!"
                  onChange={handleInputChange}
                  className="textarea"
                ></textarea>
              </div>

              <div>
                <button type="submit">Guardar</button>
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
