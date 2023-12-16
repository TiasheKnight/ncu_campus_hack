import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import OrganizationEditClubswitch from "components/OrganizationEditClubswitch";

const OrganizationEditPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[46px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[15px] items-start justify-start max-w-[1788px] mb-[505px] mt-[264px] w-full">
            <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
              <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[51%] md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    擁有組織名稱
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[122px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    組織管理員
                  </Text>
                  <Text
                    className="ml-32 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    組織介紹
                  </Text>
                </div>
                <Line className="bg-black-900 h-0.5 w-full" />
              </div>
            </div>
            <OrganizationEditClubswitch className="h-[100px] md:h-[389px] sm:h-[88px] relative w-full" />
          </div>
        </div>
        <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto p-[27px] sm:px-5 top-[0] w-full">
          <Img
            className="common-pointer h-[70px] ml-4 md:ml-[0] md:mt-0 my-[25px]"
            src="images/img_home.svg"
            alt="home"
            onClick={() => navigate("/homenormaluser")}
          />
          <Img
            className="h-[120px] ml-6 md:ml-[0] w-[120px]"
            src="images/img_returnbutton.svg"
            alt="returnbutton"
          />
          <Text
            className="md:ml-[0] ml-[524px] md:mt-0 mt-6 md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            編輯組織
          </Text>
        </div>
      </div>
    </>
  );
};

export default OrganizationEditPage;
