import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonalProfile {
  name: string;
  age: number;
  email: string;
  profilePicture: string;
}

interface OnboardingState {
  step: number;
  personalProfile: PersonalProfile;
  favoriteSongs: string[];
  paymentInfo: { cardNumber: string; expiryDate: string; cvv: string };
}

const initialState: OnboardingState = {
  step: 1,
  personalProfile: { name: "", age: 0, email: "", profilePicture: "" },
  favoriteSongs: [],
  paymentInfo: { cardNumber: "", expiryDate: "", cvv: "" },
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
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
