import './App.scss';
import OnBoardingPage from './page/OnBoarding/OnBoardingPage';
import OnBoardingContext from './context/OnBoardingContext';

export default function App() {

    return (
        <OnBoardingContext>
            <OnBoardingPage />
        </OnBoardingContext>
    );
}
