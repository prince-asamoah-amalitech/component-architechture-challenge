import Lottie from 'react-lottie-player';

import './Complete.scss';
import ConfettiAnimation from '../../assets/images/animated-confetti.json';
import completeBackgroundImage from '../../assets/images/complete.png';
import Button from '../../components/Button/Button';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';

export default function Complete() {
    return (
        <>
            <PageLeftSection imageSrc={completeBackgroundImage} />
            <PageRightSection>
                <div className="complete">
                    <header>
                        <h1>Woohoo!</h1>
                        <p>
                            Hey there! Your registration is complete, get
                            excited for the ultimate quiz experience of your
                            life. Let's do this!
                        </p>
                    </header>
                    <div className="confetti">
                        <Lottie
                            loop
                            play
                            animationData={ConfettiAnimation}
                            style={{ width: '522.426px', height: '281.329px' }}
                        />
                    </div>
                    <Button className="primary">Continue</Button>
                </div>
            </PageRightSection>
        </>
    );
}
