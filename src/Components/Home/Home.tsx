import FileUpload from '../FileUpload/FileUpload';
import useFileUpload from '../../hooks/useFileUpload';
import Template from '../Template/Template';

const Home = () => {
    const { data, handleFileChange } = useFileUpload();

    return (
        <div className="flex items-center justify-center h-screen font-nunito">
            {!data ? 
            <div className="container flex flex-col items-center justify-center mx-auto w-4/5 h-4/5 bg-violet-100 rounded-3xl">
                <h1>Welcome! </h1>
                <p className="font-sans text-center">
                    Please upload your funnel file to test
                </p>
                <FileUpload onChange={handleFileChange} />
            </div>: <Template data={data} />}
        </div>
    )
}

export default Home;
