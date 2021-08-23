import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITyper, IBackgrounder, IColorer, IMarginer, IPaddinger, ITextAligner, IShadower } from '../../../utils';
export interface BoxLayoutProps extends IDefaultComponentProps, IChildrener, ITyper, IBackgrounder, IMarginer, IPaddinger, IColorer, ITextAligner, IShadower {
    [key: string]: any;
}
export declare const DefaultTestID = "vg-boxlayout";
export declare const BoxLayout: FC<BoxLayoutProps>;
