import './Interest.scss';
import interestBackgroundImage from '../../assets/images/interest.png';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';

interface InterestProps {
    steps: {
        stepsNumber: number;
        stepsTotal: number;
    };
    handleGoToNextStep: () => void;
    handleGoToPreviousStep: () => void;
}

export default function Interest({
    steps,
    handleGoToNextStep,
    handleGoToPreviousStep,
}: InterestProps) {
    return (
        <>
            <PageLeftSection imageSrc={interestBackgroundImage} />
            <PageRightSection>
                <Navigation {...{ steps, handleGoToPreviousStep }} />
                <div className="interest">
                    <form>
                        <header>
                            <h1>
                                Let's get started by <br />
                                picking some interests
                            </h1>
                            <p>
                                Alright, let's pick something we're interested{' '}
                                <br /> in and get started!
                            </p>
                        </header>
                        <ul className="options">
                            <li>
                                <Card title="Gaming" className='magenta'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="gaming"
                                            name="gaming"
                                            value="gaming"
                                        />
                                        <span></span>
                                    </label>
                                </Card>
                            </li>
                            <li>
                                <Card title="Fashion" className='green'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="fashion"
                                            name="fashion"
                                            value="fashion"
                                        />
                                        <span></span>
                                    </label>
                                </Card>
                            </li>
                            <li>
                                <Card title="Music" className='redish-orange'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="music"
                                            name="music"
                                            value="music"
                                        />
                                        <span></span>
                                    </label>
                                </Card>
                            </li>
                            <li>
                                <Card title="Reading" className='pure-blue-1'>
                                    <label>
                                        <input
                                            type="checkbox"
                                            id="reading"
                                            name="reading"
                                            value="reading"
                                        />
                                        <span></span>
                                    </label>
                                </Card>
                            </li>
                        </ul>
                        <Button
                            type="button"
                            className="primary"
                            onClick={handleGoToNextStep}
                        >
                            Continue
                        </Button>
                    </form>
                </div>
            </PageRightSection>
        </>
    );
}