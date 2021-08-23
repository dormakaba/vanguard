import type { ReactNode } from 'react';
export declare type Alignment = 'left' | 'center' | 'right';
export declare type Variants = 'primary' | 'primaryBorder' | 'primarylight' | 'primarydark' | 'secondary' | 'secondaryBorder' | 'light' | 'lightBorder' | 'tertiary' | 'tertiaryBorder' | 'transparent' | 'white' | 'gray';
export declare type Size = 'sm' | 'md' | 'lg' | 'base' | 'tn' | 'tiny';
export declare type optSize = 'tiny' | 'base' | 'large';
export declare type posDef = 'topRight' | 'topLeft' | 'topCenter' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
export declare type Weight = string;
export declare enum SizeNumeric {
    None = 0,
    SM = 4,
    MD = 6,
    LG = 8
}
export declare type MarginPaddingSizes = Size | 'none';
export interface IIder {
    id?: string;
}
export interface IClassNamer {
    className?: string;
}
export interface IClicker<T = void> {
    onClick?: (arg: T) => void;
}
export interface IBlurer<T = void> {
    onBlur?: (arg: T) => void;
}
export interface IDisabler {
    disabled?: boolean;
}
export interface ILoader {
    loading?: boolean;
}
export interface IChildrener {
    children?: ReactNode;
}
export interface IVarianter {
    variant?: Variants;
}
export interface ILabeler {
    label?: any;
}
export interface ISizer {
    size?: Size;
}
export interface ITyper {
    type?: string;
}
export interface IIconer {
    iconOnly?: boolean;
    icon?: any;
}
export interface IBorderer {
    hasBorder?: boolean;
}
export interface IColorer {
    color?: Variants | string;
}
export interface IBackgrounder {
    background?: Variants | string;
}
export interface ILeadinger {
    leading?: string;
}
export interface IBolder {
    bold?: boolean;
}
export interface IMarginer {
    marginX?: MarginPaddingSizes;
    marginY?: MarginPaddingSizes;
}
export interface IPaddinger {
    paddingX?: MarginPaddingSizes;
    paddingY?: MarginPaddingSizes;
}
export interface ITextAligner {
    textalign?: Alignment;
}
export interface IShadower {
    hasShadow?: boolean;
}
export interface IIntenter {
    intent?: string;
}
export interface IImager {
    alt?: string;
    src?: string;
}
export interface ISrcSeter {
    srcset?: {
        [key: string]: string;
    };
}
export interface IFluider {
    fluid?: boolean;
}
export interface IRatioer {
    ratio?: string;
}
export interface ILazier {
    lazy?: boolean;
}
export interface IController {
    hasControls?: boolean;
}
export interface IColumner {
    cols?: string | number;
}
export interface ITitler {
    title?: string;
    subtitle?: string;
}
export interface IIntroer {
    intro?: string;
}
export interface IGaper {
    gap?: string | number;
    colgap?: string | number;
}
export interface ITester {
    testid?: string;
}
export interface INamer {
    name?: string;
}
export interface IValuer<T = string> {
    value?: T;
}
export interface IChanger<T = void> {
    onChange?: (arg: T) => void;
}
export interface IChecker {
    checked?: boolean;
}
export interface IFullWidther {
    fullWidth?: boolean;
}
export interface IWeighter {
    weight?: Weight;
}
export interface ICloser<T = void> {
    onClose?: (arg: T) => void;
}
export interface IDefaultComponentProps extends IIder, IClassNamer, ITester {
}
export interface IBoxModel extends IMarginer, IPaddinger, IBorderer {
}
