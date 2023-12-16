import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";

const HomeListVistorPage = () => {
  const table3Data = React.useRef([
    {
      oneHundredSixteen: "運動會",
      oneHundredSeventeen: "校級活動",
      rowonehundredeighteen: "xxxx/xx/xx",
      oneHundredTwenty: "參加",
    },
    {
      oneHundredSixteen: "SA 報告會",
      oneHundredSeventeen: "系級活動",
      rowonehundredeighteen: "xxxx/xx/xx",
      oneHundredTwenty: "參加",
    },
    {
      oneHundredSixteen: "SA 報告會",
      oneHundredSeventeen: "系級活動",
      rowonehundredeighteen: "xxxx/xx/xx",
      oneHundredTwenty: "參加",
    },
    {
      oneHundredSixteen: "SA 報告會",
      oneHundredSeventeen: "系級活動",
      rowonehundredeighteen: "xxxx/xx/xx",
      oneHundredTwenty: "參加",
    },
    {
      oneHundredSixteen: "SA 報告會",
      oneHundredSeventeen: "系級活動",
      rowonehundredeighteen: "xxxx/xx/xx",
      oneHundredTwenty: "參加",
    },
  ]);
  const navigate = useNavigate();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("oneHundredSixteen", {
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
            className="min-w-[364px] pb-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動名稱
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("oneHundredSeventeen", {
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
            className="min-w-[329px] pb-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            活動類型
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("rowonehundredeighteen", {
        cell: (info) => (
          <div className="flex flex-row gap-[146px] items-start justify-end p-[21px] sm:px-5">
            <Text
              className="mt-6 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx
            </Text>
            <Text
              className="mb-0.5 mt-[22px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[77px] items-start justify-end min-w-[470px] pb-[45px] md:pr-10 sm:pr-5 pr-[45px]">
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
      table3ColumnHelper.accessor("oneHundredTwenty", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row gap-[58px] items-center justify-end pl-3 py-3">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx / xxxx
            </Text>
            <Button
              className="cursor-pointer leading-[normal] min-w-[177px] sm:mt-0 mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              shape="round"
              color="gray_600"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[535px] pb-[35px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-right"
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
        <div className="sm:h-[1070px] h-[1080px] md:h-[1538px] m-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto pt-[310px] w-full">
            <div className="overflow-auto w-[89%]">
              <ReactTable
                columns={table3Columns}
                data={table3Data.current}
                rowClass={"border-b border-black-900"}
                headerClass=""
              />
            </div>
            <div className="bg-lime-800 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[19px] w-full">
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[209px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
                shape="round"
                color="teal_900"
                size="md"
                variant="fill"
              >
                校級活動
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
                shape="round"
                color="blue_700"
                size="md"
                variant="fill"
              >
                系級活動
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[212px]"
                shape="round"
                color="green_900"
                size="md"
                variant="fill"
              >
                社團活動
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] ml-6 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-center w-[292px]"
                shape="round"
                color="lime_800_01"
                size="md"
                variant="fill"
              >
                靜態休閒活動
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[22px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[292px]"
                shape="round"
                color="blue_800"
                size="md"
                variant="fill"
              >
                動態休閒活動
              </Button>
              <Button
                className="cursor-pointer font-semibold h-[74px] leading-[normal] md:ml-[0] ml-[23px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[132px]"
                shape="round"
                color="yellow_800"
                size="md"
                variant="fill"
              >
                其他
              </Button>
            </div>
          </div>
          <div className="absolute md:h-[263px] h-[295px] sm:h-[364px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="absolute bg-blue_gray-700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-5 top-[0] w-full">
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[168px] sm:mt-0 my-[34px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/homevistor")}
                shape="round"
                color="purple_500"
                size="sm"
                variant="fill"
              >
                Switch
              </Button>
              <Img
                className="h-[87px] mb-[34px] ml-7 sm:ml-[0] sm:mt-0 mt-[15px]"
                src="images/img_messagebell_gray_600.svg"
                alt="messagebell"
              />
              <Text
                className="sm:ml-[0] ml-[1421px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                訪客
              </Text>
            </div>
            <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start p-[55px] md:px-10 sm:px-5 right-[17%] rounded-[106px] top-[3%] w-[213px]">
              <Text
                className="my-5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                商城
              </Text>
            </div>
            <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start p-[54px] md:px-10 sm:px-5 right-[29%] rounded-[106px] top-[3%] w-[213px]">
              <Text
                className="my-[21px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                組織
              </Text>
            </div>
            <div className="absolute bg-gray-600 bottom-[0] flex flex-col h-[266px] inset-x-[0] items-center justify-center mx-auto p-[31px] sm:px-5 rounded-[50%] w-[266px]">
              <Text
                className="my-[70px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                管理活動
              </Text>
            </div>
            <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start left-[29%] p-[54px] md:px-10 sm:px-5 rounded-[106px] top-[3%] w-[213px]">
              <Text
                className="my-[21px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                帳號
              </Text>
            </div>
            <div className="absolute bg-gray-600 flex flex-col h-[213px] items-center justify-start left-[17%] p-[55px] md:px-10 sm:px-5 rounded-[106px] shadow-bs top-[3%] w-[213px]">
              <Text
                className="my-5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                好友
              </Text>
            </div>
            <Button
              className="common-pointer absolute bottom-[32%] cursor-pointer font-semibold leading-[normal] min-w-[120px] right-[5%] sm:text-4xl md:text-[38px] text-[40px] text-center"
              onClick={() => navigate("/")}
              shape="round"
              color="blue_300_c9"
              size="sm"
              variant="fill"
            >
              登入
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

export default HomeListVistorPage;
