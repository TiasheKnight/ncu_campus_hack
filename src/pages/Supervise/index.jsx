import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import SuperviseColumneventtype from "components/SuperviseColumneventtype";

const SupervisePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 flex flex-col gap-[22px] h-max inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[31px] mt-[163px] md:px-5 w-[24%] md:w-full">
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
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[31px] md:px-5 w-[92%] md:w-full">
            <div className="bg-white-A700_7f flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-[21px] sm:px-5 rounded-[30px] w-full">
              <Text
                className="sm:mt-0 my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[2.80px]"
                size="txtInterBold40"
              >
                活動名稱
              </Text>
              <Text
                className="sm:ml-[0] ml-[134px] sm:mt-0 my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[2.80px]"
                size="txtInterBold40"
              >
                活動類型
              </Text>
              <Text
                className="sm:ml-[0] ml-[86px] sm:mt-0 my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[2.80px]"
                size="txtInterBold40"
              >
                活動舉辦人
              </Text>
              <Text
                className="sm:ml-[0] ml-[84px] sm:mt-0 my-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[2.80px]"
                size="txtInterBold40"
              >
                日期
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-[29px] md:ml-[0] ml-[62px] md:px-5 w-[88%]"
            orientation="vertical"
          >
            {new Array(7).fill({}).map((props, index) => (
              <React.Fragment key={`SuperviseColumneventtype${index}`}>
                <SuperviseColumneventtype
                  className="flex flex-col items-center justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <header className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full">
          <Img
            className="common-pointer h-[70px] mb-[59px] ml-11 md:ml-[0] md:mt-0 mt-12"
            src="images/img_home.svg"
            alt="home"
            onClick={() => navigate("/homelistsystemmanager")}
          />
          <Text
            className="mb-[52px] md:ml-[0] ml-[278px] md:mt-0 mt-7 md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            審查舉報
          </Text>
          <div
            className="common-pointer bg-lime-800_02 flex flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[204px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]"
            onClick={() => navigate("/userreportsselect")}
          >
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_trianglewarning.png"
              alt="trianglewarning"
            />
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
              size="txtInterExtraBold40"
            >
              發布警告
            </Text>
          </div>
          <div
            className="common-pointer bg-lime-800_02 flex flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[55px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]"
            onClick={() => navigate("/userrestrictselect")}
          >
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_lock1.png"
              alt="lockOne"
            />
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
              size="txtInterExtraBold40"
            >
              限制用戶
            </Text>
          </div>
          <div
            className="common-pointer bg-lime-800_02 flex flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[54px] mr-[101px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]"
            onClick={() => navigate("/userremoveselect")}
          >
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_trash1.png"
              alt="trashOne"
            />
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
              size="txtInterExtraBold40"
            >
              刪除用戶
            </Text>
          </div>
        </header>
      </div>
    </>
  );
};

export default SupervisePage;
