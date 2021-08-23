import { FC } from 'react';
import { IDefaultComponentProps, IChanger, IChecker, ILabeler, INamer, ISizer, IVarianter, IValuer } from '../../../utils';
export interface Props extends IDefaultComponentProps, IChanger<boolean>, IChecker, ILabeler, INamer, ISizer, IVarianter, IValuer {
}
export declare const DefaultTestID = "vg-radio";
export declare const Radio: FC<Props>;
