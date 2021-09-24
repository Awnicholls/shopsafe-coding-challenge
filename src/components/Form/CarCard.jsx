import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Radio,
} from "@material-ui/core";

const CarCard = ({ item, carModel, handleChange}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={item.make}
          className={classes.media}
          image={item.img}
          title={item.make}
        />
      <CardContent className={classes.cardInfo}>
        <div>
          <Typography variant="body2" color="textSecondary" component="p">
            Make: {item.make}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Model: {item.model}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="textSecondary" component="p">
            Doors: {item.doors}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Seats: {item.seats}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="textSecondary" component="p">
            Colour: {item.colour}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price per day: £{item.price}
          </Typography>
        </div>
          </CardContent>

        <Radio
        className={classes.radio}
        checked={carModel === item.model}
        onChange={handleChange}
        value={item.model}
        name="radio-buttons-car"
        inputProps={{ 'aria-label': item.model }}
      />
    </Card>
  );
};

export default CarCard;
