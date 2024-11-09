import { Box, Button, Typography, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentInfo, setStep } from "../../redux/slices/onboardingSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Step3PaymentInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { paymentInfo } = useSelector((state: RootState) => state.onboarding);

  return (
    <Formik
      initialValues={paymentInfo}
      onSubmit={(values) => {
        dispatch(savePaymentInfo(values));
        dispatch(setStep(4));
        navigate("/onboarding");
      }}
    >
      {() => (
        <Form>
          <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
            <Typography variant="h5" mb={2}>
              Payment Information
            </Typography>
            <Field
              as={TextField}
              name="cardNumber"
              label="Card Number"
              fullWidth
              margin="normal"
            />
            <Field
              as={TextField}
              name="expiryDate"
              label="Expiry Date (MM/YY)"
              fullWidth
              margin="normal"
            />
            <Field
              as={TextField}
              name="cvv"
              label="CVV"
              fullWidth
              margin="normal"
            />
            <Box mt={3}>
              <Button variant="contained" type="submit" fullWidth>
                Next
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Step3PaymentInfo;
