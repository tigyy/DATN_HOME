import React, { useEffect, useState } from "react";

function Dropdown() {


  return (
    <>
    {/* forked from: https://codepen.io/cuonoj/pen/JjPmMaB */}
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover w-[100]"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
    
  </>
  
  );
}

export default Dropdown;
