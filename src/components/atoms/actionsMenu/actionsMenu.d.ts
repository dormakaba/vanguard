import React from 'react';
import { ActionItem } from './actionItem';
import { Position } from './types';
import { Variants } from '../..';
export interface IProps {
    className?: string;
    icon?: string;
    position?: Position;
    color?: Variants;
    disabled?: boolean;
}
interface ActionsMenuComposition {
    ActionItem: typeof ActionItem;
    Position: typeof Position;
}
export declare const ActionsMenu: React.FC<IProps> & ActionsMenuComposition;
export {};
