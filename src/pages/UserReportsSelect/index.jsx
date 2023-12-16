import React from "react";

import { Img, List, Text } from "components";
import FriendsRemoveSelectRowupload from "components/FriendsRemoveSelectRowupload";
import Header from "components/Header";

const UserReportsSelectPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-gray-300 flex flex-col gap-[19px] h-full inset-[0] justify-center m-auto pb-[115px] w-full">
          <Header className="bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[66px] md:px-5 w-[23%] md:w-full">
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid justify-center sm:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
              size="txtInterRegular30"
            >
              請輸入用戶id
            </Text>
            <Img
              className="h-[74px] sm:ml-[0] ml-[5px] w-[74px]"
              src="images/img_search.svg"
              alt="search_One"
            />
          </div>
          <List
            className="flex flex-col gap-px items-center max-w-[1717px] md:ml-[0] ml-[86px] md:px-5 w-full"
            orientation="vertical"
          >
            {new Array(5).fill({}).map((props, index) => (
              <React.Fragment key={`FriendsRemoveSelectRowupload${index}`}>
                <FriendsRemoveSelectRowupload
                  className="flex flex-1 flex-row gap-10 h-[135px] md:h-auto items-start justify-start max-w-[1717px] px-10 sm:px-5 py-5 rounded-[15px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <FriendsRemoveSelectRowupload className="absolute bottom-[0] flex flex-row gap-10 h-[135px] md:h-auto inset-x-[0] items-start justify-start max-w-[1717px] mx-auto md:px-5 py-5 rounded-[15px] w-full" />
      </div>
    </>
  );
};

export default UserReportsSelectPage;
