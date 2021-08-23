import { FC } from 'react';
import { IDefaultComponentProps } from '../../../utils';
export interface Props extends IDefaultComponentProps {
    id?: any;
    size?: 'tiny' | 'base' | 'large';
    position?: 'topRight' | 'topLeft' | 'topCenter' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    variant?: any;
    caption?: string;
    defaultIsOpen?: boolean;
}
export declare const DefaultTestID = "vg-menu";
export declare const Navigation: FC<Props>;
