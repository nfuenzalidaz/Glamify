import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Features/productSlice";
import styles from "./CreateProducts.module.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const InitialCreate = {
  name: "",
  description: "",
  image: "",
  price: "",
  category: "",
  gender: "",
  stock: "",
};

const CreateProduct = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [input, setInput] = useState(InitialCreate);
  const [stock, setStock] = useState(0);
  const [stockDisponible, setStockDisponible] = useState("");
  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Producto creado con éxito", {
      position: "bottom-center",
    });

  const notifyErrorCat = () =>
    toast.error("Seleccione una categoría", {
      position: "bottom-center",
    });

  const notifyErrorGen = () =>
    toast.error("Seleccione un género", {
      position: "bottom-center",
    });

  const handleStockChange = (event) => {
    const nuevaStock = parseInt(event.target.value);
    setStockDisponible(nuevaStock);
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    // if (event.target.name === "image") {
      setInput({ ...input, [event.target.name]: event.target.files[0] });

      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    // }
  };

  const handleRemoveImage = () => {
    const fileInput = document.getElementById("image");
    fileInput.value = "";
    setPreviewImage("");
    setInput({ ...input, image: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (input.category === "") {
      notifyErrorCat();
      return;
    }
    if (input.gender === "") {
      notifyErrorGen();
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("price", input.price);
      formData.append("gender", input.gender);
      formData.append("description", input.description);
      formData.append("stock", stockDisponible);
      formData.append("category", input.category);
      formData.append("image", input.image);
   
      const formDataObject = Object.fromEntries(formData);

      const response = await axios.post(
        `http://localhost:3001/product`, formData
      );

      dispatch(fetchProducts());
      setStockDisponible(stock);
      notify();

      setTimeout(() => {
        setInput({
          ...input,
          name: "",
          price: "",
          gender: "",
          description: "",
          stock: "",
          category: "",
          image: "",
        }); // Restablecer los valores iniciales
        setPreviewImage("");
        setStock(1); // Restablecer la stock a 1 después de la creación
        setStockDisponible(1);
      }, 1000);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className={styles.FormContainer}>
      <h1 className={styles.titituloForm}>CREAR PRODUCTO</h1>
      <div className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.leftDiv}>
          <div className={styles.InputContainer}>
            <label className={styles.inputGropLabel} htmlFor="name">
              NOMBRE :
            </label>
            <input
              className={styles.inputGroup}
              type="text"
              id="name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />

            <label className={styles.inputGropLabel} htmlFor="description">
              DESCRIPCION :
            </label>
            <input
              className={styles.inputGroup}
              type="text"
              id="description"
              name="description"
              value={input.description}
              onChange={handleChange}
            />

            <label className={styles.inputGropLabel} htmlFor="price">
              PRECIO :
            </label>
            <input
              className={styles.inputGroup}
              type="text"
              id="price"
              name="price"
              value={input.price}
              onChange={handleChange}
            />

            <label className={styles.inputGropLabel} htmlFor="stock">
              STOCK :
            </label>
            <input
              className={styles.inputGroup}
              type="number"
              id="stock"
              name="stock"
              value={stockDisponible}
              onChange={handleStockChange}
            />

            <label className={styles.inputGropLabel} htmlFor="category">
              CATEGORIA :
            </label>
            <select
              className={styles.inputGroup}
              id="category"
              name="category"
              value={input.category}
              onChange={handleChange}
            >
              <option value="">ESCOGE UNA OPCION</option>
              <option value="camisa">CAMISAS</option>
              <option value="abrigo">ABRIGOS</option>
              <option value="jeans">JEANS</option>
              <option value="sudadera">SUDADERAS</option>
              <option value="calzado">CALZADO</option>
            </select>
            <label className={styles.inputGropLabel} htmlFor="gender">
              GENERO :
            </label>
            <select
              className={styles.inputGroup}
              id="gender"
              name="gender"
              value={input.gender}
              onChange={handleChange}
            >
              <option value="">ESCOGE UNA OPCION</option>
              <option value="man">HOMBRE</option>
              <option value="woman">MUJER</option>
              <option value="unisex">UNISEX</option>
              <option value="accesory">ACCESORIOS</option>
            </select>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.divImage}>
            {previewImage && (
              <img
                className={styles.image}
                id="preview"
                src={previewImage}
                alt="preview"
              />
            )}
          </div>
          <div className={styles.ButtonsContainer}>
            <span className={styles.inputGropLabel}>IMAGEN</span>
            <label className={styles.inputGropLabel} htmlFor="image">
              <span className={styles.uploadButton}>
                <AddToPhotosIcon />
              </span>
            </label>
            <div className={styles.bottomButtons}>
              <button
                className={styles.buttonDelete}
                type="button"
                onClick={handleRemoveImage}
              >
                Eliminar imagen
              </button>
              <input
                className={styles.customFileInput}
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button
                className={styles.buttonCreate}
                type="submit"
                onClick={handleSubmit}
              >
                Crear Producto
              </button>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    border: "2px solid #000000",
                    padding: "10px",
                    color: "#ffffff",
                    background: "#000000",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
