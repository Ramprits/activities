/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactElement, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useStore } from "../../store/store";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";

type FormData = {
  email: string;
  password: string;
};

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

const SignInForm = (props: any): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const [error, setError] = useState("");
  const { userStore } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "rampritsahani@gmail.com",
      password: "Pa$$w0rd",
    },
  });

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    "02_header": "Sign in",
    "02_primary-action": "Sign in",
    "02_secondary-action": "Don't have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const onSubmit = handleSubmit((data) =>
    userStore
      .login(data)
      .then(() => {
        setError("");
        history.replace("/");
      })
      .catch(() => setError("invalid email or password"))
  );

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    error={!!errors.email}
                    label="Email address"
                    autoComplete="email"
                    helperText={!!errors.email && "Please enter email address"}
                    {...register("email", { required: true })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={!!errors.password && "Please enter password"}
                    {...register("password", { required: true })}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Typography variant="h6" align="center" color="secondary">
                  {error && error}
                </Typography>
              </Box>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["02_primary-action"]}
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="#" variant="body2">
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
};
export default observer(SignInForm);
