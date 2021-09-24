import useStyles from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import carData from "./carData";
import CarCard from "./CarCard";

import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Container,
  FormHelperText,
} from "@material-ui/core";

const Form = () => {
  const classes = useStyles();
  const history = useHistory();

  const [selectedStartDate, handleStartDateChange] = useState(new Date());
  const [selectedEndDate, handleEndDateChange] = useState(new Date());
  const [numberOfDays, setNumberOfDays] = useState();
  const [totalPrice, setTotalPrice] = useState()

  const [carModel, setCarModel] = useState("Fiesta");
  const [chosenCar, setChosenCar] = useState({});
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("A phone number is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (event) => {
    setCarModel(event.target.value);
  };

  const onSubmit = (data) => {
    data.model = carModel;
    data.noDays = numberOfDays;
    data.totalPrice = totalPrice;
    console.log(JSON.stringify(data, null, 2));
    localStorage.setItem("form", JSON.stringify(data, null, 2));
    history.push("/thankyou");
  };

  useEffect(() => {
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    const Difference_In_Time = end.getTime() - start.getTime();
    setNumberOfDays(Math.round(Difference_In_Time / (1000 * 3600 * 24)));
  }, [selectedStartDate, selectedEndDate]);

  useEffect(() =>{
    setTotalPrice(chosenCar.price * numberOfDays)
  },[chosenCar, numberOfDays])

  useEffect(() => {
    setChosenCar(carData.find(({ model }) => model === carModel));
  }, [carModel]);

  return (
    <>
      <main>
        <Typography
          variant="h2"
          component="h1"
          className={classes.title}
          gutterBottom
        >
          Rent A Car!
        </Typography>
        <Container className={classes.content}>
          <Paper className={classes.paper}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.header}
              gutterBottom
            >
              About You:
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  {...register("firstName")}
                  error={errors.firstName ? true : false}
                />
                <FormHelperText color="textSecondary">
                  {errors.firstName?.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  {...register("lastName")}
                  error={errors.lastName ? true : false}
                />
                <FormHelperText color="textSecondary">
                  {errors.lastName?.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  {...register("phone")}
                  error={errors.phone ? true : false}
                />
                <FormHelperText color="textSecondary">
                  {errors.phone?.message}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  {...register("email")}
                  error={errors.email ? true : false}
                />
                <FormHelperText color="textSecondary">
                  {errors.email?.message}
                </FormHelperText>
              </Grid>
            </Grid>
            {/* <Divider variant="middle" /> */}
            <Typography
              variant="h6"
              component="h3"
              className={classes.header}
              gutterBottom
            >
              Please Choose A Car:
            </Typography>
            <Grid container spacing={3}>
              {carData.map((item) => (
                <Grid key={item.id} item xs={12} sm={4}>
                  <CarCard
                    item={item}
                    handleChange={handleChange}
                    carModel={carModel}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="h6"
              component="h4"
              className={classes.header}
              gutterBottom
            >
              When would you like to rent from and to:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    autoOk
                    fullWidth
                    disablePast
                    variant="inline"
                    inputVariant="outlined"
                    label="Start date"
                    format="DD/MM/yyyy"
                    value={selectedStartDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={(date) => handleStartDateChange(date)}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={6}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    autoOk
                    fullWidth
                    disablePast
                    variant="inline"
                    inputVariant="outlined"
                    label="End date"
                    format="DD/MM/yyyy"
                    value={selectedEndDate}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={(date) => handleEndDateChange(date)}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
              <Typography
                variant="h6"
                component="h5"
                className={classes.header}
                gutterBottom
              >
                Renting the {chosenCar.make} {chosenCar.model} for {numberOfDays} days will cost: £{totalPrice}
              </Typography>

            <Box mt={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Register
              </Button>
            </Box>
          </Paper>
        </Container>
      </main>
    </>
  );
};

export default Form;
