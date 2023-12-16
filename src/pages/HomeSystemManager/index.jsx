import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const HomeSystemManagerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1080px] justify-end mx-auto relative w-full">
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
              onClick={() => navigate("/activitydetail")}
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
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[526px] inset-x-[0] items-end justify-end mx-auto w-full">
          <div className="md:h-[266px] h-[295px] sm:h-[382px] md:px-5 relative w-full">
            <div className="absolute bg-blue_gray-700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-[19px] top-[0] w-full">
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[168px] sm:mt-0 my-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/homelistsystemmanager")}
                shape="round"
                color="teal_600"
                size="sm"
                variant="fill"
              >
                Switch
              </Button>
              <Img
                className="h-[87px] sm:ml-[0] ml-[29px]"
                src="images/img_messagebell.svg"
                alt="messagebell"
              />
              <Text
                className="sm:ml-[0] ml-[1338px] sm:mt-0 my-[25px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                <>
                  使用者名稱
                  <br />
                  UserID
                </>
              </Text>
            </div>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] right-[18%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[3%] w-[213px]"
              onClick={() => navigate("/store")}
              color="deep_purple_A200_01"
              size="xl"
              variant="fill"
            >
              商城
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] right-[30%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[3%] w-[213px]"
              onClick={() => navigate("/organizationmanagement")}
              color="yellow_900"
              size="xl"
              variant="fill"
            >
              組織
            </Button>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-semibold h-[266px] inset-x-[0] leading-[normal] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-center w-[266px]"
              onClick={() => navigate("/activitiesmanagement")}
              shape="circle"
              color="lime_800_02"
              size="xl"
              variant="fill"
            >
              管理活動
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] left-[28%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[3%] w-[213px]"
              onClick={() => navigate("/accountmanagement")}
              color="teal_300"
              size="xl"
              variant="fill"
            >
              帳號
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] left-[16%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[3%] w-[213px]"
              onClick={() => navigate("/friends")}
              color="light_green_700"
              size="xl"
              variant="fill"
            >
              好友
            </Button>
          </div>
          <div className="h-[331px] md:px-5 relative w-[15%]">
            <Img
              className="common-pointer h-[331px] m-auto object-cover w-full"
              src="images/img_button_331x270.png"
              alt="button"
              onClick={() => navigate("/supervise")}
            />
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[1%] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
              size="txtInterSemiBold50"
            >
              審查舉報
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSystemManagerPage;
