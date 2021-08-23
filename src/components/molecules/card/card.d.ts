import { FC } from 'react';
import { BoxProps } from '../../fragments/box';
import { IDefaultComponentProps, IChildrener, ITitler, IIntroer, ITyper, IBackgrounder, IColorer, IController, IMarginer, IPaddinger } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, ITitler, IIntroer, ITyper, IBackgrounder, IColorer, IController, IMarginer, IPaddinger, BoxProps {
    imageSrc?: string;
}
export declare const DefaultTestID = "vg-card";
export declare const Card: FC<Props>;
