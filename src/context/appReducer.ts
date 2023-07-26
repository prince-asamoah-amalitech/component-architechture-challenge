import { ACTIONTYPE, InitialState } from '../@types/appTypes';

export default function appReducer(state: InitialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'next_step': {
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        }
        case 'previous_step': {
            return {
                ...state,
                currentStep: state.currentStep - 1
            }
        }
        default:
            return state;
    }
}
