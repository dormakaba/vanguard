import { FC } from 'react';
import { IDefaultComponentProps, IClicker } from '../../../utils';
import { Action, File } from './filelistcontrol';
export interface Props extends IDefaultComponentProps, IClicker<Action> {
    files?: Array<File>;
}
export declare const FileList: FC<Props>;
