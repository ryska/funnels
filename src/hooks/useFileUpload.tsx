import { useEffect, useState } from 'react';
import { Funnel } from '../types/funnel';

const useFileUpload = () => {
    const [file, setFile] = useState<File | undefined>();
    const [data, setData] = useState<Funnel>();

    // const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    //     const target = event.target as HTMLInputElement & { files: FileList };
    //     const fileReader = new FileReader();
    //     const selectedFile = target.files?.[0];

    //     if (selectedFile) {
    //         fileReader.readAsText(selectedFile, 'UTF-8');
    //         fileReader.onload = (e) => {
    //             e.target?.result && setFile(selectedFile);
    //             e.target?.result && setData(JSON.parse(e.target.result as string) as Funnel);
    //             console.log(e.target?.result)
    //         };
    //     }
    // };

    const handleFileChange = async (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement & { files: FileList };
        const fileReader = new FileReader();
        const selectedFile = target.files?.[0];
    
        if (selectedFile) {
            const fileContent = await readFileAsText(selectedFile);
            setFile(selectedFile);
            const jsonData = JSON.parse(fileContent) as Funnel;
            setData(jsonData);
            console.log(jsonData)
        }
    };
    
    const readFileAsText = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const result = e.target?.result as string;
                resolve(result);
            };
            fileReader.readAsText(file, 'UTF-8');
        });
    };

    return {
        file,
        data,
        handleFileChange,
    };
};

export default useFileUpload;
