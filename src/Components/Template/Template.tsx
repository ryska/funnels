import { FC, useEffect, useState } from 'react';
import { Funnel } from '../../types/funnel';
import Page from '../Page/Page';
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

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
                    <div className='container flex items-center'>
                        <div className="flex items-center justify-center w-full mt-4">
                            <button
                                className="bg-rose-400 text-white px-3 py-2 m-2 rounded"
                                onClick={() => setPageNumber(pageNumber - 1)}
                                disabled={pageNumber === 0}
                            >
                                <ArrowSmallLeftIcon className="h-6 w-6 mx-1 color-white" />
                            </button>
                            <div className='flex justify-center'>
                                <Page page={data.pages[pageNumber]} bgColor={data.bgColor} />
                            </div>
                            
                            <button
                                className="bg-rose-400 text-white  px-3 py-2 m-2 rounded"
                                onClick={() => setPageNumber(pageNumber + 1)}
                                disabled={pageNumber === data.pages.length - 1}
                            >
                                <ArrowSmallRightIcon className="h-6 w-6 mx-1 color-white" />
                            </button>
                        </div>

                    </div>
                </>
            )}
        </div>
    )
}

export default Template;
