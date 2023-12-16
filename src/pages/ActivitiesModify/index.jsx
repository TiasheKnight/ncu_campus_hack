import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const ActivitiesModifyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="sm:h-[1080px] h-[1085px] md:h-[1950px] m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[902px] w-full">
            <div className="bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[29px] sm:px-5 w-full">
              <Img
                className="common-pointer h-[70px] md:ml-[0] ml-[15px] md:mt-0 mt-[19px]"
                src="images/img_home.svg"
                alt="home"
                onClick={() => navigate("/homenormaluser")}
              />
              <Img
                className="h-[120px] md:ml-[0] ml-[18px] w-[120px]"
                src="images/img_returnbutton.svg"
                alt="returnbutton"
              />
              <Text
                className="md:ml-[0] ml-[429px] md:mt-0 mt-[22px] md:text-5xl text-[80px] text-amber-A400 text-center"
                size="txtInterRegular80"
              >
                活動內容修改
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[1%] w-[91%]">
            <div className="flex flex-col gap-[41px] items-start justify-start w-full">
              <List
                className="flex flex-col gap-[41px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-center justify-center w-auto sm:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900 text-right w-[481px]"
                      size="txtInterMedium60"
                    >
                      活動名稱：運動會
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                    <Text
                      className="max-w-[739px] md:max-w-full md:text-5xl text-6xl text-black-900 text-right w-full"
                      size="txtInterMedium60"
                    >
                      活動開始日期：2023.12.26
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mr-[164px] my-0 w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                    <Text
                      className="max-w-[661px] md:max-w-full md:text-5xl text-6xl text-black-900 text-right w-full"
                      size="txtInterMedium60"
                    >
                      活動發布型別：一般活動
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center max-w-[664px] w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900 text-right w-[583px]"
                      size="txtInterMedium60"
                    >
                      活動開始時間：14:00
                    </Text>
                    <Img
                      className="h-[70px] w-[63px]"
                      src="images/img_user.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
                <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between my-0 w-full">
                  <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900 text-right w-[541px]"
                      size="txtInterMedium60"
                    >
                      活動種類：全校活動
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                    <Text
                      className="max-w-[739px] md:max-w-full md:text-5xl text-6xl text-black-900 text-right w-full"
                      size="txtInterMedium60"
                    >
                      活動結束日期：2023.12.26
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mr-[164px] my-0 w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900 text-right w-[541px]"
                      size="txtInterMedium60"
                    >
                      活動發起人：運動會
                    </Text>
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center max-w-[664px] w-full">
                    <Text
                      className="md:text-5xl text-6xl text-black-900 text-right w-[583px]"
                      size="txtInterMedium60"
                    >
                      活動結束時間：14:00
                    </Text>
                    <Img
                      className="h-[70px] w-[63px]"
                      src="images/img_user.svg"
                      alt="user_One"
                    />
                  </div>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-[502px] sm:w-full">
                <Text
                  className="md:text-5xl text-6xl text-black-900 text-right w-[421px]"
                  size="txtInterMedium60"
                >
                  活動地點：操場
                </Text>
                <Img
                  className="h-[70px] w-[37px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[347px] items-center justify-start w-[91%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-[562px] sm:w-full">
                  <Text
                    className="md:text-5xl text-6xl text-black-900 text-right w-[481px]"
                    size="txtInterMedium60"
                  >
                    活動人數下限：無
                  </Text>
                  <Img
                    className="h-[70px] w-[37px]"
                    src="images/img_user.svg"
                    alt="user_One"
                  />
                </div>
                <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center max-w-[674px] w-full">
                  <Text
                    className="md:text-5xl text-6xl text-black-900 text-right w-[593px]"
                    size="txtInterMedium60"
                  >
                    活動發布時間：00:00
                  </Text>
                  <Img
                    className="h-[70px] w-[70px]"
                    src="images/img_user.svg"
                    alt="user_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[13%] flex md:flex-col flex-row gap-2.5 items-center justify-center md:px-5 right-[8%] w-auto">
          <Text
            className="max-w-[740px] md:max-w-full md:text-5xl text-6xl text-black-900 text-right w-full"
            size="txtInterMedium60"
          >
            活動發布日期：2023.12.20
          </Text>
          <Img
            className="h-[70px] w-[70px]"
            src="images/img_user.svg"
            alt="user_Three"
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesModifyPage;
