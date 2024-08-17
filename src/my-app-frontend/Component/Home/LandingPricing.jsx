import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const kyautaFeatures = [
    { key: 'FARASHIN WATA', value: 'N0' },
    { key: 'SAUTI DA KWARI', value: 'Ehto' },
    { key: 'KARKO', value: '360p' },
    { key: 'NAURA ME DAUKA', value: 'Wayar hannu' },
    { key: 'NAURA DA ZATA DAUKA A LOKACI GUDA', value: '1' },
    { key: 'NAURAR DA ZATA IYA DANLODIN', value: '1' },
  ];

  const kauroFeatures = [
    { key: 'FARASHIN WATA', value: 'N800' },
    { key: 'SAUTI DA KWARI', value: 'Da-dama-dama' },
    { key: 'KARKO', value: '480p' },
    { key: 'NAURA ME DAUKA', value: 'Computer,wayar hannu' },
    { key: 'NAURA DA ZATA DAUKA A LOKACI GUDA', value: '3' },
    { key: 'NAURAR DA ZATA IYA DANLODIN', value: '3' },
  ];

  const gwaniFeatures = [
    { key: 'FARASHIN WATA', value: 'N1100' },
    { key: 'SAUTI DA KWARI', value: 'Zanzan' },
    { key: 'KARKO', value: '720p' },
    { key: 'NAURA ME DAUKA', value: 'TV-zamani,Wayar hannu,Computer' },
    { key: 'NAURA DA ZATA DAUKA A LOKACI GUDA', value: '5' },
    { key: 'NAURAR DA ZATA IYA DANLODIN', value: '5' },
  ];

  const renderFeaturesTable = (features) => (
    <table className="w-full border-collapse">
      <tbody>
        {features.map((feature, index) => (
          <tr key={index} className="border-b border-gray-300">
            <td className="py-4 text-center">{feature.key}</td>
            <td className="py-4 text-center">{feature.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Farashi
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            {/* Kyauta Plan */}
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-2 lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Kyauta
                </div>
                {renderFeaturesTable(kyautaFeatures)}
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  N0
                </div>
                <div className="flex items-center justify-center">
                  <Link to="/register" className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Signup
                  </Link>
                </div>
              </div>
            </div>

            {/* Kauro Plan */}
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-2 lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">Kauro</div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                {renderFeaturesTable(kauroFeatures)}
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                  N.800
                </div>
                <div className="flex items-center justify-center">
                  <Link to="/register" className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Signup
                  </Link>
                </div>
              </div>
            </div>

            {/* Gwani Plan */}
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-2 lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  Gwani
                </div>
                {renderFeaturesTable(gwaniFeatures)}
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                  N.1100
                </div>
                <div className="flex items-center justify-center">
                  <Link to="/register" className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


