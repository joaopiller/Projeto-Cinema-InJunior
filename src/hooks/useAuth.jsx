import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  async function login(credentials) {
    
    try {
        // Criação dos parâmetros de consulta para a URL
        const params = new URLSearchParams();

        if (credentials.username) {
          params.append('username', credentials.username);
        }else{
        params.append('username','')
      }

        if (credentials.email) {
            params.append('email', credentials.email);
        }else{
          params.append('email','')
        }

        params.append('senha', credentials.senha);

        console.log(params.toString())
        console.log(`http://localhost:3000/user/login?${params.toString()}`)
        

        const response = await fetch(`http://localhost:3000/user/login?${params.toString()}`, {
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Resposta de erro do servidor:', errorData);
            throw new Error("Erro ao fazer login: " + (errorData || "Erro desconhecido"));
        }

        const userData = await response.json();
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        // navigate("/");
        setAuth(true);
        
        
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
    
    
}
 

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    setAuth(false);
    navigate("/login");
  }

  const value = {
    user,
    login,
    logout,
    auth,
    setAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
