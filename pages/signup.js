import axios from "axios";
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
import Link from "next/link";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { signupUser } from "../lib/auth";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    createdUser: "",
    openError: false,
    isOpen: false,
    isLoading: false
  };

  handleClose = () => this.setState({ openError: false });

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { name, email, password } = this.state;

    event.preventDefault();
    const user = { name, email, password };
    this.setState({ isLoading: true, error: "" });
    signupUser(user)
      .then(createdUser => {
        this.setState({
          createdUser,
          error: "",
          isOpen: true,
          isLoading: false
        });
      })
      .catch(this.showError);
  };

  showError = err => {
    const error = (err.response && err.response.data) || err.message;
    this.setState({ error, openError: true, isLoading: false });
  };

  render() {
    //    const { classes } = this.props;
    const { error, openError, isOpen, createdUser, isLoading } = this.state;

    return (
      <BaseLayout {...this.props.auth} title="setState - CV">
        <BasePage title="Sign up" className="cv-page">
          <div className="">
            <Form onSubmit={this.handleSubmit} className="">
              <FormGroup margin="normal" required>
                <Label htmlFor="name">Name</Label>
                <Input name="name" type="text" onChange={this.handleChange} />
              </FormGroup>
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
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </Form>
            {/* Error Snackbar */}
            {error && (
              <Toast
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                isOpen={isOpen}
                onClose={this.handleClose}
                autoHideDuration={6000}
                message={<span className="">{error}</span>}
              />
            )}

            {/* Success Dialog */}
            <Toast
              isOpen={isOpen}
              disableBackdropClick={true}
              TransitionComponent={Transition}
            >
              <ToastHeader>New Account</ToastHeader>
              <ToastBody>User {createdUser} successfully created!</ToastBody>

              <Button color="primary" variant="contained">
                <Link href="/signin">
                  <a className="">Sign in</a>
                </Link>
              </Button>
            </Toast>
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
  signinLink: {
    textDecoration: "none",
    color: "white"
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
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default Signup;
