import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const OrganizationCreatePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[103px] md:px-10 sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-center max-w-[1081px] md:ml-[0] ml-[23px] mt-[146px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
              size="txtInterRegular50Black900"
            >
              組織名稱：
            </Text>
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid flex-1 justify-center sm:px-5 px-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-full"
              size="txtInterRegular30"
            >
              您想創建的的組織名稱
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[18px] items-center justify-center max-w-[1531px] md:ml-[0] ml-[21px] mt-[83px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
              size="txtInterRegular50Black900"
            >
              組織介紹：
            </Text>
            <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col h-[339px] md:h-auto items-center justify-center max-w-[1281px] md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[180px]"
                size="txtInterRegular30"
              >
                您的組織介紹
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-center max-w-[1081px] md:ml-[0] ml-[23px] mt-[50px] w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
              size="txtInterRegular50Black900"
            >
              新增管理員權限：
            </Text>
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid flex-1 justify-center sm:px-5 px-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-full"
              size="txtInterRegular30"
            >
              請輸入您要新增權限的UserID
            </Text>
          </div>
          <Button
            className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full md:ml-[0] ml-[545px] mt-[51px] rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            onClick={() => navigate("/organizationedit")}
            color="deep_purple_200"
            size="sm"
            variant="fill"
          >
            創建
          </Button>
        </div>
        <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto p-[27px] sm:px-5 top-[0] w-full">
          <Img
            className="common-pointer h-[70px] ml-4 md:ml-[0] md:mt-0 my-[25px]"
            src="images/img_home.svg"
            alt="home"
            onClick={() => navigate("/homenormaluser")}
          />
          <Img
            className="h-[120px] md:ml-[0] ml-[25px] w-[120px]"
            src="images/img_returnbutton.svg"
            alt="returnbutton"
          />
          <Text
            className="md:ml-[0] ml-[524px] md:mt-0 mt-6 md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            創建組織
          </Text>
        </div>
      </div>
    </>
  );
};

export default OrganizationCreatePage;
