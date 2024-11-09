import { Box, TextField, Button, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import {
  savePersonalProfile,
  setStep,
} from "../../redux/slices/onboardingSlice";
import { useNavigate } from "react-router-dom";

const Step1PersonalProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: "", age: 0, email: "", profilePicture: "" }}
      onSubmit={(values) => {
        console.log(values, "lknksd");
        dispatch(savePersonalProfile(values));
        dispatch(setStep(2));
        navigate("/onboarding");
      }}
    >
      {() => (
        <Form>
          <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
            <Typography variant="h5" mb={2}>
              Personal Profile
            </Typography>
            <Field
              name="name"
              as={TextField}
              label="Name"
              fullWidth
              margin="normal"
            />
            <Field
              name="age"
              as={TextField}
              label="Age"
              fullWidth
              margin="normal"
              type="number"
            />
            <Field
              name="email"
              as={TextField}
              label="Email"
              fullWidth
              margin="normal"
              type="email"
            />
            <Field
              name="profilePicture"
              as={TextField}
              label="Profile Picture URL"
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" fullWidth>
              Next
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Step1PersonalProfile;
