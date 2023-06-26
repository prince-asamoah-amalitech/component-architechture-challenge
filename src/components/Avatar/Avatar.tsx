import './Avatar.scss';
import { ReactComponent as NoPhoto } from '../../assets/icons/no-photo.svg';
import avatarPhoto from '../../assets/images/profile-photo.png';

interface AvatarProps {
    imageSrc?: string;
}

export default function Avatar({ imageSrc = avatarPhoto}: AvatarProps) {
    return (
        <div className="avatar">
            {imageSrc ? (
                <img src={imageSrc} />
            ) : (
                <NoPhoto fill="white" />
            )}
        </div>
    );
}