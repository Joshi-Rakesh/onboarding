import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box, Typography } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("onboarding-step", "1");
      navigate("/onboarding");
    }

    alert("Please enter the credentials");
  };

  return (
    <Box sx={{ maxWidth: 300, mx: "auto", mt: 5 }}>
      <Typography variant="h5" mb={2}>
        Login
      </Typography>
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
