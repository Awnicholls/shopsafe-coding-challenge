import { ThankYou, Form } from "./components";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
  return (
    <ThemeProvider>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CssBaseline />
            <Switch>
              <Route exact path="/">
                <Form />
              </Route>
              <Route exact path="/thankyou">
                <ThankYou />
              </Route>
            </Switch>
          </div>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
