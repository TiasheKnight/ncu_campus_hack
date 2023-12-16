import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AccountManagementPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="md:h-[1071px] h-[1080px] m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 h-[1071px] inset-[0] justify-center m-auto w-full"></div>
          <div className="absolute md:h-[272px] h-[294px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-blue_gray-700 flex flex-col inset-x-[0] items-start justify-start mx-auto p-11 md:px-10 sm:px-5 top-[0] w-full">
              <Img
                className="common-pointer h-[70px] mb-[15px] mt-1"
                src="images/img_home.svg"
                alt="home"
                onClick={() => navigate("/homenormaluser")}
              />
            </div>
            <Button
              className="common-pointer absolute bottom-[11%] cursor-pointer font-semibold h-[216px] leading-[normal] right-[32%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-[216px]"
              onClick={() => navigate("/propsmanager")}
              shape="circle"
              color="gray_500"
              size="xl"
              variant="fill"
            >
              道具
            </Button>
            <Button
              className="common-pointer absolute bottom-[10%] cursor-pointer font-semibold h-[216px] leading-[normal] right-[18%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-[216px]"
              onClick={() => navigate("/modifypassword")}
              shape="circle"
              color="blue_300"
              size="xl"
              variant="fill"
            >
              修改密碼
            </Button>
            <div className="absolute bg-purple-700 border-2 border-black-900 border-solid bottom-[0] flex flex-col h-[273px] items-start justify-center p-[68px] md:px-10 sm:px-5 right-[2%] rounded-[136px] w-[273px]">
              <Text
                className="mb-[33px] mt-[30px] md:text-5xl text-6xl text-white-A700"
                size="txtInterSemiBold60"
              >
                登出
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[15%] flex flex-col gap-[55px] justify-start left-[1%] md:px-5 w-[67%]">
          <div className="h-[534px] md:h-[574px] relative w-full">
            <div className="flex flex-col h-full items-start justify-start ml-auto mr-[89px] mt-[45px] w-[63%]">
              <div className="flex flex-row gap-2.5 items-center justify-center w-auto sm:w-full">
                <Text
                  className="md:text-5xl text-6xl text-black-900 text-center w-[183px]"
                  size="txtInterMedium60"
                >
                  姓：葉
                </Text>
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <div className="flex flex-row gap-2.5 items-center justify-center mt-3 w-auto sm:w-full">
                <Text
                  className="md:text-5xl text-6xl text-black-900 text-center w-[184px]"
                  size="txtInterMedium60"
                >
                  名：秋
                </Text>
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_user.svg"
                  alt="user_One"
                />
              </div>
              <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center mt-5 w-auto md:w-full">
                <Text
                  className="max-w-[633px] md:max-w-full md:text-5xl text-6xl text-black-900 text-center w-full"
                  size="txtInterMedium60"
                >
                  出生日期：2002-xx-xx
                </Text>
                <Img
                  className="h-[70px] w-px"
                  src="images/img_edit.svg"
                  alt="edit"
                />
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row gap-2.5 h-full inset-[0] items-center justify-center m-auto w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                  <div className="bg-blue_gray-700_01 flex flex-col items-center justify-start rounded-[50%] w-72">
                    <Img
                      className="h-[195px] md:h-auto object-cover w-[195px]"
                      src="images/img_user_58x58.png"
                      alt="user_Two"
                    />
                  </div>
                  <div className="flex flex-row gap-[31px] items-start justify-end mt-5 w-[94%] md:w-full">
                    <Text
                      className="mt-[5px] md:text-5xl text-6xl text-black-900 text-center w-[244px]"
                      size="txtInterBold60"
                    >
                      一夜秋風
                    </Text>
                    <Img
                      className="h-[70px] w-[39px]"
                      src="images/img_user.svg"
                      alt="user_Three"
                    />
                  </div>
                  <Text
                    className="mt-[45px] md:text-5xl text-6xl text-black-900 text-center w-[199px]"
                    size="txtInterBold60"
                  >
                    UserID
                  </Text>
                </div>
              </div>
              <Text
                className="max-w-[685px] md:max-w-full md:text-5xl text-6xl text-black-900 text-center w-full"
                size="txtInterMedium60"
              >
                Email：xxxx@xxxxx.xxx
              </Text>
              <Img
                className="h-[70px] w-[70px]"
                src="images/img_user.svg"
                alt="user_Four"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[356px] w-auto md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-6xl text-black-900 text-center"
                size="txtInterMedium60"
              >
                電話：09xxxxxx
              </Text>
            </div>
            <Img
              className="h-[70px] w-[45px]"
              src="images/img_user.svg"
              alt="user_Five"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountManagementPage;
