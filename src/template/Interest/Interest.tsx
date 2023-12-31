import './Interest.scss';
import interestBackgroundImage from '../../assets/images/interest.png';
import { useContext } from 'react';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';
import { OnBoardingDispatchContext } from '../../context/OnBoardingContext';

interface OptionsItemProps {
    id: string;
    title: string;
    color: string;
}

function OptionsItem({ title, color, id }: OptionsItemProps) {
    return (
        <li>
            <Card title={title} className={color}>
                <label>
                    <input type="checkbox" id={id} name={id} value={id} />
                    <span></span>
                </label>
            </Card>
        </li>
    );
}

export default function Interest() {
    const dispatch = useContext(OnBoardingDispatchContext);

    const handleGoToNextStep = () => dispatch?.({type: "next_step"});
    
    return (
        <>
            <PageLeftSection imageSrc={interestBackgroundImage} />
            <PageRightSection>
                <Navigation />
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
                            <OptionsItem
                                id="gaming"
                                title="Gaming"
                                color="magenta"
                            />
                            <OptionsItem
                                id="fashion"
                                title="Fashion"
                                color="green"
                            />
                            <OptionsItem
                                id="music"
                                title="Music"
                                color="redish-orange"
                            />
                            <OptionsItem
                                id="reading"
                                title="Reading"
                                color="pure-blue-1"
                            />
                        </ul>
                        <Button
                            primary
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
