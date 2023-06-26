import './Navigation.scss';
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';

interface HeaderProps {
    steps: {
        stepsNumber: number;
        stepsTotal: number;
    };
    handleGoToPreviousStep: () => void;
}
export default function Navigation({
    steps,
    handleGoToPreviousStep,
}: HeaderProps) {
    return (
        <div className="navigation">
            {steps.stepsNumber !== 1 && (
                <a title="Go Back" onClick={handleGoToPreviousStep}>
                    <LeftArrow />
                    <span>Back</span>
                </a>
            )}
            <div className="steps">
                <span>
                    <strong>Step {steps.stepsNumber} </strong>
                    <span>of {steps.stepsTotal}</span>
                </span>
            </div>
            <a title="Exit">Exit</a>
        </div>
    );
}