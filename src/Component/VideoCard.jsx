import React from "react";
import { RiVideoDownloadLine } from "react-icons/ri";

export const VideoCard = (props) => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-[rgb(136,141,158)] grid md:grid-cols-3" >
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col py-1 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={props.videoImage}
              alt="Video Thumbnail"
              className="w-full mx-auto mt-[-3rem] #bg-white"
            />
            <h2 className="text-2xl font-hold text-center py-8 mx-8 mt-8">
              {props.videoTitle}
            </h2>
            <p className="text-center text-1xl font-bold mx-8">
              {props.videoDescription}
            </p>
            <p className="text-center text-1xl font-bold mx-8">
              {props.videoPrice}
            </p>
            <a href={props.downloadLink} download>
              <button className="download-button my-6 mx-6  md:mx-0 py-3">
                <RiVideoDownloadLine />
              </button>
            </a>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
