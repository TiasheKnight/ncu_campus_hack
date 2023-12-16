import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img } from "components";

const FriendschatDrawer = (props) => {
  return (
    <Drawer placement="bottom" className="!w-full" {...props}>
      <div>
        <div className="flex flex-col items-center justify-end mx-auto pt-[902px] sm:w-full md:w-full">
          <div className="bg-blue_gray-700 flex md:flex-col flex-row md:gap-10 gap-[84px] items-center justify-start p-[29px] sm:px-5 w-full">
            <div className="bg-white-A700 border-2 border-black-900 border-solid h-[120px] md:ml-[0] ml-[101px] md:px-5 rounded-[20px] w-4/5"></div>
            <Img
              className="h-24 md:h-auto object-cover w-24"
              src="images/img_arrowturndownleft.png"
              alt="arrowturndownle"
            />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default FriendschatDrawer;
