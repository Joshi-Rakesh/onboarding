import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Step1PersonalProfile from "./components/Onboarding/Step1PersonalProfile";
import Step2FavoriteSongs from "./components/Onboarding/Step2FavoriteSongs";
import Step3PaymentInfo from "./components/Onboarding/Step3PaymentInfo";
import Step4Success from "./components/Onboarding/Step4Success";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [step, setStep] = useState<string | null>(null);

  useEffect(() => {
    const storedStep = localStorage.getItem("onboarding-step");
    setStep(storedStep || "1");
  }, []);

  if (step === null) {
    return <div>Loading...</div>;
  }

  console.log(step, "stepstepstep");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/onboarding/step1" element={<Step1PersonalProfile />} />
        <Route path="/onboarding/step2" element={<Step2FavoriteSongs />} />
        <Route path="/onboarding/step3" element={<Step3PaymentInfo />} />
        <Route path="/onboarding/step4" element={<Step4Success />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
