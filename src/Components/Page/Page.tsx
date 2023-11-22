import { FC, useEffect, useMemo } from 'react';
import { Funnel, Page as PageType } from '../../types/funnel';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Text from '../Text/Text';
import List from '../List/List';
interface PageProps {
    page: PageType;
    bgColor: string;
}

const Page: FC<PageProps> = ({ page, bgColor }) => {

    const pageStyle = {
        backgroundColor: bgColor
    };

    const renderPage = useMemo(() => {
        return () => {
            return page.blocks.map(block => {
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
            })
        }
    }, [page]);


    return (
        <div className="w-415 h-640 flex items-center justify-center bg-white rounded-3xl drop-shadow-md">
            <div className="w-375 h-600 max-w-600 flex flex-col justify-center rounded-xl" style={pageStyle}>
                <div className='overflow-y-auto flex flex-col p-4'>
                    {renderPage()}
                </div>
            </div>
        </div>
    )
}
export default Page;