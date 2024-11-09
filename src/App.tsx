import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Step1PersonalProfile from "./components/Onboarding/Step1PersonalProfile";
import Step2FavoriteSongs from "./components/Onboarding/Step2FavoriteSongs";
import Step3PaymentInfo from "./components/Onboarding/Step3PaymentInfo";
import Step4Success from "./components/Onboarding/Step4Success";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { step } = useSelector((state: RootState) => state.onboarding);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/onboarding"
          element={<Navigate to={`/onboarding/step${step}`} replace />}
        />
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
