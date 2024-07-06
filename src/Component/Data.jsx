import React from "react";

export const Card = () => {
  return (
<div className="w-full h-screen flex justify-center items-center bg-gray-100">
  <div class="max-w-[500px] w-full p-8 bg-white shadow-xl rounded-lg">
    <h2 class="text-2xl font-bold text-center py-4">DATA</h2>
    <p class="text-center text-4xl font-bold">30 Days</p>
    <form class="mt-8 flex flex-col items-center">
      <label for="network" class="mt-4">Network</label>
      <select id="network" class="w-3/4 bg-gray-100 border border-gray-300 rounded-md py-2 px-3" defaultValue="">
        <option value="" disabled>Select Network</option>
        <option value="MTN">MTN</option>
        <option value="GLO">GLO</option>
        <option value="9MOBILE">9MOBILE</option>
        <option value="AIRTEL">AIRTEL</option>
        <option value="SMILE">SMILE</option>
      </select>

      <label for="dataType" class="mt-4">Data Type</label>
      <select id="dataType" class="w-3/4 bg-gray-100 border border-gray-300 rounded-md py-2 px-3" defaultValue="">
        <option value="" disabled>Select Data Type</option>
        <option value="SME">SME</option>
        <option value="CORPORATE">CORPORATE</option>
        <option value="GIFTING">GIFTING</option>
      </select>

      <label for="mobileNumber" class="mt-4">Mobile Number</label>
      <input type="text" id="mobileNumber" class="w-3/4 bg-gray-100 border border-gray-300 rounded-md py-2 px-3" placeholder="Enter Mobile Number" />

      <label for="amount" class="mt-4">Amount</label>
      <input type="number" id="amount" class="w-3/4 bg-gray-100 border border-gray-300 rounded-md py-2 px-3" placeholder="Enter Amount" />

      <div class="flex items-center mt-4">
        <input type="checkbox" id="bypassValidator" class="h-4 w-4 text-blue-600 border-gray-300 rounded" />
        <label for="bypassValidator" class="ml-2">Bypass Number Validator</label>
      </div>

      <button type="submit" class="bg-yellow-500 w-3/4 rounded-md font-bold my-6 py-3 text-white">Buy Now</button>
    </form>
  </div>
</div>

  );
};
