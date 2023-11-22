import React, { FC } from 'react';

interface ListItemProps {
    title: string;
    description: string;
    src: string;
}

const ListItem: FC<ListItemProps> = ({ title, description, src }) => {
    return (
        <div className='flex flex-col items-center mb-2'>
            <div className='w-16'>
                <img className='w-fit' src={src} />
            </div>
            <div className='flex flex-col ml-2 text-center'>
                <span className='font-medium'>{title}</span>
                <span>{description}</span>
            </div>
        </div>
    )
}

export default ListItem;
