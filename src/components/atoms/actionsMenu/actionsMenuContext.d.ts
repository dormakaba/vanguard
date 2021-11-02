/// <reference types="react" />
interface IActionsMenuContext {
    isShown: boolean;
    setIsShown: (bool: boolean) => void;
}
export declare const ActionsMenuContext: import("react").Context<IActionsMenuContext>;
export declare const useActionsMenu: () => IActionsMenuContext;
export {};
