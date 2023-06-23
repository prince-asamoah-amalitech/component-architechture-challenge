import './RegisterForm.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { ReactComponent as GoogleLogo } from '../../assets/icons/google-logo.svg';

export default function RegisterForm() {
    return (
        <div className="register-form">
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
                    <Button className="primary">Submit</Button>
                    <Button className="secondary">
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
    );
}
