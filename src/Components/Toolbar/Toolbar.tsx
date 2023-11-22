import { useContext } from 'react';
import CommonButton from '../CommonButton/CommonButton';
import useFileUpload from '../../hooks/useFileUpload';
import FunnelContext, { FunnelContextType } from '../../context/Context';


const Toolbar = () => {
    const { resetFile } = useFileUpload();
    const context = useContext(FunnelContext);
    const { funnel } = context as FunnelContextType;

    return (
        <nav className='w-full p-4 flex justify-between items-center'>
            <div className='w-10'>
                <a href='https://www.perspective.co/' target='_blank'>
                    <img src='logo.png' alt="perspective logo" />
                </a>
            </div>
            {funnel && <CommonButton handleClick={resetFile}>
                Upload new file
            </CommonButton>}
        </nav>
    );
};

export default Toolbar;