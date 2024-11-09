import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" mb={2}>
        Welcome to the App!
      </Typography>
      <Typography>We’re glad to have you onboard.</Typography>
    </Box>
  );
};

export default HomePage;
