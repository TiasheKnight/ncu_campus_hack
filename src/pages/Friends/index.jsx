import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import FriendsFriendlist from "components/FriendsFriendlist";

const FriendsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-gray-300 flex flex-col gap-[19px] h-full inset-[0] items-center justify-center m-auto pb-[115px] w-full">
          <header className="bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="common-pointer h-[70px] mb-[59px] ml-11 md:ml-[0] md:mt-0 mt-12"
              src="images/img_home.svg"
              alt="home"
              onClick={() => navigate("/homenormaluser")}
            />
            <Text
              className="mb-[47px] md:ml-[0] ml-[635px] md:mt-0 mt-[33px] md:text-5xl text-[80px] text-amber-A400 text-center"
              size="txtInterBold80"
            >
              好友列表
            </Text>
            <div className="bg-lime-800_02 flex flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[180px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_useradd11.png"
                alt="useraddEleven"
              />
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
                size="txtInterExtraBold40"
              >
                新增好友
              </Text>
            </div>
            <div
              className="common-pointer bg-lime-800_02 flex flex-row gap-2.5 h-[91px] md:h-auto items-center justify-center mb-[50px] md:ml-[0] ml-[34px] mr-[101px] md:mt-0 mt-[37px] px-10 sm:px-5 py-2.5 rounded-[45px] w-[258px]"
              onClick={() => navigate("/friendsremoveselect")}
            >
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_deleteuser1.png"
                alt="deleteuserOne"
              />
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700_a2 w-auto"
                size="txtInterExtraBold40"
              >
                刪除好友
              </Text>
            </div>
          </header>
          <div className="flex flex-col gap-[19px] items-start justify-start max-w-[1717px] md:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[26%] md:w-full">
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center sm:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
                size="txtInterRegular30"
              >
                請輸入好友id
              </Text>
              <Img
                className="h-[74px] sm:ml-[0] ml-[5px] w-[74px]"
                src="images/img_search.svg"
                alt="search_One"
              />
            </div>
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              {new Array(5).fill({}).map((props, index) => (
                <React.Fragment key={`FriendsFriendlist${index}`}>
                  <FriendsFriendlist
                    className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-5 w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <FriendsFriendlist className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end max-w-[1717px] mx-auto p-5 md:px-5 w-full" />
      </div>
    </>
  );
};

export default FriendsPage;
