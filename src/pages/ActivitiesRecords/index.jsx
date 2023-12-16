import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";

const ActivitiesRecordsPage = () => {
  const table5Data = React.useRef([
    {
      oneHundredEightyOne: "運動會",
      oneHundredEightyTwo: "校級活動",
      rowonehundredeightythree: "xxxx/xx/xx",
      oneHundredEightyFive: "xxx / xxxx",
    },
    {
      oneHundredEightyOne: "SA 報告會",
      oneHundredEightyTwo: "系級活動",
      rowonehundredeightythree: "xxxx/xx/xx",
      oneHundredEightyFive: "xxx / xxx",
    },
    {
      oneHundredEightyOne: "SA 報告會",
      oneHundredEightyTwo: "系級活動",
      rowonehundredeightythree: "xxxx/xx/xx",
      oneHundredEightyFive: "xxx / xxx",
    },
    {
      oneHundredEightyOne: "SA 報告會",
      oneHundredEightyTwo: "系級活動",
      rowonehundredeightythree: "xxxx/xx/xx",
      oneHundredEightyFive: "xxx / xxx",
    },
    {
      oneHundredEightyOne: "SA 報告會",
      oneHundredEightyTwo: "系級活動",
      rowonehundredeightythree: "xxxx/xx/xx",
      oneHundredEightyFive: "xxx / xxx",
    },
  ]);
  const navigate = useNavigate();
  const table5Columns = React.useMemo(() => {
    const table5ColumnHelper = createColumnHelper();
    return [
      table5ColumnHelper.accessor("oneHundredEightyOne", {
        cell: (info) => (
          <Text
            className="pb-[25px] pl-[11px] pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[364px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動名稱
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("oneHundredEightyTwo", {
        cell: (info) => (
          <Text
            className="pb-[25px] pl-1.5 pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[329px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動類型
          </Text>
        ),
      }),
      table5ColumnHelper.accessor("rowonehundredeightythree", {
        cell: (info) => (
          <div className="flex flex-row gap-[146px] items-start justify-end p-[21px] sm:px-5">
            <Text
              className="mt-[69px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx
            </Text>
            <Text
              className="mb-0.5 mt-[67px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[77px] items-center justify-end min-w-[470px] md:pr-10 sm:pr-5 pr-[116px]">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動舉辦人
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              日期
            </Text>
          </div>
        ),
      }),
      table5ColumnHelper.accessor("oneHundredEightyFive", {
        cell: (info) => (
          <Text
            className="pb-[23px] sm:pl-5 pl-[35px] pt-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[535px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            目前參與人數/ 活動人數上限
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="h-[1080px] sm:h-[1162px] md:h-[1584px] m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[310px] w-full">
            <div className="flex flex-col items-center justify-end w-[89%] md:w-full">
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table5Columns}
                  data={table5Data.current}
                  rowClass={"border-b border-black-900"}
                  headerClass=""
                />
              </div>
              <Line className="bg-black-900 h-px mt-[91px] w-full" />
            </div>
            <List
              className="bg-lime-800 sm:flex-col flex-row md:gap-10 gap-[237px] grid md:grid-cols-1 grid-cols-2 justify-center p-[29px] sm:px-5 w-full"
              orientation="horizontal"
            >
              <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 gap-[81px] items-center justify-center sm:ml-[0] w-auto md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[109px]"
                  size="txtInterRegular30Black900"
                >
                  時間段：
                </Text>
                <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[463px] sm:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[60px]"
                    size="txtInterRegular30"
                  >
                    全部
                  </Text>
                </div>
                <Img
                  className="h-[45px] rounded-[20px] w-[45px]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-[51px] items-center justify-center sm:ml-[0] w-auto md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-[139px]"
                  size="txtInterRegular30Black900"
                >
                  執行動作：
                </Text>
                <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col items-center justify-center md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-[463px] sm:w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[60px]"
                    size="txtInterRegular30"
                  >
                    全部
                  </Text>
                </div>
                <Img
                  className="h-[45px] rounded-[20px] w-[45px]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </div>
            </List>
          </div>
          <div className="absolute sm:h-[273px] h-[295px] md:h-[385px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-7 sm:px-5 top-[0] w-full">
              <Img
                className="common-pointer h-[70px] ml-4 md:ml-[0]"
                src="images/img_home.svg"
                alt="home"
                onClick={() => navigate("/homenormaluser")}
              />
              <Img
                className="h-[120px] mb-0.5 md:ml-[0] ml-[41px] w-[120px]"
                src="images/img_returnbutton.svg"
                alt="returnbutton"
              />
              <Text
                className="md:ml-[0] ml-[471px] md:text-5xl text-[80px] text-amber-A400 text-center"
                size="txtInterRegular80"
              >
                活動紀錄
              </Text>
            </div>
            <Button
              className="common-pointer absolute border-2 border-black-900 border-solid bottom-[0] cursor-pointer h-[273px] leading-[normal] right-[3%] rounded-[136px] md:text-5xl text-6xl text-center w-[273px]"
              onClick={() => navigate("/activitiescollection")}
              color="purple_700"
              size="xl"
              variant="fill"
            >
              活動收藏
            </Button>
            <Button
              className="common-pointer absolute border-2 border-black-900 border-solid bottom-[0] cursor-pointer h-[273px] leading-[normal] right-[19%] rounded-[136px] md:text-5xl text-6xl text-center"
              onClick={() => navigate("/tracepublishercollection")}
              color="purple_700"
              size="xl"
              variant="fill"
            >
              <>
                追蹤
                <br />
                使用者
              </>
            </Button>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-center justify-start left-[4%] md:px-5 top-[21%] w-[23%]">
          <Text
            className="bg-white-A700 border-2 border-black-900 border-solid justify-center sm:mt-0 my-[9px] pl-[31px] pr-[35px] sm:px-5 py-[9px] rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[356px]"
            size="txtInterRegular30"
          >
            請輸入活動名稱
          </Text>
          <Img
            className="h-[74px] sm:ml-[0] ml-[5px] w-[74px]"
            src="images/img_search.svg"
            alt="search_One"
          />
        </div>
      </div>
    </>
  );
};

export default ActivitiesRecordsPage;
