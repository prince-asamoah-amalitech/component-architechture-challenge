import { InitialState } from "../@types/appTypes";

const initialState: InitialState = {
    user: {
        name: '',
        email: '',
        password: '',
        photo: '',
    },
    recommendations: ['SI'],
    interests: [],
    currentStep: 1,
    totalSteps: 4,
};

export default initialState;