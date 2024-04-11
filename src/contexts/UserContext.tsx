import { useState, createContext, ReactNode } from 'react';

interface UserContextType {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  login: (newNome: string) => void; // Adicionando a função login à interface
}

export const UserContext = createContext<UserContextType>({
  nome: '',
  setNome: () => {},
  login: () => {} // Definindo um placeholder para a função login
});

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [nome, setNome] = useState('');

  const login = (newNome: string) => {
    setNome(newNome);
  };

  return (
    <UserContext.Provider value={{ nome, setNome, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;