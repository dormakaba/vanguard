import { FC } from 'react';
import { IDefaultComponentProps, IClicker, IVarianter } from '../../../utils';
export declare enum ActionType {
    Remove = 0
}
export interface Action {
    type: ActionType;
    file: File;
}
export declare enum EFileState {
    Pending = 0,
    Loading = 1,
    Finished = 2,
    Error = 3
}
export interface File {
    id: string | number;
    name: string;
    state: EFileState;
    fileReference?: string;
    value?: any;
}
export interface Props extends IDefaultComponentProps, IClicker<Action>, IVarianter {
    file: File;
}
export declare const FileListControl: FC<Props>;
