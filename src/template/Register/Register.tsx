import './Register.scss';
import { ReactComponent as GoogleLogo } from '../../assets/icons/google-logo.svg';
import registerBackgroundImage from '../../assets/images/register.png';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';
import Navigation from '../../components/Navigation/Navigation';

interface RegisterProps {
    handleGoToNextStep: () => void;
    handleGoToPreviousStep: () => void;
    steps: {
        stepsNumber: number;
        stepsTotal: number;
    };
}

export default function Register({
    steps,
    handleGoToNextStep,
    handleGoToPreviousStep,
}: RegisterProps) {
    return (
        <>
            <PageLeftSection imageSrc={registerBackgroundImage} />
            <PageRightSection>
                <Navigation
                    {...{ steps, handleGoToPreviousStep, handleGoToNextStep }}
                />
                <div className="register">
                    <form>
                        <h1>Create Account</h1>
                        <Input
                            name="fullName"
                            id="fullName"
                            placeholder="John Doe"
                            labelText="Name"
                        />
                        <Input
                            name="email"
                            id="email"
                            placeholder="johndoe@gmail.com "
                            labelText="E-mail"
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***********"
                            labelText="Password"
                        />
                        <div className="buttons">
                            <Button
                                primary
                                type="button"
                                onClick={handleGoToNextStep}
                            >
                                Submit
                            </Button>
                            <Button>
                                <GoogleLogo />
                                Sign up with Google
                            </Button>
                        </div>
                        <footer>
                            <p>
                                Already have an account? <a href="#">Log In</a>
                            </p>
                        </footer>
                    </form>
                </div>
            </PageRightSection>
        </>
    );
}
