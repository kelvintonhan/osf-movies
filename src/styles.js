import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
  
  homecontent: {
    background: "#A5C9CA",
    padding: "1px"
  },

  homelist: {
    background: "#2C3333",
    padding: "40px 50px 50px",
  },

  cardinfo: {
    textDecoration: "none",
    background: "#A5C9CA"
  },

  title: {
    letterSpacing: "0.1rem",
    lineHeight: "1.25",
    marginBottom: "0.15rem",
    fontSize: "2rem",
    color: "#E7F6F2"
  },

  form: {
    width: "90vw",
    maxWidth: "1170px",
    margin: "0 auto",
    marginTop: "1rem",
    marginBottom: "1rem"
  },

  error: {
    color: "#f93154",
    paddingTop: "0.5rem",
    fontSize: "2.15rem",
  },

  section: {
    width: "90vw",
    maxWidth: "1170px",
    margin: "4rem auto",
    display: "flex",
    gap: "2rem",
  }

}))