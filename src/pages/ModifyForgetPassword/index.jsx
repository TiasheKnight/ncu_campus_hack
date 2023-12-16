import React from "react";

import { Button, Text } from "components";

const ModifyForgetPasswordPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1080px] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1200px] w-full"
        style={{ backgroundImage: "url('images/img_register.png')" }}
      >
        <div className="bg-blue-400_f7 flex flex-col justify-end p-9 md:px-5 w-full">
          <Text
            className="mt-[328px] mx-auto md:text-5xl text-[70px] text-black-900 text-center"
            size="txtInterBlack70"
          >
            重設密碼
          </Text>
          <div className="flex flex-col gap-9 items-center justify-start md:ml-[0] ml-[31px] mt-12 w-[96%] md:w-full">
            <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-center w-auto md:w-full">
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
                xxxx@xxxxx.xxx
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
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full md:ml-[0] ml-[21px] mr-[5px] mt-[153px] rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            color="deep_purple_200"
            size="sm"
            variant="fill"
          >
            確認
          </Button>
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] mb-[19px] min-w-[311px] md:ml-[0] ml-[321px] mr-[15px] mt-[73px] rounded-[40px] sm:text-4xl md:text-[38px] text-[40px] text-center"
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

export default ModifyForgetPasswordPage;
