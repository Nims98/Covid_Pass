import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/";
import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useState, useEffect } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

import colors from "../../Config/colors";

const theme = createTheme();

const LoginForm: React.FC<{}> = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const arr = Array.from({ length: 50 }, (_, i) => i + 1);
  const [ages, setAges] = useState(arr);
  const switchMode = () => {
    setisSignUp((prevIsSignUp) => !prevIsSignUp);
  };
  const [showPassword, setShowPassword] = useState(false);

  const ShowPassword = () => {
    setShowPassword((prevshowPassword) => !prevshowPassword);
  };
interface formVals{
   fullName: string;
            NIC: string;
            email: string;
            address: string;
            emergency: any;
            contact: any;
            gender: string;
            age: any;
            password: string;
            location: string;
            confirmPassword: string;
}
const initVals: formVals = { 
            fullName: "",
            NIC: "",
            email: "",
            address: "",
            emergency: "",
            contact: "",
            gender: "",
            age: "",
            password: "",
            location: "",
            confirmPassword: "",};
  return (
    <Fade in>
      <div
        style={{
          margin: "100px 100px 0 100px",
          display: "flex",
        }}>
        <Formik
          initialValues={initVals}
          validate={(values:formVals) => {
            const errors :any= {};
            if (!isSignUp) {
              if (!values.fullName) {
                errors.fullName = "Required";
              }
              if (!values.NIC) {
                errors.NIC = "Required";
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
              }
              if (values.contact !== 0) {
                if (!/^[0-9\b]+$/i.test(values.contact) || values.contact.length !== 10) {
                  errors.contact = "Enter a Valid Phone Number";
                }
              }
              if (values.emergency !== 0) {
                if (!/^[0-9\b]+$/i.test(values.emergency) || values.emergency.length !== 10) {
                  errors.emergency = "Enter a Valid Phone Number";
                }
              }
              if (!values.location) {
                errors.location = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email addaress";
              }
              if (!values.password) {
                errors.password = "Required";
              }
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = "Invalid email addaress";
            }
            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}>
          {({ submitForm }) => (
            <ThemeProvider theme={theme}>
              <Container
                sx={{
                width: {
                  lg: 950, 
                  xl: 950,
                  },
                  bgcolor: '#EBEBEB',
                  borderRadius: 4,
                  p: 3,
                }}>
                <CssBaseline />
                <Grow in>
                  <Form>
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          mb: 3,
                          justifyContent: "space-between",
                        }}>
                        <Typography component="h1" variant="h4">
                          Registration
                        </Typography>
                        <Avatar sx={{fontSize:'large'}} />
                      </Box>
                      <Box
                        sx={{
                          mt: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          width: "100%",
                        }}>
                        <Field
                          label="Full Name"
                          component={TextField}
                          margin="normal"
                          required
                          fullWidth
                          size="small"
                          id="fullName"
                          name="fullName"
                          variant="outlined"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}>
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Email Address"
                            component={TextField}
                            margin="normal"
                            size="small"
                            required
                            id="email"
                            name="email"
                            variant="outlined"
                          />
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="NIC"
                            component={TextField}
                            margin="normal"
                            size="small"
                            required
                            id="NIC"
                            name="NIC"
                            variant="outlined"
                          />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            mt: 3,
                            mb: 1,
                          }}>
                          <Typography sx={{ ml: 0, mr: 2 }}>Gender :</Typography>
                          <Typography sx={{ mr: 2 }}>
                            Male
                            <Field type="radio" value="Male" name="gender" />
                          </Typography>
                          <Typography sx={{ mr: 2 }}>
                            Female
                            <Field type="radio" value="Female" name="gender" />
                          </Typography>
                          <Field sx={{ width: 170 }} name="age" component={TextField} select label="Age">
                            {arr.map((age) => (
                              <MenuItem key={age} value={age}>
                                {age}
                              </MenuItem>
                            ))}
                          </Field>
                        </Box>
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Select location"
                            component={TextField}
                            margin="normal"
                            size="small"
                            required
                            id="location"
                            name="location"
                            variant="outlined"
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}>
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Contact Number"
                            component={TextField}
                            margin="normal"
                            size="small"
                            required
                            id="contact"
                            name="contact"
                            variant="outlined"
                          />
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Emergency Contact"
                            component={TextField}
                            margin="normal"
                            size="small"
                            required
                            id="emergency"
                            name="emergency"
                            variant="outlined"
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}>
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Password"
                            component={TextField}
                            margin="normal"
                            required
                            size="small"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            variant="outlined"
                            autoComplete="current-password"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton onClick={ShowPassword}>
                                    {showPassword ? (
                                      <VisibilityOff fontSize="small" />
                                    ) : (
                                      <Visibility fontSize="small" />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                          <Field
                            sx={{
                              minWidth: 420,
                            }}
                            label="Confirm Password"
                            component={TextField}
                            margin="normal"
                            required
                            size="small"
                            variant="outlined"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="start">
                                  <IconButton onClick={ShowPassword}>
                                    {showPassword ? (
                                      <VisibilityOff fontSize="small" />
                                    ) : (
                                      <Visibility fontSize="small" />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>

                        <Button
                          style={{
                            fontWeight: "500",
                            fontSize: 18,
                            height: 35,
                            background: colors.primary,
                            color: "white",
                            margin: "20px 0 0px 0",
                            textTransform: "none",
                          }}
                          onClick={submitForm}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}>
                          Sign Up
                        </Button>
                        {/* <GoogleLogin
                          clientId="9006130706-74le5v6qe3g19pmbg4ts5m1ps68pubt3.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <Button
                              style={{
                                fontWeight: "700",
                                background: "white",
                                color: "black",
                                // padding: "5px 0 0 0",
                                height: "40px",
                              }}
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              fullWidth
                              startIcon={<Icon />}
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}>
                              Continue with Google
                            </Button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleFailure}
                          cookiePolicy="single_host_origin"
                        /> */}
                        <Grid container>
                          <Grid item>
                            <Button
                              style={{
                                // background: "#00498B",
                                color: "black",
                                margin: "20px 0 10px 0",
                              }}
                              variant="text"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={switchMode}>
                              {isSignUp ? "Don't have an account ?" : "Already have an account ?"}
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Form>
                </Grow>
              </Container>
            </ThemeProvider>
          )}
        </Formik>
      </div>
    </Fade>
  );
};

export default LoginForm;
