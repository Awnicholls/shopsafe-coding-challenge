import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  title: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "80%",
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  media: {
    height: 178,
    width: 285,
  },
  card: {
    height : 'max-content'
  },
  cardInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    paddingTop: 10,
  },
  radio: {
    alignSelf: "center",
  },
}));
