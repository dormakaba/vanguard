import React from 'react';
interface Props {
    label: React.ReactNode;
    id?: string;
    toggleDropdown?: (state: boolean) => void;
}
export declare const SelectLabel: React.FC<Props>;
export {};
