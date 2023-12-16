import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import StoreGoods from "components/StoreGoods";

const StorePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 h-[1071px] inset-[0] justify-center m-auto w-full"></div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Sidebar className="!sticky !w-[376px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <StoreGoods className="h-[422px] md:h-[423px] relative w-[376px] sm:w-full" />
              <StoreGoods className="flex flex-col items-center justify-start mt-[3px] w-auto" />
              <StoreGoods className="flex flex-col items-center justify-start mt-[3px] w-auto" />
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[102px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {new Array(9).fill({}).map((props, index) => (
                  <React.Fragment key={`StoreGoods${index}`}>
                    <StoreGoods
                      className="flex flex-1 flex-col items-center justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <header className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[70px] mb-[59px] ml-11 md:ml-[0] md:mt-0 mt-12"
            src="images/img_home.svg"
            alt="home"
          />
          <Text
            className="mb-[46px] md:ml-[0] ml-[729px] md:mt-0 mt-[34px] md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            商城
          </Text>
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[77px] items-center justify-center mb-[43px] md:ml-[0] ml-[420px] mr-[251px] md:mt-0 mt-[35px] w-[12%] md:w-full">
            <div className="h-[100px] md:h-[47px] p-[3px] relative w-[100px]">
              <div className="md:h-[47px] h-[93px] m-auto w-[83%]">
                <div className="absolute h-7 right-[6%] top-[0] w-[43%]">
                  <Img
                    className="absolute h-7 inset-[0] justify-center m-auto"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Img
                    className="absolute bottom-[0] h-[25px] right-[0]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[47px] h-[67px] inset-x-[0] mx-auto p-[9px] w-full"
                  style={{ backgroundImage: "url('images/img_group20.svg')" }}
                >
                  <div className="absolute flex flex-row gap-2.5 h-max inset-y-[0] items-start justify-center my-auto right-[13%] w-[58%]">
                    <Img
                      className="h-[39px]"
                      src="images/img_user_gray_700.svg"
                      alt="user"
                    />
                    <Img
                      className="h-[11px] mt-[3px]"
                      src="images/img_vector_yellow_800_01.svg"
                      alt="vector_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[47px] inset-[0] justify-center m-auto"
                    src="images/img_settings_gray_700.svg"
                    alt="settings_One"
                  />
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-2.5 items-center justify-start right-[28%] top-[23%] w-[21%]"
                style={{ backgroundImage: "url('images/img_group21.svg')" }}
              >
                <Img
                  className="h-2.5"
                  src="images/img_settings_gray_700_10x21.svg"
                  alt="settings_Two"
                />
              </div>
            </div>
            <Text
              className="md:text-5xl text-[80px] text-amber-A400 text-center"
              size="txtInterRegular80"
            >
              0
            </Text>
          </div>
        </header>
      </div>
    </>
  );
};

export default StorePage;
