import React from "react";

import { Img, Text } from "components";

const FriendsRemoveSelectRowupload = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-20 w-[46px]"
          src="images/img_upload.svg"
          alt="upload"
        />
        <div className="bg-blue_gray-700_01 flex flex-col h-[85px] items-center justify-start p-[13px] rounded-[42px] w-[85px]">
          <Img
            className="h-[58px] md:h-auto object-cover w-[58px]"
            src="images/img_user_58x58.png"
            alt="user"
          />
        </div>
        <Text
          className="flex-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900"
          size="txtInterMedium30"
        >
          {props?.passwordtext}
        </Text>
      </div>
    </>
  );
};

FriendsRemoveSelectRowupload.defaultProps = { passwordtext: "@xxxxxx" };

export default FriendsRemoveSelectRowupload;
