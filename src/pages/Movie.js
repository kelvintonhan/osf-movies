import React, { useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Typography, Button} from "@mui/material";
import useStyles from "../styles";
import {getMovie} from '../redux/feature/movieSlice';

const Movie = () => {
  const dispatch = useDispatch();
  const {movie} = useSelector((state) => ({ ...state.movie}));
  const classes = useStyles();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      dispatch(getMovie(id))
    }
  }, [id])
  return (
    <section className={classes.section}>
      <img src={movie.Poster} />
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {movie.Title}
        </Typography>

        <Typography align="left" variant="h5" gutterBottom component="h5">
          {movie.Year}
        </Typography>

        <Typography align="left" variant="body" gutterBottom component="p">
          {movie.Plot}
        </Typography>

        <Typography align="left" variant="h6" gutterBottom component="h6">
          {movie.Director}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Voltar
        </Button>

      </div>

    </section>
  )
}

export default Movie