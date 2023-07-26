import { createContext, useReducer } from 'react';
import { ACTIONTYPE, InitialState } from '../@types/appTypes';
import appReducer from './appReducer';
import initialState from './data';

export const OnBoardingStateContext = createContext<InitialState | null>(null);
export const OnBoardingDispatchContext =
    createContext<React.Dispatch<ACTIONTYPE> | null>(null);

interface OnBoardingContextProps {
    children: React.ReactNode;
}

export default function OnBoardingContext({
    children,
}: OnBoardingContextProps) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <OnBoardingStateContext.Provider value={state}>
            <OnBoardingDispatchContext.Provider value={dispatch}>
                {children}
            </OnBoardingDispatchContext.Provider>
        </OnBoardingStateContext.Provider>
    );
}
