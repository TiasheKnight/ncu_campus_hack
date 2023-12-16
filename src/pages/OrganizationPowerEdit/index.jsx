import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import OrganizationPowerEditColumn from "components/OrganizationPowerEditColumn";

const OrganizationPowerEditPage = () => {
  const navigate = useNavigate();

  const organizationPowerEditColumnPropList = [
    {},
    { presidenttext: "中文系活動部長" },
    { presidenttext: "中文系公關部長" },
    { presidenttext: "中文系學術部長" },
    { presidenttext: "中文系體器部長" },
    { presidenttext: "中文系路邊一枝草" },
  ];

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bottom-[0] sm:h-[1068px] h-[1113px] md:h-[1504px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[86px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mb-[568px] mt-[153px] w-[98%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[30px] items-center justify-start w-1/5 md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    組織名稱：
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    中文系
                  </Text>
                </div>
                <div className="flex flex-row sm:gap-10 items-center justify-between mt-[34px] w-[37%] md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    使用者名稱
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    權限階層
                  </Text>
                </div>
                <Line className="bg-black-900 h-0.5 mt-[41px] w-full" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[89%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[26px] justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[295px] items-center justify-start md:ml-[0] ml-[11px] w-[39%] md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    中文代表
                  </Text>
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                    size="txtInterRegular40"
                  >
                    創辦管理員
                  </Text>
                </div>
                <Line className="bg-black-900 h-px w-full" />
              </div>
            </div>
            <List
              className="flex flex-col items-center w-full"
              orientation="vertical"
            >
              {organizationPowerEditColumnPropList.map((props, index) => (
                <React.Fragment key={`OrganizationPowerEditColumn${index}`}>
                  <OrganizationPowerEditColumn
                    className="flex flex-1 flex-col items-center justify-start my-0 pt-3 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <div className="absolute bg-green-800_01 bottom-[2%] flex flex-col h-[273px] items-center justify-start p-[34px] md:px-5 right-[2%] rounded-[136px] w-[273px]">
          <Text
            className="my-16 md:text-5xl text-6xl text-center text-white-A700"
            size="txtInterSemiBold60"
          >
            <>
              增加
              <br />
              管理員
            </>
          </Text>
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
            className="md:ml-[0] ml-[525px] md:mt-0 mt-6 md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            管理權限
          </Text>
        </div>
      </div>
    </>
  );
};

export default OrganizationPowerEditPage;
