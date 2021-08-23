import { FormEventHandler } from 'react';
export default function useMenuCheckboxState(initialState: boolean | (() => boolean)): CheckboxState;
export interface CheckboxState {
    checked: boolean;
    onToggle(): void;
    props: {
        checked: boolean;
        onChange: FormEventHandler;
    };
}
