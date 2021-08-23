interface ScrolledToTopAction {
    type: 'scrolledToTop';
    value: boolean;
}
interface ScrolledToBottomAction {
    type: 'scrolledToBottom';
    value: boolean;
}
interface ScrollPositionAction {
    type: 'scrollPosition';
    value: number;
}
export declare type ScrollActionTypes = ScrolledToTopAction | ScrolledToBottomAction | ScrollPositionAction;
export {};
