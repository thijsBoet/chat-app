import React, { useRef } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
	const { signup } = useAuth();
	const usernameRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (signup.isLoading) return;

		const username = usernameRef.current?.value;
		const name = nameRef.current?.value;
		const imageUrl = imageRef.current?.value;

		if (username === null || username === '' || name === null || name === '') {
			return;
		}

		signup.mutate({ id: username, name, image: imageUrl });
	}

	return (
		<>
			<h1 className='text-3xl font-bold mb-8 text-center'>Signup</h1>
			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-[auto,1fr] gap-x-4 gap-y-5 items-center justify-items-end'
			>
				<label htmlFor='userName'>Username *</label>
				<Input id='userName' pattern='\S*' required ref={usernameRef} />
				<label htmlFor='name'>Name *</label>
				<Input id='name' required ref={nameRef} />
				<label htmlFor='imageUrl'>imageUrl</label>
				<Input id='imageUrl' type='url' ref={imageRef} />
				<Button
					disabled={signup.isLoading}
					type='submit'
					className='col-span-full'
				>
					{signup.isLoading ? 'Loading...' : 'Signup'}
				</Button>
			</form>
		</>
	);
};

export default Signup;
