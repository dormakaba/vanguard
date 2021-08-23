import { FC } from 'react';
import { IDefaultComponentProps, IChildrener } from '../../../utils';
import { Props as HeaderProps } from './header';
export interface Props extends IDefaultComponentProps, IChildrener, Pick<HeaderProps, 'closable' | 'title' | 'onClose'> {
    replace?: boolean;
    className?: string;
    header?: string;
    footer?: string;
    scrollable?: boolean;
    draggable?: boolean;
    width?: string;
    isOpen?: boolean;
    onClose?: Function;
    closeButton?: string;
    closeButtonPosition?: string;
    portal?: boolean;
}
export declare const DefaultTestID = "vg-dialog";
export declare const Dialog: FC<Props>;
