import React, { createContext, useState , useEffect} from 'react';


export const UserContext = createContext();
const UserProvider = ({children}) =>{


const [users, setUsers] = useState({});
useEffect(() => {
  const fetchUsers = async ()=> {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    setUsers(data.users);
  };
  fetchUsers();
}, [])
// const UserContext = () => {
  return <UserContext.Provider value = {{users}}>
    {children}
    </UserContext.Provider>;
};
// }

export default UserProvider;
