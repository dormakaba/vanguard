import React from 'react';
import { SelectSingle, SelectMultiple } from './select.types';
export declare const DefaultTestID = "vg-select";
declare const Select: React.MemoExoticComponent<React.ForwardRefExoticComponent<(SelectSingle & React.RefAttributes<HTMLSelectElement>) | (SelectMultiple & React.RefAttributes<HTMLSelectElement>)>>;
export { Select };
