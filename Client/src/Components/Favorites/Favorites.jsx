import { useDispatch, useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Searchbar from "../Searchbar/Searchbar";
import CardList from "../CardList/CardList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./Favorites.module.css";
import { useEffect } from "react";
import { fetchFavoritesByUser } from "../../Redux/Features/favoriteSlice";
import FilterFavorites from "../FilterFavorites/FilterFavorites";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";

const Favorites = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const favorites = useSelector((state) => state.favorite.favorites);
  const isLoading = useSelector((state) => state.favorite.loading);
  const filteredFavorites = useSelector(
    (state) => state.favorite.filteredFavorites
  );

  const dataProducts = favorites.map((f) => f.Product);
  const filteredDataProducts = filteredFavorites.map((f) => f.Product);
  const productsToDisplay =
    filteredFavorites.length > 0 ? filteredDataProducts : dataProducts;

  const userId = isAuthenticated ? user.sub : null;

  useEffect(() => {
    dispatch(fetchFavoritesByUser(userId));
  }, [dispatch, filteredFavorites]);

  return (
    <div className={styles.container}>
    <div className={styles.searchNavContainer}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
    </div>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>
      {dataProducts.length > 0 && <FilterFavorites />}
      {isLoading ? (
        <div className={styles.loaderDiv}>
          <Loader />
        </div>
      ) : dataProducts.length === 0 && !isLoading ? (
        isAuthenticated ? (
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
          <div className={styles.notFavorites}>
            <h3>Inicia sesion para agregar productos a favoritos.</h3>
            <Link
              onClick={() => loginWithRedirect()}
              to="/login"
              className={styles.buttonLogIn}
            >
              Iniciar sesion
            </Link>
          </div>
        )
      ) : (
        <CardList allProducts={productsToDisplay} isFavoritePage={true} />
      )}
    </div>
  );
};

export default Favorites;
