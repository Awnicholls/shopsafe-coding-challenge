import {
    Card,
    CardContent,
    Typography,
  } from "@material-ui/core";

const CustomerCard = ({item}) => {

    return (
<Card >
      <CardContent>
        <Typography variant="h6">Thank you {item.firstName} {item.lastName} for choosing us for your car rental needs!</Typography>
        <Typography variant="subtitle1">
            You have chosen to rent the {item.model} for {item.noDays} days. This will cost a total of £{item.totalPrice}
        </Typography>
        <Typography>
            We will be sending an email confirming your details and the car details to {item.email} and will text you ({item.phone}) on the day the car is due to be returned as a reminder.
        </Typography>
         </CardContent>
    </Card>
    )
}

export default CustomerCard
