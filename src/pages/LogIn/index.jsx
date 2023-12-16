import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const LogInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1080px] items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[1200px] w-full"
        style={{ backgroundImage: "url('images/img_register.png')" }}
      >
        <div className="bg-blue-400_f7 flex flex-col items-center justify-start p-[41px] md:px-5 w-full">
          <div className="flex flex-col justify-start mb-[83px] mt-[43px] w-[98%] md:w-full">
            <Text
              className="md:ml-[0] ml-[188px] md:text-5xl text-[70px] text-black-900 text-center"
              size="txtInterBlack70"
            >
              Sign In
            </Text>
            <Text
              className="ml-28 md:ml-[0] sm:text-[40px] md:text-[46px] text-[50px] text-center text-lime-500_9e"
              size="txtInterBlack50"
            >
              中央大學校園雷達
            </Text>
            <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mt-[90px] w-[91%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-center w-auto sm:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[94px]"
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
              <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-center mt-[45px] w-auto sm:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[79px]"
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
              <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-end md:ml-[0] ml-[108px] mt-4 w-[81%] md:w-full">
                <Button
                  className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] mb-[47px] min-w-[113px] rounded-[17px] text-center text-xl"
                  onClick={() => navigate("/modifyforgetpassword")}
                  color="red_A100_a5"
                  size="xs"
                  variant="fill"
                >
                  忘記密碼
                </Button>
                <Button
                  className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[321px] rounded-[40px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                  onClick={() => navigate("/homenormaluser")}
                  color="yellow_800_a5"
                  size="md"
                  variant="fill"
                >
                  登入
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[29px] items-center justify-start mt-[206px] w-full">
              <Button
                className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/homevistor")}
                color="orange_50_a5"
                size="sm"
                variant="fill"
              >
                訪客瀏覽
              </Button>
              <Button
                className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/register")}
                color="orange_50_a5"
                size="sm"
                variant="fill"
              >
                註冊
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
