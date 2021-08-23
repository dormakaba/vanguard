import { FC } from 'react';
import { IDefaultComponentProps, ILoader, IVarianter } from '../../../../utils';
import { Props as NavitemProps } from '../../../atoms/navitem';
import { Props as SubheaderProps } from '../../../molecules/subheader';
export interface Props extends IDefaultComponentProps, IVarianter, ILoader {
    nav?: {
        [key: string]: NavitemProps;
    };
    usrnav?: {
        [key: string]: NavitemProps;
    };
    subdata?: SubheaderProps;
    data?: any;
}
export declare const DefaultTestID = "vg-header";
export declare const Header: FC<Props>;
