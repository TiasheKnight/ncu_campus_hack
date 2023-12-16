import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const HomeVistorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="md:h-[146px] sm:h-[247px] h-[295px] mb-[-117px] mx-auto md:px-5 w-full z-[1]">
          <div className="absolute bg-blue_gray-700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-[19px] top-[0] w-full">
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[168px] sm:mt-0 my-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
              onClick={() => navigate("/homelistvistor")}
              shape="round"
              color="teal_600"
              size="sm"
              variant="fill"
            >
              Switch
            </Button>
            <Img
              className="h-[87px] mb-[35px] sm:ml-[0] ml-[29px] sm:mt-0 mt-4"
              src="images/img_messagebell_gray_600.svg"
              alt="messagebell"
            />
            <Text
              className="sm:ml-[0] ml-[1421px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              訪客
            </Text>
          </div>
          <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start p-[55px] md:px-10 sm:px-5 right-[17%] rounded-[106px] top-[3%] w-[213px]">
            <Text
              className="my-5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              商城
            </Text>
          </div>
          <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[29%] rounded-[106px] top-[3%] w-[213px]">
            <Text
              className="my-[21px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              組織
            </Text>
          </div>
          <div className="absolute bg-gray-600 bottom-[0] flex flex-col h-[266px] inset-x-[0] items-center justify-center mx-auto p-[31px] sm:px-5 rounded-[50%] w-[266px]">
            <Text
              className="my-[70px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              管理活動
            </Text>
          </div>
          <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start left-[29%] p-[54px] md:px-10 sm:px-5 rounded-[106px] top-[3%] w-[213px]">
            <Text
              className="my-[21px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              帳號
            </Text>
          </div>
          <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start left-[17%] p-[55px] md:px-10 sm:px-5 rounded-[106px] shadow-bs top-[3%] w-[213px]">
            <Text
              className="my-5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterRegular50"
            >
              好友
            </Text>
          </div>
          <Button
            className="common-pointer absolute bottom-[32%] cursor-pointer font-semibold leading-[normal] min-w-[120px] right-[5%] sm:text-4xl md:text-[38px] text-[40px] text-center"
            onClick={() => navigate("/")}
            shape="round"
            color="blue_300_c9"
            size="sm"
            variant="fill"
          >
            登入
          </Button>
        </div>
        <div className="h-[902px] mt-auto mx-auto md:px-5 w-full">
          <Img
            className="h-[902px] m-auto object-cover w-full"
            src="images/img_map.png"
            alt="map"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[150px] justify-start right-[24%] top-[11%] w-[19%]">
            <Img
              className="common-pointer h-[130px] md:ml-[0] ml-[62px] w-[130px]"
              src="images/img_activitietag1.svg"
              alt="activitietagOne"
              onClick={() => navigate("/activitydetailvistor")}
            />
            <div className="flex flex-row items-start justify-between w-full">
              <Img
                className="h-[100px] mt-[78px] w-[100px]"
                src="images/img_activitietag3.svg"
                alt="activitietagThree"
              />
              <Img
                className="h-[100px] mb-[78px] w-[100px]"
                src="images/img_activitietag1.svg"
                alt="activitietagTwo"
              />
            </div>
          </div>
          <Img
            className="absolute bottom-[31%] h-[50px] inset-x-[0] mx-auto w-[50px]"
            src="images/img_activitietag4.svg"
            alt="activitietagFour"
          />
          <Footer className="absolute bg-lime-800 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default HomeVistorPage;
