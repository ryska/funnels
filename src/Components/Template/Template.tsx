import { FC, useState } from 'react';
import { Funnel } from '../../types/funnel';
import Page from '../Page/Page';
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import CommonButton from '../CommonButton/CommonButton';

interface TemplateProps {
    data: Funnel;
}
const Template: FC<TemplateProps> = ({ data }) => {

    const [pageNumber, setPageNumber] = useState<number>(0);

    return (
        <div className="container flex items-center font-nunito">
            {data && data.pages.length > 0 && (
                <div className='container flex items-center bg-violet-100 p-4 rounded-3xl'>
                    <div className="flex items-center justify-center w-full mt-4">
                        <CommonButton
                            handleClick={() => setPageNumber(pageNumber - 1)}
                            disabled={pageNumber === 0}
                        >
                            <ArrowSmallLeftIcon className="h-6 w-6 mx-1 color-white" />
                        </CommonButton>

                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='mb-2 font-semibold'>{data.name}</h1>
                            <Page page={data.pages[pageNumber]} bgColor={data.bgColor} />
                        </div>

                        <CommonButton
                            handleClick={() => setPageNumber(pageNumber + 1)}
                            disabled={pageNumber === data.pages.length - 1}
                        >
                            <ArrowSmallRightIcon className="h-6 w-6 mx-1 color-white" />
                        </CommonButton>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Template;
