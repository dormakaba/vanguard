import { ComponentClass, ComponentType } from 'react';
import type { BaseDecorators, Parameters } from '@storybook/addons';
import type { Meta, Story } from '@storybook/react';
import type { IArgsUpdater } from './constants';
export interface IStoryArgs {
    [key: string]: any;
}
export interface IGenerateStoryParameters<T> {
    title: string;
    component: ComponentType<T> | ComponentClass<T>;
    parameters?: Parameters;
    decorators?: BaseDecorators<any>;
    argTypes?: IArgsUpdater[];
    stories?: {
        [storyName: string]: IStoryArgs;
    };
    defaultStoryArgs?: IStoryArgs;
    defaultStoryID?: string;
    renderer?: Story<T>;
}
export interface IGenerateStoryReturn<T> {
    meta: Meta;
    stories: {
        [storyName: string]: Story<T>;
    };
}
export declare const generateStory: <ComponentProps>(parameters: IGenerateStoryParameters<ComponentProps>) => IGenerateStoryReturn<ComponentProps>;
