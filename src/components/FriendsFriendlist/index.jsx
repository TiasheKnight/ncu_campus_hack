import React from "react";

import { Img, Text } from "components";

const FriendsFriendlist = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-700_01 flex flex-col h-[85px] items-center justify-start md:mt-0 my-1 p-[13px] rounded-[42px] w-[85px]">
          <Img
            className="h-[58px] md:h-auto object-cover w-[58px]"
            src="images/img_user_58x58.png"
            alt="user"
          />
        </div>
        <Text
          className="md:ml-[0] ml-[33px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
          size="txtInterMedium30"
        >
          {props?.passwordtext}
        </Text>
        <div className="bg-purple-800 flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[1179px] md:mt-0 my-[19px] px-5 py-2.5 rounded-[28px] w-[218px]">
          <Img
            className="h-[33px] md:h-auto object-cover w-[33px]"
            src="images/img_commentaltdots.png"
            alt="commentaltdots"
          />
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700_a2 w-auto"
            size="txtInterSemiBold30"
          >
            {props?.messagecontenttext}
          </Text>
        </div>
      </div>
    </>
  );
};

FriendsFriendlist.defaultProps = {
  passwordtext: "@xxxxxx",
  messagecontenttext: "傳訊息",
};

export default FriendsFriendlist;
