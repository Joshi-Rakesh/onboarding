import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import { FieldArray, Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { saveFavoriteSongs, setStep } from "../../redux/slices/onboardingSlice";
import { RootState } from "../../redux/store";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Step2FavoriteSongs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { favoriteSongs } = useSelector((state: RootState) => state.onboarding);

  return (
    <Formik
      initialValues={{ songs: favoriteSongs }}
      onSubmit={(values) => {
        dispatch(saveFavoriteSongs(values.songs));
        dispatch(setStep(3));
        navigate("/onboarding");
      }}
    >
      {({ values }) => (
        <Form>
          <Box sx={{ maxWidth: 500, mx: "auto", mt: 5 }}>
            <Typography variant="h5" mb={2}>
              Favorite Songs
            </Typography>
            <FieldArray name="songs">
              {({ push, remove }) => (
                <>
                  {values.songs.map((_, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={2}>
                      <Field
                        as={TextField}
                        name={`songs[${index}]`}
                        label={`Song ${index + 1}`}
                        fullWidth
                        margin="normal"
                      />
                      <IconButton onClick={() => remove(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <Button variant="outlined" onClick={() => push("")}>
                    Add Song
                  </Button>
                </>
              )}
            </FieldArray>
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

export default Step2FavoriteSongs;
