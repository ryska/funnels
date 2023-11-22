import { FC } from 'react';

interface ImageProps {
    src: string;
}
const Image: FC<ImageProps> = ({ src }) => {
    return (
        <div className='mb-4'>
            <img src={src} />
        </div>
    )
}

export default Image;
