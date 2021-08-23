import { FC } from 'react';
import { IDefaultComponentProps, IChildrener } from '../../../utils';
export interface Item {
    title?: string;
    intro?: string;
    imageSrc?: string;
}
export interface Props extends IDefaultComponentProps, IChildrener {
    items?: Array<Item>;
}
export declare const DefaultTestID = "vg-article-teaser";
export declare const ArticleTeaser: FC<Props>;
