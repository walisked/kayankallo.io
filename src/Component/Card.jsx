import React from "react";

export const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={} alt=''/> */}
          <h2 className=" text-2xl font-hold text-center py-8">AIRTEL</h2>
          <p className="text-center text-4xl font-bold"> 30 Days </p>
          <div className="text-center font-medium m-3">
            <div className="inline-black relative w-64  mt-8">
              <select className=" text-center block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 round shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> 500 Mb </option>
                <option> SME </option>
                <option> Corperative</option>
                <option> Gift </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="inline-black relative w-64  mt-8">
              <select className=" text-center block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 round shadow leading-tight focus:outline-none focus:shadow-outline">
               <option> 1GB </option>
                <option> SME </option>
                <option> Corperative</option>
                <option> Gift </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="inline-black relative w-64  mt-8">
              <select className=" text-center block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 round shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> 5GB </option>
                <option> SME </option>
                <option> Corperative</option>
                <option> Gift </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="inline-black relative w-64  mt-8">
              <select className="text-center block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 round shadow leading-tight focus:outline-none focus:shadow-outline">
                <option> 10GB </option>
                <option> SME </option>
                <option> Corperative</option>
                <option> Gift </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
            <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 text-[red]">
              {" "}
              Buy Now{" "}
            </button>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={} alt=''/> */}
          <h2 className=" text-2xl font-hold text-center py-8">MTN</h2>
          <p className="text-center text-4xl font-bold"> 30 Days </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500 Mb </p>
            <p className="py-2 border-b mx-8"> 1GB </p>
            <p className="py-2 border-b mx-8"> 5Gb </p>
            <p className="py-2 border-b mx-8"> 10Gb </p>
            <button className="bg-[yellow] w-[200px] rounded-md font-bold my-6 mx-auto  md:mx-0 py-3 text-[white]">
              {" "}
              Buy Now{" "}
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col py-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={} alt=''/> */}
          <h2 className=" text-2xl font-hold text-center py-8">Glo</h2>
          <p className="text-center text-4xl font-bold"> 30 Days </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 500 Mb </p>
            <p className="py-2 border-b mx-8"> 1GB </p>
            <p className="py-2 border-b mx-8"> 5Gb </p>
            <p className="py-2 border-b mx-8"> 10Gb </p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  md:mx-0 py-3 text-[red]">
              {" "}
              Buy Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
