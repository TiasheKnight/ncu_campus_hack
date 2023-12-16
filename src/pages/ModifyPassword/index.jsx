import React from "react";

import { Button, Img, Text } from "components";

const ModifyPasswordPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1080px] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1200px] w-full"
        style={{ backgroundImage: "url('images/img_register.png')" }}
      >
        <div className="bg-blue-400_f7 flex flex-col justify-start pb-0.5 px-0.5 md:px-5 w-full">
          <Img
            className="h-[100px] md:ml-[0] ml-[616px] w-[100px]"
            src="images/img_delete.svg"
            alt="delete"
          />
          <Text
            className="md:ml-[0] ml-[214px] mt-[264px] md:text-5xl text-[70px] text-black-900 text-center"
            size="txtInterBlack70"
          >
            修改密碼
          </Text>
          <div className="flex flex-col gap-9 items-center justify-start md:ml-[0] ml-[65px] mt-12 w-[87%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[110px]"
                size="txtInterRegular30Black900"
              >
                原密碼：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pb-1.5 pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                xxxxxxxxxx
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-center w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[110px]"
                size="txtInterRegular30Black900"
              >
                新密碼：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pb-1.5 pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                xxxxxxxxxx
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[11px] items-center justify-center max-w-[659px] md:ml-[0] ml-[23px] mr-[34px] mt-[42px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[170px]"
              size="txtInterRegular30Black900"
            >
              確認新密碼：
            </Text>
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid justify-center pb-1.5 pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
              size="txtInterRegular30"
            >
              xxxxxxxxxx
            </Text>
          </div>
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] mb-52 min-w-[621px] md:min-w-full md:ml-[0] ml-[55px] mr-[39px] mt-[55px] rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            color="deep_purple_200"
            size="sm"
            variant="fill"
          >
            確認
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModifyPasswordPage;
