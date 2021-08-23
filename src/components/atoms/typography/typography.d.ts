import { FC } from 'react';
import { TextLayoutProps } from '../../fragments/text';
import { ILeadinger } from '../../../utils';
export interface Props extends TextLayoutProps, ILeadinger {
}
export declare const DefaultTestID = "vg-typography";
export declare const Typography: FC<Props>;
