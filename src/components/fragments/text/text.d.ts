import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITyper, IBackgrounder, IColorer, IMarginer, IPaddinger, ILeadinger, IBolder, ITextAligner, Size } from '../../../utils';
export interface TextLayoutProps extends IDefaultComponentProps, IChildrener, ITyper, IColorer, IBackgrounder, IMarginer, IPaddinger, ILeadinger, IBolder, ITextAligner {
    /**
     * Missing ...
     */
    textsize?: Size | 'xl' | 'base' | 'tn';
    describe?: boolean;
    [key: string]: any;
}
export declare const DefaultTestID = "vg-textlayout";
export declare const TextLayout: FC<TextLayoutProps>;
