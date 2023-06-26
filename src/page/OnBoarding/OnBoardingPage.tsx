import { useCallback, useEffect, useMemo, useState } from 'react';
import './OnBoardingPage.scss';

import AddPhoto from '../../template/AddPhoto/AddPhoto';
import Recommendations from '../../template/Recommendations/Recommendations';
import Interest from '../../template/Interest/Interest';
import Complete from '../../template/Complete/Complete';
import Register from '../../template/Register/Register';

const templateComponents = [
    Register,
    AddPhoto,
    Recommendations,
    Interest,
    Complete,
];

export default function OnBoardingPage() {
    const [stepsNumber, setStepsNumber] = useState(1);
    const [stepsTotal] = useState(4);

    const handleGoToNextStep = useCallback(() => {
        const nextStepsNumber = stepsNumber + 1;
        setStepsNumber(nextStepsNumber);
    }, [stepsNumber]);

    const handleGoToPreviousStep = useCallback(() => {
        const nextStepsNumber = stepsNumber - 1;
        setStepsNumber(nextStepsNumber);
    }, [stepsNumber]);

    const nextComponentProps = useMemo(
        () => ({
            steps: { stepsNumber, stepsTotal },
            handleGoToNextStep,
            handleGoToPreviousStep,
        }),
        [stepsNumber,stepsTotal, handleGoToNextStep, handleGoToPreviousStep]
    );

    const [nextTemplateComponent, setNextTemplateComponent] = useState(
        <Register {...nextComponentProps} />
    );

    useEffect(() => {
        const Component = templateComponents[stepsNumber - 1];
        setNextTemplateComponent(<Component {...nextComponentProps} />);
    }, [stepsNumber, nextComponentProps]);

    return <main>{nextTemplateComponent}</main>;
}