import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Success from "./Success";
const ThankYou = () => {
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("form") && formCompleted === false) {
      setFormCompleted(true);
    }
  }, [formCompleted]);

  let history = useHistory();

  function gotoHome() {
    if (!localStorage.getItem("form")) {
      history.push("/");
    }
  }

  return (
    <>
      <div>Thank You</div>
      <div>
        {formCompleted ? (
          <Success/>
        ) : (
          <div>{gotoHome()} </div>
        )}
      </div>
    </>
  );
};

export default ThankYou;
