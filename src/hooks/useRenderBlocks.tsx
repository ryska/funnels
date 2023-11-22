import { useMemo } from 'react';
import { Block } from '../types/funnel';
import Text from '../Components/Text/Text';
import Image from '../Components/Image/Image';
import Button from '../Components/Button/Button';
import List from '../Components/List/List';

export const useBlockRenderer = () => {
    const renderBlock = useMemo(() => {
        return (block: Block) => {
            switch (block.type) {
                case 'text':
                    return <Text key={block.id} text={block.text} color={block.color} align={block.align} />;
                case 'image':
                    return <Image key={block.id} src={block.src} />;
                case 'list':
                    return <List key={block.id} items={block.items} />;
                case 'button':
                    return (
                        <Button
                            key={block.id}
                            text={block.text}
                            color={block.color}
                            bgColor={block.bgColor}
                        />
                    );
                default:
                    return null;
            }
        }
    }, []);

    return { renderBlock };
};
