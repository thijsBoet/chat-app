import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { createContext, useContext, ReactNode } from 'react';

type AuthContext = {
	signup: UseMutationResult<AxiosResponse, unknown, User>;
};

type AuthProviderProps = {
	children: ReactNode;
};
type User = {
	id: string;
	name: string;
	image?: string;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
	return useContext(Context) as AuthContext;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const signup = useMutation({
		mutationFn: (user: User) => {
			return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user );
		},
	});
	return <Context.Provider value={{ signup }}>{children}</Context.Provider>;
}
