import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Features/productSlice";
import styles from "./CreateProducts.module.css";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";

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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //Estado para mostrar mensaje de confirmacion de creacion
  const [previewImage, setPreviewImage] = useState(""); //Estado para previsualizacion de imagen subida
  const [input, setInput] = useState(InitialCreate); //Estado para almacenamiento de datos en estado local
  const [stock, setStock] = useState(1); // Estado para almacenar el  stock de productos a crear
  const [stockDisponible, setStockDisponible] = useState("");
  const dispatch = useDispatch();

  // Función para manejar el cambio en el campo de stock
  const handleStockChange = (event) => {
    const nuevaStock = parseInt(event.target.value); // Convertir el valor a un número entero
    setStockDisponible(nuevaStock);
  };

  //Funcion que captura la data de los inputs y la almacena en el estado local
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  //Funcion que maneja subida de imagenes y previsualizacion
  const handleImageChange = (event) => {
    const imgFile = event.target.files[0];
    setInput({ ...input, [event.target.name]: event.target.value });
    setPreviewImage(URL.createObjectURL(imgFile));
  };

  //Funcion que limpia los datos de imagenes por subir
  const handleRemoveImage = () => {
    const fileInput = document.getElementById("image");
    fileInput.value = "";
    setPreviewImage(""); //
    setInput({ ...input, img: "" });
  };

  //Funcion para boton de creacion de producto
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fileName = input.img.split("\\").pop();

      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("price", input.price);
      formData.append("gender", input.gender);
      formData.append("description", input.description);
      formData.append("stock", stockDisponible); //  la cantidad al FormData
      formData.append("category", input.category);
      formData.append("image", fileName);

      const formDataObject = Object.fromEntries(formData);

      const response = await axios.post(
        `http://localhost:3001/product`,
        formDataObject
      );

      //Actualiza el estado global
      dispatch(fetchProducts());

      // Mostrar el mensaje de éxito
      setShowSuccessMessage(true);

      // Actualiza la stock disponible
      setStockDisponible(stock);

      setTimeout(() => {
        setShowSuccessMessage(false);
        setInput({
          ...input,
          name: "",
          price: "",
          description: "",
          gender: "",
          stock: "",
          image: "",
        });
        setPreviewImage("");
        setStock(""); // Restablecer la stocka 1 después de la creación
        setStockDisponible(1); // Restablecer la stock disponible
        const gender = document.getElementById("gender");
        gender.value = "";
        const category = document.getElementById("category");
        category.value = "";
      }, 2000);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  //FORMULARIO

  return (
    <div className={styles.FormContainer}>
      <h1 className={styles.titituloForm}>CREAR PRODUCTO</h1>
      <div className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.leftDiv}>
          <div className={styles.InputContainer}>
        <NavLink to="/home">
          <ArrowBackIosIcon className={styles.iconGoBack} />
        </NavLink>
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
              value={stockDisponible} // Usa stockDisponible para mostrar
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
              <option value="" disabled selected>
                ESCOGE UNA OPCION
              </option>
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
              <option value="" disabled selected>
                ESCOGE UNA OPCION
              </option>
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
                name="img"
                value={input.img}
                onChange={handleImageChange}
              />
              <button
                className={styles.buttonCreate}
                type="submit"
                onClick={handleSubmit}
              >
                Crear Producto
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-modal">¡Producto creado exitosamente!</div>
      )}
    </div>
  );
};

export default CreateProduct;
