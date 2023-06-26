import './Recommendations.scss';
import recommendationsBackgroundImage from '../../assets/images/recommendations.png';

import Button from '../../components/Button/Button';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';
import Navigation from '../../components/Navigation/Navigation';

interface RecommendationsProps {
    steps: {
        stepsNumber: number;
        stepsTotal: number;
    };
    handleGoToPreviousStep: () => void;
    handleGoToNextStep: () => void;
}

export default function Recommendations({
    steps,
    handleGoToPreviousStep,
    handleGoToNextStep,
}: RecommendationsProps) {
    return (
        <>
            <PageLeftSection imageSrc={recommendationsBackgroundImage} />
            <PageRightSection>
                <Navigation {...{ steps, handleGoToPreviousStep }} />
                <div className="recommendations">
                    <form>
                        <header>
                            <h1>Hey there! What brings you here?</h1>
                            <p>This will help us make great recommendations.</p>
                        </header>
                        <ul className="options" aria-label="recommendations">
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="socialInteraction"
                                        value="socialInteraction"
                                    />
                                    <span>Social Interaction</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="checkbox"
                                        id="personalDevelopment"
                                        value="personalDevelopment"
                                    />
                                    <span>Personal development</span>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="entertainmentAndFun">
                                    <input
                                        type="checkbox"
                                        id="entertainmentAndFun"
                                        value="entertainmentAndFun"
                                    />
                                    <span>Entertainment and Fun</span>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="rewardsAndRecognition">
                                    <input
                                        type="checkbox"
                                        id="rewardsAndRecognition"
                                        value="rewardsAndRecognition"
                                    />
                                    <span>Rewards and recognition</span>
                                </label>
                            </li>
                        </ul>
                        <Button
                            className="primary"
                            type="button"
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
