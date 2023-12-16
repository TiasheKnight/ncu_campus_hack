import React from "react";

import { Button, Line, Text } from "components";

const OrganizationPowerEditColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[13px] justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[11px] w-[82%] md:w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {props?.presidenttext}
            </Text>
            <Text
              className="md:ml-[0] ml-[175px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {props?.administratortext}
            </Text>
            <Button
              className="!text-white-A700_a2 cursor-pointer font-inter font-medium h-[74px] leading-[normal] md:ml-[0] ml-[638px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[177px]"
              shape="round"
              color="red_800"
              size="md"
              variant="fill"
            >
              {props?.removebutton}
            </Button>
          </div>
          <Line className="bg-black-900 h-px w-full" />
        </div>
      </div>
    </>
  );
};

OrganizationPowerEditColumn.defaultProps = {
  presidenttext: "中文系學會會長",
  administratortext: "管理員",
  removebutton: "移除",
};

export default OrganizationPowerEditColumn;
