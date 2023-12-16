import React from "react";

import { Img } from "components";

const LocationMapPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Img
          className="md:h-[750px] sm:h-auto h-full object-cover w-full"
          src="images/img_map.png"
          alt="locationmap"
        />
      </div>
    </>
  );
};

export default LocationMapPage;
