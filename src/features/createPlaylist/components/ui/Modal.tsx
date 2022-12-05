import React, { FC } from 'react';

interface ModalProps {
	children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default Modal;
