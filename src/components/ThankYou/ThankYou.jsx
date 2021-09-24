import { useEffect, useState } from "react";

import { Typography } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import Success from "./Success";

const ThankYou = () => {
  const classes = useStyles();

  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("form") && formCompleted === false) {
      setFormCompleted(true);
    }
  }, [formCompleted]);

  const history = useHistory();

  function gotoHome() {
    if (!localStorage.getItem("form")) {
      history.push("/");
    }
  }

  return (
    <>
      <main>
        <Typography
          variant="h2"
          component="h1"
          className={classes.title}
          gutterBottom
        >
          Thank You
        </Typography>
        <div>{formCompleted ? <Success /> : <div>{gotoHome()} </div>}</div>
      </main>
    </>
  );
};

export default ThankYou;
