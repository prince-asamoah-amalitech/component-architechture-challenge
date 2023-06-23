import './Header.scss';
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';

export default function Header() {
    return (
        <header>
            <button type="button" title="Go Back">
                <LeftArrow />
                <span>Back</span>
            </button>
            <div className='steps'>
                <strong>Step 1 {" "}</strong>
                <span> of 4</span>
            </div>
            <button type="button" title="Exit">
                Exit
            </button>
        </header>
    );   
}
