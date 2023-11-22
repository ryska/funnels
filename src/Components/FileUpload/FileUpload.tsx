import React, { ChangeEvent, FC, useRef } from 'react';

export interface FileUploadProps {
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const FileUpload: FC<FileUploadProps> = ({ onChange }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fileInputRef.current?.click();
      };
    return (
        <>
            <div>
                <form>
                    <button className='inline-block bg-rose-400 text-white font-medium rounded-md px-4 py-2 cursor-pointer' onClick={handleClick}>Add Image</button>
                    <input id="file" type="file" ref={fileInputRef} onChange={onChange} className="sr-only" />
                </form>
            </div>
        </>
    );
};

export default FileUpload;
