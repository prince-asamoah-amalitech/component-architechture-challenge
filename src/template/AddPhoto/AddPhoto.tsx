import { useState } from 'react';

import './AddPhoto.scss';
import addPhotoBackgroundImage from '../../assets/images/add-photo.png';
import Avatar from '../../components/Avatar/Avatar';
import PageLeftSection from '../../layout/PageLeftSection';
import PageRightSection from '../../layout/PageRightSection';
import Navigation from '../../components/Navigation/Navigation';
import Button from '../../components/Button/Button';

interface AddPhotoProps {
    steps: {
        stepsNumber: number;
        stepsTotal: number;
    };
    handleGoToNextStep: () => void;
    handleGoToPreviousStep: () => void;
}

export default function AddPhoto({
    steps,
    handleGoToNextStep,
    handleGoToPreviousStep,
}: AddPhotoProps) {
    const[photo] = useState<File | null>(null);

    return (
        <>
            <PageLeftSection imageSrc={addPhotoBackgroundImage} />
            <PageRightSection>
                <Navigation {...{ steps, handleGoToPreviousStep }} />
                <div className="add-photo">
                    <form>
                        <header>
                            <h1>Add Photo</h1>
                            <p>
                                Add a photo so other memebers know who you are
                            </p>
                        </header>
                        <Avatar />
                        <div className="buttons">
                           {photo &&  <Button primary onClick={handleGoToNextStep}>Continue</Button>}
                            <label className="button primary">
                                <input type="file" id="photo" name="photo" />
                                Upload a photo
                            </label>
                            <a onClick={handleGoToNextStep}>Skip</a>
                        </div>
                    </form>
                </div>
            </PageRightSection>
        </>
    );
}
