import { ReactComponentElement } from 'react';
import { IDefaultComponentProps, ILoader } from '../../../../utils';
import { Props as LinkProps } from '../../../atoms/link';
export interface Props extends IDefaultComponentProps, ILoader {
    showAvailability?: boolean;
    showResources?: boolean;
    showTechnicalDetails?: boolean;
    productTechnicalDetails?: any;
    productResources?: any;
    productAvailability?: any;
    technicalDetailsMapping?: any;
    t?: (key: string) => string;
    renderLink?: (props: LinkProps) => ReactComponentElement;
}
export declare const DefaultTestID = "vg-additonal-content";
export declare const AdditionalContent: ({ id, loading, showAvailability, showResources, showTechnicalDetails, productTechnicalDetails, productResources, productAvailability, testid, renderLink: RenderLink, technicalDetailsMapping, t, }: Props) => JSX.Element;
