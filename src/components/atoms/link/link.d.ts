import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { ITester } from '../../../utils';
export interface Props extends ITester, DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
}
export declare const DefaultTestID = "vg-link";
export declare const Link: FC<Props>;
