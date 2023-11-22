import React, { useEffect, useRef } from 'react';
import { FC, useMemo } from 'react';
import { Page as PageType } from '../../types/funnel';
import { useBlockRenderer } from '../../hooks/useRenderBlocks';

interface PageProps {
    page: PageType;
    bgColor: string;
}
const Page: FC<PageProps> = React.memo(({ page, bgColor }) => {

    const { renderBlock } = useBlockRenderer();
    const pageContainerRef = useRef<HTMLDivElement | null>(null);

    const renderPage = useMemo(() => {
        return () => {
            return page.blocks.map(renderBlock);
        };
    }, [page, renderBlock]);

    useEffect(() => {
        if (pageContainerRef.current) {
            pageContainerRef.current.scrollTop = 0;
        }
    }, [page]);

    const pageStyle = {
        backgroundColor: bgColor
    };

    return (
        <div className="w-415 h-640 flex items-center justify-center bg-white rounded-3xl drop-shadow-md">
            <div className="w-375 h-600 max-w-600 flex flex-col justify-center rounded-xl" style={pageStyle}>
                <div ref={pageContainerRef} className='overflow-y-auto flex flex-col p-4'>
                    {renderPage()}
                </div>
            </div>
        </div>
    )
});
export default Page;