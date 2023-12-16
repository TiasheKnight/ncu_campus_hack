import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const AnnounceSetDrawer = (props) => {
  const navigate = useNavigate();

  return (
    <Drawer placement="top" className="!w-full" {...props}>
      <div>
        <div className="flex flex-col font-inter items-center justify-start mx-auto pb-[902px] sm:w-full md:w-full">
          <div className="bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[25px] sm:px-5 w-full">
            <Img
              className="common-pointer h-[70px] md:ml-[0] ml-[19px] md:mt-0 mt-[23px]"
              src="images/img_home.svg"
              alt="home"
              onClick={() => navigate("/homenormaluser")}
            />
            <Img
              className="h-[120px] md:ml-[0] ml-[22px] md:mt-0 mt-2 w-[120px]"
              src="images/img_returnbutton.svg"
              alt="returnbutton"
            />
            <Text
              className="md:ml-[0] ml-[487px] md:mt-0 mt-[15px] md:text-5xl text-[80px] text-amber-A400 text-center"
              size="txtInterRegular80"
            >
              通知設定
            </Text>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AnnounceSetDrawer;
