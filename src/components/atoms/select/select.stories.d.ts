import { FC } from 'react';
import { SelectSingle } from '.';
declare type StoryProps = {
    options?: any;
};
export declare const AsyncSelectStory: FC<StoryProps>;
export declare const SingleSelectStory: FC<StoryProps>;
declare const meta: import("@storybook/react").Meta<import("@storybook/addons").Args>;
export default meta;
export declare const Mutli: import("@storybook/react").Story<SelectSingle>, Search: import("@storybook/react").Story<SelectSingle>, Tags: import("@storybook/react").Story<SelectSingle>, Custom: import("@storybook/react").Story<SelectSingle>;
