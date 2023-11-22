import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image';
import Text from '../Text/Text';
import List from '../List/List';
import FileUpload from '../FileUpload/FileUpload';
import useFileUpload from '../../hooks/useFileUpload';
import { Funnel } from '../../types/funnel';
import Page from '../Page/Page';

interface TemplateProps {
    data: Funnel;
}

const Template: FC<TemplateProps> = ({ data }) => {

    useEffect(() => {
        console.log("data is changed!", data);
    }, [data]);  // <-- Correct placement of parentheses and dependency array

    const [pageNumber, setPageNumber] = useState<number>(0);

    return (
        <div className="container flex items-center justify-center h-screen w-screen font-nunito bg-violet-100">
            {data && data.pages.length > 0 && (
                <>
                    <div className='container flex flex-col'>
                        <div className="flex justify-between w-full mt-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setPageNumber(pageNumber - 1)}
                                disabled={pageNumber === 0}
                            >
                                Previous Page
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setPageNumber(pageNumber + 1)}
                                disabled={pageNumber === data.pages.length - 1}
                            >
                                Next Page
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <Page page={data.pages[pageNumber]} bgColor={data.bgColor} />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Template;
