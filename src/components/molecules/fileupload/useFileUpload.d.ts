import { RefObject } from 'react';
import { File as VGFile } from './filelistcontrol';
export declare type UploadHandler = (files: Array<VGFile>) => void;
export declare type UseFileUploadType = (headers: Headers | string[][] | Record<string, string>, method: string, target: string, uploadHandler?: UploadHandler, propertyName?: string) => {
    selectorRef: RefObject<HTMLInputElement>;
};
export declare const useFileUpload: UseFileUploadType;
