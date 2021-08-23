import { FC, JSXElementConstructor } from 'react';
import { IDefaultComponentProps, ICloser } from '../../../utils';
export interface Props extends IDefaultComponentProps, ICloser {
    closable?: boolean;
    title?: string;
    icon?: JSXElementConstructor<any>;
}
export declare const Header: FC<Props>;
