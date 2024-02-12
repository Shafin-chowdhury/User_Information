
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const UsersDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const User = users && users.find((item) => {
    return item.id === parseInt(id);
  });

  if(!users){
    return 
    <section className='h-screen flex justify-center items-center'>Loading</section>
  }

  // console.log(id);
  const {firstName, lastName, image, email, address, company} = User;

  return <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row items-center'>

        <div className='flex  justify-center items-center mb-8 lg:mb-0 bg-green-200'>
          <img className='max-w-[200px] lg:max-w-sm' src={image} alt='/'/>
        </div>
        
        
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[26px] font-medium mb-2  mx-auto'>Fullname : {firstName } {lastName}</h1>
          <div className='text-l text-gray-500 font-medium mb-6 '>
            Email : {email}
          </div>
          <p className='mb-8 font-semibold'>Address:  {address.city}</p>
          <p className='mb-8 font-semibold'>Company : {company.name}</p>
        </div>
      </div>
    </div>
  </section>;
};

export default UsersDetails;
















