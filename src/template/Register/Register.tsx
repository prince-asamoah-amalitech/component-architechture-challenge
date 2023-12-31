import './Register.scss';
import { ReactComponent as GoogleLogo } from '../../assets/icons/google-logo.svg';
import registerBackgroundImage from '../../assets/images/register.png';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';
import Navigation from '../../components/Navigation/Navigation';
import { ChangeEvent, useContext } from 'react';
import {
    OnBoardingDispatchContext,
} from '../../context/OnBoardingContext';


export default function Register() {
    const dispatch = useContext(OnBoardingDispatchContext);

    function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = new FormData(e.target);
        const fullName = data.get('fullName');
        const email = data.get('email');
        const password = data.get('password');

        if (fullName && email && password) {
            dispatch?.({ type: 'next_step' });
        }
    }

    return (
        <>
            <PageLeftSection imageSrc={registerBackgroundImage} />
            <PageRightSection>
                <Navigation />
                <div className="register">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <Input
                            name="fullName"
                            id="fullName"
                            placeholder="John Doe"
                            labelText="Name"
                            required
                        />
                        <Input
                            name="email"
                            type="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            labelText="E-mail"
                            required
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***********"
                            labelText="Password"
                            required
                            minLength={8}
                        />
                        <div className="buttons">
                            <Button primary type="submit">
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
