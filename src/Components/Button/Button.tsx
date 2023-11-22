import { FC } from 'react';

interface ButtonProps {
    text: string;
    color: string;
    bgColor: string;
}

const Button: FC<ButtonProps> = ({ text, color, bgColor }) => {

    const buttonStyle = {
        color,
        backgroundColor: bgColor
    };

    const handleClick = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

    return (
        <div className='mb-4 flex justify-center'>
            <button style={buttonStyle} type="button" className="w-full max-w-400 rounded shadow font-semibold py-2 px-6" onClick={handleClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;
