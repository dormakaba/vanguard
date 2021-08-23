import { ScrollActionTypes } from './types';
export declare const reducer: (state: {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}, action: ScrollActionTypes) => {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
};
