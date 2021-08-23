import React from 'react';
import { IDefaultComponentProps, ITyper } from '../../../utils';
export interface TextInputProps extends IDefaultComponentProps, ITyper {
    className?: string;
    noPadding?: boolean;
    multiline?: boolean;
    fullWidth?: boolean;
    size?: number;
    label?: string;
    name?: string;
    rows?: number;
    value?: string;
    align?: any;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
