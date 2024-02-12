import React, {useContext}  from 'react';
import { Link} from 'react-router-dom';
 
const Users = ( {Users} ) => {
  console.log(Users);
  
  const { id , image, firstName, lastName, email, address} = Users;
  return (
  <div>
    <div className='border border-[#080808] h-[300]px mb-4 relative overflow-hidden group transition'>
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[200px] mx-auto flex justify-center items-center' >
      <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image}  alt='/'/>
      
      </div>
    </div>

      <div>
        <div>
        <Link to= {`/Users/${id}`}>
          <div className='font-semibold text-center mb-1 bg-green-600 rounded-md'>
    <button >Fullname: {firstName} {lastName}</button>
    </div>
    </Link>
    <div  className='text-sm font-semibold bold text-center capitalize text-black-900 mb-2'>Email: {email}</div>
    <div>
    <p className='text-sm font-semibold text-center capitalize text-black-500 mb-2'>Address:  {Users.address.city}</p>
</div>

    <div className='text-sm font-semibold text-center capitalize text-black-500 mb-2'>Company: {Users.company.name}</div>
    </div>
    </div>
  </div>
  </div>
  );
};

export default Users;

