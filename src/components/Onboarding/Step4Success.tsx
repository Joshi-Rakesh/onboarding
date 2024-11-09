import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Step4Success = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    localStorage.setItem("onboarding-completed", "true");
    navigate("/home");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" mb={3}>
        🎉 Onboarding Complete!
      </Typography>
      <Typography mb={3}>
        You have successfully completed all the steps of the onboarding process.
      </Typography>
      <Button variant="contained" onClick={handleComplete}>
        Go to Home
      </Button>
    </Box>
  );
};

export default Step4Success;
