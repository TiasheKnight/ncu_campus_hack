import React from "react";

import { Text } from "components";

const GeneralActivitiesFormRowtitleSeven = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
          size="txtInterRegular30Black900"
        >
          {props?.activitytitle}
        </Text>
        <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[522px] sm:w-full">
          {!!props?.activitydescription ? (
            <Text
              className="max-w-[422px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-400"
              size="txtInterRegular30"
            >
              {props?.activitydescription}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

GeneralActivitiesFormRowtitleSeven.defaultProps = {
  activitytitle: "活動內容：",
};

export default GeneralActivitiesFormRowtitleSeven;
