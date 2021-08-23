import React from 'react';
import { TextLayoutProps } from '../../fragments/text';
import { ILeadinger } from '../../../utils';
export interface Props extends TextLayoutProps, ILeadinger {
}
export declare const DefaultTestID = "vg-heading";
export declare const Heading: React.FC<Props>;
