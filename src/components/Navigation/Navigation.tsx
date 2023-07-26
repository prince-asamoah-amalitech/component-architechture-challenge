import './Navigation.scss';
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { OnBoardingDispatchContext, OnBoardingStateContext } from '../../context/OnBoardingContext';
import { useContext } from 'react';

export default function Navigation() {
    const state = useContext(OnBoardingStateContext);
    const dispatch = useContext(OnBoardingDispatchContext);

    return (
        <div className="navigation">
            {state?.currentStep !== 1 && (
                <a title="Go Back" onClick={() => dispatch?.({ type: 'previous_step'})}>
                    <LeftArrow />
                    <span>Back</span>
                </a>
            )}
            <div className="steps">
                <span>
                    <strong>Step {state?.currentStep} </strong>
                    <span>of {state?.totalSteps}</span>
                </span>
            </div>
            <a title="Exit">Exit</a>
        </div>
    );
}
