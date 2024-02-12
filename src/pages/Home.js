import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import Users from '../components/Users';


const Home = () => {
  const { users } = useContext(UserContext);
  // console.log(users);

  const filteredUsers = Object.values(users).filter((item) => {
    return (
      item.gender === "male" || item.gender === "female"
    );
  });
  //  console.log(filteredUsers);
  
  return (
  <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {filteredUsers.map((users) => {
            return <Users Users={users} key={users.id} />
           
          })}
        </div>
      </div>

    </section>
 
    {/* <div>Homepage</div> */}
  </div>
  );
};

export default Home;
