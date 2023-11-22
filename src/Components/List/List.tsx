import React, { FC, useMemo } from 'react';
import ListItem from './ListItem/ListItem';

interface ListProps {
    items: {
        title: string;
        description: string;
        src: string;
    }[];
}

const List: FC<ListProps> = ({ items }) => {

    const renderItems = useMemo(() => items.map((item, index) => {
        return (
            <div key={index}>
                <ListItem title={item.title} description={item.description} src={item.src} />
            </div>
        )
    }
    ), [])
    return <div className='mb-4'>{renderItems}</div>;
}

export default List;
