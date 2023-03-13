import { ReactNode } from 'react';
type FullScreenCardProps = {
    children: ReactNode
}

const FullScreenCard = ({ children }: FullScreenCardProps) => {
	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='max-w-md w-full'>{children}</div>
		</div>
	);
};

FullScreenCard.Body = function ({ children }: FullScreenCardProps) {
    return (
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            {children}
        </div>
    );
};
FullScreenCard.BelowCard = function ({ children }: FullScreenCardProps) {
    return (
        <div className='m-2 justify-center flex gap-3'>
            {children}
        </div>
    );
};

export default FullScreenCard