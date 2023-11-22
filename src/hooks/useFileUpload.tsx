import { useContext } from 'react';
import { Funnel } from '../types/funnel';
import { FunnelContextType } from '../context/Context';
import FunnelContext from '../context/Context';

const useFileUpload = () => {
    const context = useContext(FunnelContext);
    const { updateFunnel } = context as FunnelContextType;

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement & { files: FileList };
        const fileReader = new FileReader();
        const selectedFile = target.files?.[0];

        if (selectedFile) {
            fileReader.readAsText(selectedFile, 'UTF-8');
            fileReader.onload = (e) => {
                e.target?.result && updateFunnel(JSON.parse(e.target.result as string) as Funnel);
            };
        }
    };

    const resetFile = () => {
        updateFunnel(null)
    };

    return {
        resetFile,
        handleFileChange,
    };
};

export default useFileUpload;
