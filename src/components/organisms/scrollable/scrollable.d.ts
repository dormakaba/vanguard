import React from 'react';
import { IDefaultComponentProps, IChildrener, IChanger } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, IChanger<Array<number>> {
    singleItem?: boolean;
}
export interface IScrollable {
    scrollIntoView: (idx: number) => void;
}
export declare const DefaultTestID = "vg-scrollable";
export declare const Scrollable: React.ForwardRefExoticComponent<Props & React.RefAttributes<IScrollable>>;
