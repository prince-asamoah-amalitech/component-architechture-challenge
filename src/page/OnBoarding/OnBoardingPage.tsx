import './OnBoardingPage.scss';
import PageLeftSection from '../../template/PageLeftSection';
import PageRightSection from '../../template/PageRightSection';
import RegisterBackgroundImage from '../../assets/images/register.png';

export default function () {
    return (
        <main>
            <PageLeftSection imageSrc={RegisterBackgroundImage}/>
            <PageRightSection/>
        </main>
    );
}