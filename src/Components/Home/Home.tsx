import FileUpload from '../FileUpload/FileUpload';
import useFileUpload from '../../hooks/useFileUpload';
import Template from '../Template/Template';
import Toolbar from '../Toolbar/Toolbar';
import { useContext } from 'react';
import FunnelContext, { FunnelContextType } from '../../context/Context';

const Home = () => {
    const { handleFileChange } = useFileUpload();
    const { funnel } = useContext(FunnelContext) as FunnelContextType;

    return (
        <>
            <Toolbar />
            <div className="flex items-center justify-center h-[calc(100vh-80px)] mb-4 font-nunito">
                {!funnel ?
                    <div className="container flex flex-col items-center justify-center mx-auto w-4/5 h-4/5 bg-violet-100 rounded-3xl p-4">
                        <h1 className='text-2xl mb-2'>Welcome! 👋</h1>
                        <p className="font-sans text-center mb-4">
                            Please upload your funnel file to test it
                        </p>
                        <FileUpload onChange={handleFileChange} />
                    </div> : <Template data={funnel} />}
            </div>
        </>

    )
}

export default Home;
