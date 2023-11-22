
import { FC, ReactNode } from 'react';

interface ButtonProps {
    handleClick?: () => void;
    children?: ReactNode;
    disabled?: boolean;
}

const CommonButton: FC<ButtonProps> = ({ handleClick, children, disabled }) => {
    const dontAskJustPlay = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

    return (
        <div className='flex justify-center'>
            <button disabled={disabled} type="button" className="bg-rose-400 text-white px-3 py-2 m-2 rounded disabled:bg-rose-200" onClick={handleClick || dontAskJustPlay}>
                {children}
            </button>
        </div>
    )
}

export default CommonButton;
