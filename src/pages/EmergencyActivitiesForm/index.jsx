import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import GeneralActivitiesFormRowtitleSeven from "components/GeneralActivitiesFormRowtitleSeven";

const EmergencyActivitiesFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-red-A100_01 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[249px] items-start justify-start mx-auto sm:px-5 px-[34px] w-full">
        <Img
          className="common-pointer h-[70px] md:mt-0 mt-[17px] w-[70px]"
          src="images/img_materialsymbol.svg"
          alt="materialsymbol"
          onClick={() => navigate("/activitiesmanagement")}
        />
        <div className="h-[1147px] sm:h-[1292px] md:h-[1972px] md:px-5 relative w-[66%] md:w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[37px] sm:px-5 w-[98%]">
            <div className="flex flex-col gap-[55px] justify-start mb-[30px] mr-[37px] w-[85%] md:w-full">
              <Text
                className="md:ml-[0] ml-[269px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                size="txtInterRegular50Black900"
              >
                發佈緊急活動
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-center px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動名稱："
                />
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row gap-[35px] items-center justify-center mt-[18px] px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動發佈型別："
                />
                <div className="flex md:flex-col flex-row gap-[51px] items-center justify-center max-w-[709px] ml-2.5 md:ml-[0] mt-[26px] w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                    size="txtInterRegular30Black900"
                  >
                    活動種類：
                  </Text>
                  <div className="bg-white-A700 border-2 border-black-900 border-solid flex sm:flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[463px] sm:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[120px]"
                      size="txtInterRegular30"
                    >
                      全校活動
                    </Text>
                  </div>
                  <Img
                    className="h-[45px] rounded-[20px] w-[45px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </div>
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-center mt-5 px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動發起人："
                />
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-center mt-[18px] px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動地點："
                />
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row gap-[35px] items-center justify-center mt-[18px] px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動人數下限："
                />
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row gap-[35px] items-center justify-center mt-[18px] px-2.5 py-[5px] w-auto md:w-full"
                  activitytitle="活動人數上限："
                />
                <List
                  className="sm:flex-col flex-row gap-[45px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[26px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[31px] items-center justify-center p-2.5 w-auto sm:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[199px]"
                      size="txtInterRegular30Black900"
                    >
                      活動結束日期：
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[150px]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[117px]"
                        size="txtInterRegular30"
                      >
                        2023.1.5
                      </Text>
                    </div>
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_calculator.svg"
                      alt="calculator"
                    />
                  </div>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[31px] items-center justify-center p-2.5 w-auto sm:w-full">
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[199px]"
                      size="txtInterRegular30Black900"
                    >
                      活動結束時間：
                    </Text>
                    <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[150px]">
                      <Text
                        className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[78px]"
                        size="txtInterRegular30"
                      >
                        15:00
                      </Text>
                    </div>
                    <Img
                      className="h-[50px] w-[50px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                </List>
                <GeneralActivitiesFormRowtitleSeven
                  className="flex md:flex-col flex-row md:gap-10 gap-[95px] items-center justify-center ml-0.5 md:ml-[0] mt-[18px] px-2.5 py-[5px] w-auto md:w-full"
                  activitydescription="請簡單描述您的活動內容2000字內"
                />
                <div className="md:h-[130px] h-[97px] md:ml-[0] ml-[281px] mt-[33px] relative w-[30%]">
                  <Text
                    className="m-auto sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
                    size="txtInterRegular50Black900"
                  >
                    確認發布
                  </Text>
                  <div className="absolute bg-gradient  border-2 border-black-900 border-solid h-[97px] inset-[0] justify-center m-auto rounded-[30px] w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[50px] h-[52px] right-[0] top-[43%] w-[21%]">
            <GeneralActivitiesFormRowtitleSeven
              className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-auto px-2.5 py-[5px] w-auto"
              activitytitle="活動位置："
            />
            <Img
              className="absolute h-[50px] inset-y-[0] my-auto right-[20%] w-[50px]"
              src="images/img_basillocationsolid.svg"
              alt="basillocationso"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyActivitiesFormPage;
