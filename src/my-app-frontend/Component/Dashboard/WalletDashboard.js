import React from 'react';

function WalletDashboard() {
  return (
    <div className="bg-gray-200">
      {/* Main Container */}
      <div className="lg:flex lg:flex-col lg:w-full mt-5 mx-2">
        
        {/* Search Bar */}
        <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
          <div className="flex items-center">
            <i className="px-3 fas fa-search ml-1"></i>
            <input type="text" placeholder="Buscar..." className="ml-3 focus:outline-none w-full" />
          </div>
        </div>

        {/* Wallet & Actions */}
        <div className="lg:flex gap-4 items-stretch">
          {/* Wallet Balance Box */}
          <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
            <div className="flex justify-center items-center space-x-5 h-full">
              <div>
                <p>Umar A Rano</p>
                <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                <p>25.365 $</p>
              </div>
              <svg
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="54px"
  height="54px"
>
  <path
    fill="#000000"
    d="M95.5 104h320a87.73 87.73 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
  />
  <path
    fill="#000000"
    d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"
    className="h-24 md:h-20 w-38" />
</svg>
            </div>
          </div>

          {/* Actions Box */}
          <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
            <div className="flex flex-wrap justify-between h-full">
              {/* Action 1: Deposit */}
              <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                <p className="text-white">Deposit</p>
              </div>

              {/* Action 2: Transfer */}
              <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                <i className="fas fa-exchange-alt text-white text-4xl"></i>
                <p className="text-white">Transfer</p>
              </div>

              {/* Action 3: Redeem */}
              <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                <i className="fas fa-qrcode text-white text-4xl"></i>
                <p className="text-white">Transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg p-4 shadow-md my-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b-2 w-full">
                  <h2 className="text-ml font-bold text-gray-600">History</h2>` 
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/07/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>150$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>24/06/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>15$</span></p>
                </td>
              </tr>
              <tr className="border-b w-full">
                <td className="px-4 py-2 text-left align-top w-1/2">
                  <div>
                    <h2>Comercio</h2>
                    <p>02/05/2023</p>
                  </div>
                </td>
                <td className="px-4 py-2 text-right text-cyan-500 w-1/2">
                  <p><span>50$</span></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WalletDashboard;
