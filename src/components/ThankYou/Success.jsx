import carData from "../../data/carData";
import CarCard from "../Cards/CarCard";
import CustomerCard from "../Cards/CustomerCard";

import { Container, Grid } from "@material-ui/core";

const Success = () => {

  const customerInfo = JSON.parse(localStorage.getItem("form"));
  const carInfo = carData.find(({ model }) => model === customerInfo.model);

  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <CarCard item={carInfo} />
          </Grid>
          <Grid item xs={6}>
            <CustomerCard item={customerInfo} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Success;
