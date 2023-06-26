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

interface OptionsItemProps {
    children: string;
    id: string;
}

function OptionsItem({ id, children }: OptionsItemProps) {
    return (
        <li>
            <label>
                <input type="checkbox" id={id} value={id} name={id} />
                <span>{children}</span>
            </label>
        </li>
    );
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
                            <OptionsItem id="socialInteraction">
                                Social Interaction
                            </OptionsItem>
                            <OptionsItem id="personalDevelopment">
                                Personal development
                            </OptionsItem>
                            <OptionsItem id="entertainmentAndFun">
                                Entertainment and Fun
                            </OptionsItem>
                            <OptionsItem id="rewardsAndRecognition">
                                Rewards and recognition
                            </OptionsItem>
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