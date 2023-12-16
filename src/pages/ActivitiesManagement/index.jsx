import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import ActivitiesManagementStackxxxxxxxx from "components/ActivitiesManagementStackxxxxxxxx";
import Footer from "components/Footer";

const ActivitiesManagementPage = () => {
  const navigate = useNavigate();

  const activitiesManagementStackxxxxxxxxPropList = [
    { activitytitle: "校級活動", reporttitle: "運動會" },
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <>
      <div className="bg-white-A700 flex font-inter h-[1080px] justify-end mx-auto relative w-full">
        <div className="sm:h-[1071px] h-[1168px] md:h-[2971px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute sm:h-[1071px] h-[1159px] md:h-[2971px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bg-blue_gray-100 h-[1071px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[62px] inset-x-[0] items-start justify-start mx-auto w-[94%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  活動名稱
                </Text>
                <Text
                  className="md:ml-[0] ml-[202px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  活動類型
                </Text>
                <Text
                  className="md:ml-[0] ml-[169px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  活動發起人
                </Text>
                <Text
                  className="md:ml-[0] ml-[77px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  日期
                </Text>
                <Text
                  className="md:ml-[0] ml-[116px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtInterRegular40"
                >
                  目前參與人數/ 活動人數上限
                </Text>
              </div>
              <List
                className="flex flex-col gap-[3.5px] items-center w-full"
                orientation="vertical"
              >
                {activitiesManagementStackxxxxxxxxPropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`ActivitiesManagementStackxxxxxxxx${index}`}
                    >
                      <ActivitiesManagementStackxxxxxxxx
                        className="md:h-[359px] sm:h-[75px] h-[99px] pt-[22px] relative w-full"
                        {...props}
                      />
                      {index <
                        activitiesManagementStackxxxxxxxxPropList.length -
                          1 && (
                        <Line className="self-center h-px bg-black-900 w-[96%]" />
                      )}
                    </React.Fragment>
                  ),
                )}
              </List>
            </div>
          </div>
          <Footer className="absolute bg-lime-800 bottom-[8%] flex inset-x-[0] items-center justify-center mx-auto w-full" />
          <div className="absolute md:h-[273px] h-[294px] sm:h-[680px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-blue_gray-700 flex sm:flex-col flex-row md:gap-10 gap-[433px] inset-x-[0] items-center justify-start mx-auto p-10 sm:px-5 top-[0] w-full">
              <Img
                className="common-pointer h-[70px] sm:ml-[0] ml-[3px]"
                src="images/img_home.svg"
                alt="home"
                onClick={() => navigate("/homenormaluser")}
              />
              <Text
                className="md:text-5xl text-[80px] text-amber-A400 text-center"
                size="txtInterRegular80"
              >
                管理活動
              </Text>
            </div>
            <Button
              className="common-pointer !text-black-900 absolute bottom-[11%] cursor-pointer h-[216px] leading-[normal] right-[32%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-[216px]"
              onClick={() => navigate("/activitiesrecords")}
              shape="circle"
              color="gray_500"
              size="xl"
              variant="fill"
            >
              活動紀錄
            </Button>
            <Button
              className="absolute bottom-[10%] cursor-pointer font-semibold h-[216px] leading-[normal] right-[18%] rounded-[50%] sm:text-[40px] md:text-[46px] text-[50px] text-center w-[216px]"
              shape="circle"
              color="light_blue_900"
              size="xl"
              variant="fill"
            >
              通知設定
            </Button>
            <Button
              className="common-pointer !text-white-A700 absolute bottom-[0] cursor-pointer h-[273px] leading-[normal] right-[2%] rounded-[136px] md:text-5xl text-6xl text-center w-[273px]"
              onClick={() => navigate("/activitiespublishselect")}
              color="green_800_01"
              size="xl"
              variant="fill"
            >
              發布活動
            </Button>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-center justify-start left-[4%] md:px-5 top-[21%] w-[23%]">
          <Text
            className="bg-white-A700 border-2 border-black-900 border-solid justify-center sm:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
            size="txtInterRegular30"
          >
            請輸入活動名稱
          </Text>
          <Img
            className="h-[74px] sm:ml-[0] ml-[5px] w-[74px]"
            src="images/img_search.svg"
            alt="search_One"
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesManagementPage;
