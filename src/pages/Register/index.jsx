import React from "react";

import { Button, Text } from "components";

const RegisterPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1080px] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1200px] w-full"
        style={{ backgroundImage: "url('images/img_register.png')" }}
      >
        <div className="bg-blue-400_f7 flex flex-col justify-end p-[21px] md:px-5 w-full">
          <Text
            className="md:ml-[0] ml-[209px] mr-[196px] mt-[71px] md:text-5xl text-[70px] text-black-900 text-center"
            size="txtInterBlack70"
          >
            Sign Up
          </Text>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[46px] mr-[15px] mt-[46px] w-[92%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-center w-[608px] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[49px]"
                size="txtInterRegular30Black900"
              >
                姓：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[446px]"
                size="txtInterRegular30"
              >
                葉
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center mt-[37px] w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[50px]"
                size="txtInterRegular30Black900"
              >
                名：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                秋
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[11px] items-center justify-center mt-[33px] w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[137px]"
                size="txtInterRegular30Black900"
              >
                出生日期：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                2002-xx-xx
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-center mt-9 w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[93px]"
                size="txtInterRegular30Black900"
              >
                Email：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pb-1.5 pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                String value
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-center mt-7 w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[78px]"
                size="txtInterRegular30Black900"
              >
                電話：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                09xxxxxxxx
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-center mt-[35px] w-auto md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-20"
                size="txtInterRegular30Black900"
              >
                密碼：
              </Text>
              <Text
                className="bg-white-A700 border-2 border-black-900 border-solid justify-center pb-1.5 pl-[15px] sm:pr-5 pr-[35px] pt-3 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
                size="txtInterRegular30"
              >
                xxxxxxxxxx
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[11px] items-center justify-center max-w-[662px] ml-4 md:ml-[0] mt-9 w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-right w-[170px]"
              size="txtInterRegular30Black900"
            >
              使用者名稱：
            </Text>
            <Text
              className="bg-white-A700 border-2 border-black-900 border-solid justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[454px]"
              size="txtInterRegular30"
            >
              顯示給其他使用者的名字
            </Text>
          </div>
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full ml-9 md:ml-[0] mr-5 mt-6 rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            color="deep_purple_200"
            size="sm"
            variant="fill"
          >
            提交
          </Button>
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] mb-[38px] min-w-[311px] md:ml-[0] ml-[351px] mr-[15px] mt-[23px] rounded-[40px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            color="yellow_800_a5"
            size="md"
            variant="fill"
          >
            回到登入
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
