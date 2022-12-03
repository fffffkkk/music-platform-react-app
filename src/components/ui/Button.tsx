import React, {FC} from 'react';

import {buttonType} from "@/types/button";

interface ButtonProps {
	type: buttonType;
	children: React.ReactNode;
};
const Button: FC<ButtonProps> = React.memo(({children, type}) => {
	return (
		<button type={type} className="btn btn-secondary">{children}</button>
	);
});

export default Button;
