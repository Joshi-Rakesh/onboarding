import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonalProfile {
  name: string;
  age: string;
  email: string;
  profilePicture: string;
}

interface OnboardingState {
  personalProfile: PersonalProfile;
  favoriteSongs: string[];
  paymentInfo: { cardNumber: string; expiryDate: string; cvv: string };
}

const initialState: OnboardingState = {
  personalProfile: { name: "", age: "", email: "", profilePicture: "" },
  favoriteSongs: [],
  paymentInfo: { cardNumber: "", expiryDate: "", cvv: "" },
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setStep(_, action: PayloadAction<number>) {
      localStorage.setItem("onboarding-step", action.payload.toString());
    },

    savePersonalProfile(state, action: PayloadAction<PersonalProfile>) {
      state.personalProfile = action.payload;
    },
    saveFavoriteSongs(state, action: PayloadAction<string[]>) {
      state.favoriteSongs = action.payload;
    },
    savePaymentInfo(
      state,
      action: PayloadAction<{
        cardNumber: string;
        expiryDate: string;
        cvv: string;
      }>
    ) {
      state.paymentInfo = action.payload;
    },
  },
});

export const {
  setStep,
  savePersonalProfile,
  saveFavoriteSongs,
  savePaymentInfo,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
