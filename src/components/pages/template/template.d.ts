import { FC } from 'react';
import type { IDefaultComponentProps } from '../../../utils';
export interface Props extends IDefaultComponentProps {
}
export declare const DefaultTestID = "vg-template";
/**
 * @TODO:
 * Review the component.
 * The problem:
 * Section, columns should be generated/organized by the specific components
 * instead of copy-pasting the same markup.
 */
export declare const Template: FC<Props>;
