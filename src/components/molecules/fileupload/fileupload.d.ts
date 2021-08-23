import { FC } from 'react';
import { IDefaultComponentProps } from '../../../utils';
import { Action, File } from './filelistcontrol';
export interface Props extends IDefaultComponentProps {
    headers?: Headers | string[][] | Record<string, string>;
    method?: string;
    target?: string;
    label?: string;
    files?: Array<File>;
    onFilesChange?: (files: Array<File>) => void;
    onActionClick?: (action: Action) => void;
}
export declare const DefaultTestID = "vg-file-upload";
export declare const FileUpload: FC<Props>;
