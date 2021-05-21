import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    textField: {
      border: "1px solid yellow",
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className="mx-5 flex flex-col">
      <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
        <h1>CONTACT ME</h1>
      </div>
      <div className="my-3 h-80 text-sm">
        <form>
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              className="w-full"
              size="small"
            />
          </div>
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              className="w-full"
              size="small"
            />
          </div>
          <div className="my-3">
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              className="w-full"
              size="small"
              multiline
              rows={5}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
