/// <reference types="react" />
import { IDefaultComponentProps } from '../../../utils';
import { SelectSingle, SelectMultiple } from './select.types';
export interface Props extends IDefaultComponentProps, SelectMultiple {
}
export declare const AsyncSelect: ({ asyncOptions, debounce, ...props }: IDefaultComponentProps & (SelectSingle | SelectMultiple)) => JSX.Element;
