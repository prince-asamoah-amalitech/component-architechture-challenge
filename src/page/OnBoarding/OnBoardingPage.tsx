import { useContext, useEffect, useState } from 'react';
import './OnBoardingPage.scss';

import AddPhoto from '../../template/AddPhoto/AddPhoto';
import Recommendations from '../../template/Recommendations/Recommendations';
import Interest from '../../template/Interest/Interest';
import Complete from '../../template/Complete/Complete';
import Register from '../../template/Register/Register';
import { OnBoardingStateContext } from '../../context/OnBoardingContext';

const templateComponents = [
    Register,
    AddPhoto,
    Recommendations,
    Interest,
    Complete,
];

export default function OnBoardingPage() {
    const state = useContext(OnBoardingStateContext);

    const [nextTemplateComponent, setNextTemplateComponent] = useState(
        <Register />
    );

    useEffect(() => {
        if (state?.currentStep) {
            const Component = templateComponents[state.currentStep - 1];
            setNextTemplateComponent(<Component />);
        }
    }, [state?.currentStep, state]);

    return <main>{nextTemplateComponent}</main>;
}
