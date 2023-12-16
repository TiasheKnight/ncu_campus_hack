import React from "react";

import { Button, Line, Text } from "components";

const ActivitiesManagementStackxxxxxxxx = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start ml-[undefinedpx] my-auto w-[96%] z-[1]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
              <div className="h-[99px] relative w-[51%] md:w-full">
                <div className="absolute flex inset-y-[0] left-[0] my-auto w-[90%] md:w-full">
                  <Text
                    className="ml-[undefinedpx] my-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[52%] sm:w-full z-[1]"
                    size="txtInterRegular40"
                  >
                    {props?.reporttitle}
                  </Text>
                  <Text
                    className="ml-[-0.01px] my-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[49%] sm:w-full z-[1]"
                    size="txtInterRegular40"
                  >
                    {props?.activitytitle}
                  </Text>
                </div>
                <Text
                  className="absolute h-full inset-y-[0] my-auto right-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[11%] sm:w-full"
                  size="txtInterRegular40"
                >
                  {props?.xxxtext}
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[103px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[16%] sm:w-full"
                size="txtInterRegular40"
              >
                {props?.datetext}
              </Text>
              <Text
                className="md:ml-[0] ml-[86px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[14%] sm:w-full"
                size="txtInterRegular40"
              >
                {props?.passwordtext}
              </Text>
              <Button
                className="!text-white-A700_a2 cursor-pointer font-bold font-inter h-[54px] leading-[normal] md:mt-0 my-[22px] rounded-[27px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[130px]"
                color="purple_800"
                size="sm"
                variant="fill"
              >
                {props?.modifybutton}
              </Button>
            </div>
            <Line className="bg-black-900 h-px w-full" />
          </div>
        </div>
        <Button
          className="!text-white-A700_a2 cursor-pointer font-bold font-inter h-[54px] leading-[normal] ml-[-41px] my-auto rounded-[27px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[130px] z-[1]"
          color="red_800"
          size="sm"
          variant="fill"
        >
          {props?.revokebutton}
        </Button>
      </div>
    </>
  );
};

ActivitiesManagementStackxxxxxxxx.defaultProps = {
  reporttitle: "SA報告會",
  activitytitle: "系級活動",
  xxxtext: "xxx",
  datetext: "xxxx/xx/xx",
  passwordtext: "xxxx/xx",
  modifybutton: "修改",
  revokebutton: "撤銷",
};

export default ActivitiesManagementStackxxxxxxxx;
