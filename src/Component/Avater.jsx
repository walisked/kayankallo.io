import React from "react";

export const Avater = () => {
  return (
    <>
    {/* Avater Initial */}
    <div>
      <div class="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
        TW
      </div>
    </div>
    {/* Avater Active */}
    <span class="relative inline-block">
    <img src="https://randomuser.me/api/portraits/women/50.jpg" class="object-cover w-16 h-16 rounded-full "/>
    <span class="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
</span>
    </>
  );
};
