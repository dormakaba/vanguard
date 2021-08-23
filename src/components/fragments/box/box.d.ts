import { FC } from 'react';
import { BoxLayoutProps } from '../div';
export interface Props extends BoxLayoutProps {
    /**
     * Missing
     */
    fullscreen?: boolean;
}
export declare const DefaultTestID = "vg-box";
export declare const Box: FC<Props>;
