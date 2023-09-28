import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Searchbar from "../Searchbar/Searchbar";
import CardList from "../CardList/CardList";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from "./Favorites.module.css";
import { useEffect } from "react";
import { fetchFavoritesByUser } from "../../Redux/Features/favoriteSlice";
import FilterFavorites from "../FilterFavorites/FilterFavorites";
import { Link, NavLink } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  console.log(favorites);

  const dataProducts = favorites.map((f) => f.Product);

  useEffect(() => {
    dispatch(fetchFavoritesByUser("6c8d6002-c550-48bd-9fe8-cc8b5321e3be"));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <NavBar />
      <Searchbar />
      {dataProducts.length > 0 && <FilterFavorites />}
      {dataProducts.length === 0 ? (
        <div className={styles.notFavorites}>
          <h3>Todavia no has agregado ningun producto a tus favoritos.</h3>
          <NavLink to='/home' className={styles.link}>
            <AddCircleIcon fontSize="medium" titleAccess="Agregar productos a favoritos"/>
          </NavLink>
        </div>
      ) : (
        <CardList allProducts={dataProducts} isFavoritePage={true} />
      )}
    </div>
  );
};

export default Favorites;
