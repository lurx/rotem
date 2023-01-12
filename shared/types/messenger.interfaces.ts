import { ElementType, HTMLAttributes } from 'react';
import { TChildren } from './messenger.types';

export interface IContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
	as?: ElementType;
	children: TChildren;
}
