// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import FormGroup from "@material-ui/core/FormGroup";
// import Paper from "@material-ui/core/Paper";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";
// import Lock from "@material-ui/icons/Lock";
// import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";
import Router from "next/router";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { signinUser } from "../lib/auth";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    openError: false,
    isLoading: false
  };

  handleClose = () => this.setState({ openError: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { email, password } = this.state;

    event.preventDefault();
    const user = { email, password };
    this.setState({ isLoading: true, error: "" });
    signinUser(user)
      .then(() => {
        Router.push("/");
      })
      .catch(this.showError);
  };

  showError = err => {
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, openError: true, isLoading: false });
  };

  render() {
    //  const { classes } = this.props;
    const { error, openError, isLoading } = this.state;

    return (
      <BaseLayout {...this.props.auth} title="setState - CV">
        <BasePage title="Sign In" className="cv-page">
          <div className="">
            <Form onSubmit={this.handleSubmit} className="">
              <FormGroup margin="normal" required>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup margin="normal" required>
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
                className=""
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </Form>

            {/* Error Snackbar */}
            {error && (
              <Toast
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                open={openError}
                onClose={this.handleClose}
                autoHideDuration={6000}
                message={<span className="">{error}</span>}
              />
            )}
          </div>
        </BasePage>
      </BaseLayout>
    );
  }
}

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2
  },
  snack: {
    color: theme.palette.secondary.light
  }
});

export default Signin;
