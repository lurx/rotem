import { Container } from '@sc/shared-components';
import { PropsWithChildren } from 'react';
import { TChildren } from '../../../shared/types/messenger.types';

export const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({ children }: ILayoutProps) => {
	return <Container as="main">{children}</Container>;
};

interface ILayoutProps {
	children: TChildren;
}
