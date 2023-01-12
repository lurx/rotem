import { IContainerProps } from '../../types';

export const Container = ({ as: Tag = 'div', children }: IContainerProps) => {
	return <Tag>{children}</Tag>;
};
