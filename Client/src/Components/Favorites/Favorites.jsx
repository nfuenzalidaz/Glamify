import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Searchbar from "../Searchbar/Searchbar";
import CardList from "../CardList/CardList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Favorites.module.css";
import { useEffect } from "react";
import { fetchFavoritesByUser } from "../../Redux/Features/favoriteSlice";
import FilterFavorites from "../FilterFavorites/FilterFavorites";
import { NavLink } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  const isLoading = useSelector((state) => state.favorite.loading);
  const filteredFavorites = useSelector(
    (state) => state.favorite.filteredFavorites
  );

  const dataProducts = favorites.map((f) => f.Product);
  const filteredDataProducts = filteredFavorites.map((f) => f.Product);
  const productsToDisplay =
    filteredFavorites.length > 0 ? filteredDataProducts : dataProducts;
  console.log(filteredDataProducts);

  useEffect(() => {
    dispatch(fetchFavoritesByUser("d5328124-4599-4b26-906d-eb90c3c9c77a"));
  }, [dispatch, filteredFavorites]);

  return (
    <div className={styles.container}>
      <NavBar />
      <Searchbar />
      {dataProducts.length > 0 && <FilterFavorites />}
      {dataProducts.length === 0 && !isLoading ? (
        <div className={styles.notFavorites}>
          <h3>Todavia no has agregado ningun producto a tus favoritos.</h3>
          <NavLink to="/home" className={styles.link}>
            <AddCircleIcon
              fontSize="medium"
              titleAccess="Agregar productos a favoritos"
            />
          </NavLink>
        </div>
      ) : (
        <CardList allProducts={productsToDisplay} isFavoritePage={true} />
      )}
    </div>
  );
};

export default Favorites;
