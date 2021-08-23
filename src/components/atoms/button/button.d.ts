import { FC } from 'react';
import { IDefaultComponentProps, IChildrener, ITyper, IDisabler, ILoader, IIconer, IClicker, IBlurer, IVarianter, IValuer } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChildrener, ITyper, IDisabler, ILoader, IIconer, IClicker<any>, IBlurer<any>, IVarianter, IValuer<any> {
    disabled?: boolean;
    isButton?: boolean;
    isLoading?: boolean;
    noPadding?: boolean;
    isBlocked?: boolean;
    isLink?: boolean;
    isSelected?: boolean;
    isReverse?: boolean;
    size?: 'tiny' | 'base' | 'large';
    iconType?: string;
    iconSize?: 'tn' | 'sm' | 'md' | 'lg';
    counter?: number;
    hasBackground?: boolean;
}
export declare const DefaultTestID = "vg-button";
export declare const Button: FC<Props>;
