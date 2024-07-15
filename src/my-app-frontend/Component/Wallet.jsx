import React from 'react';

const Package = ({ user }) => {
  return (
    <div className="w-full bg-yellow-400 py-16 px-4 text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="font-bold text-lg">DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Act.Num: {user.accountNumber}</h1>
          <p>{user.bankCode}/{user.accountName}/{user.currency}</p>
          <div className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-yellow-400">
            <p className="p-2">100,000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
