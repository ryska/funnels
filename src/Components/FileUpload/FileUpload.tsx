import React, { FC, FormEvent, useRef } from 'react';

export interface FileUploadProps {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
}
export const FileUpload: FC<FileUploadProps> = ({ onChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fileInputRef.current?.click();
    };

    return (
        <form>
            <button className='inline-block bg-rose-400 text-white font-medium rounded-md px-4 py-2' onClick={handleClick}>Upload file</button>
            <input id="file" type="file" ref={fileInputRef} onChange={onChange} className="sr-only" />
        </form>
    );
};

export default FileUpload;
