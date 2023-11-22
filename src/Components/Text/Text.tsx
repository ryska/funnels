import React, { FC } from 'react';

interface TextProps {
    text: string;
    color: string;
    align: 'left' | 'center' | 'right';
}

const Text: FC<TextProps> = ({ text, color, align }) => {

    const textStyle = {
        color,
        textAlign: align
    };

    return (
        <span className='font-medium mb-4 text-2xl' style={textStyle}>{text}</span>
    )
}

export default Text;
