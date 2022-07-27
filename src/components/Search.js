import React, {useState, useEffect} from 'react'
import {TextField} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";
import useStyles from "../styles";
import {getMovies} from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("batman");
  const classes = useStyles();
  const {moviesList: {Error: error}} = useSelector((state) => ({...state.movie}));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
    <div className={classes.homecontent}>
      <h2 className={classes.title}>MOVIES</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{m: 1, width: "55ch"}}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </div>
    </>
  )
}

export default Search