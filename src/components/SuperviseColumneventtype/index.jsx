import React from "react";

import { Text } from "components";

const SuperviseColumneventtype = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-center justify-between mt-1 w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
            size="txtInterSemiBold40"
          >
            {props?.eventtype}
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
            size="txtInterSemiBold40"
          >
            {props?.eventlevel}
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
            size="txtInterSemiBold40"
          >
            {props?.eventtext}
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-auto"
            size="txtInterSemiBold40"
          >
            {props?.eventdate}
          </Text>
          <div className="h-[60px] md:h-[65px] relative w-[13%] md:w-full">
            <div className="absolute bg-green-A400 bottom-[0] h-[65px] inset-x-[0] mx-auto rounded-[30px] w-full"></div>
            <Text
              className="absolute bottom-[13%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-max"
              size="txtInterSemiBold30Black900"
            >
              {props?.resulttext}
            </Text>
          </div>
          <div className="h-[60px] md:h-[65px] relative w-[13%] md:w-full">
            <div className="absolute bg-red-800_01 bottom-[0] h-[65px] inset-x-[0] mx-auto rounded-[30px] w-full"></div>
            <Text
              className="absolute bottom-[13%] inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-max"
              size="txtInterSemiBold30Black900"
            >
              {props?.violationtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

SuperviseColumneventtype.defaultProps = {
  eventtype: "運動會",
  eventlevel: "校級活動",
  eventtext: "xxx",
  eventdate: "xxxx/xx/xx",
  resulttext: "合格",
  violationtext: "違反規範",
};

export default SuperviseColumneventtype;
