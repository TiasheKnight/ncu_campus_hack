import React from "react";

import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, Text } from "components";
import Footer from "components/Footer";

const HomeListNormalUserPage = () => {
  const table2Data = React.useRef([
    {
      fifty: "運動會",
      fiftyOne: "校級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
    {
      fifty: "SA報告會",
      fiftyOne: "系級活動",
      rowfiftytwo: "xxxx/xx/xx",
      fiftyFour: "參加",
    },
  ]);
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("fifty", {
        cell: (info) => (
          <Text
            className="py-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
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
      table2ColumnHelper.accessor("fiftyOne", {
        cell: (info) => (
          <Text
            className="py-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
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
      table2ColumnHelper.accessor("rowfiftytwo", {
        cell: (info) => (
          <div className="flex flex-row gap-[156px] items-center justify-start p-5">
            <Text
              className="mb-0.5 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx
            </Text>
            <Text
              className="my-[5px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[77px] items-start justify-start min-w-[470px] pb-[45px] md:pr-10 sm:pr-5 pr-[45px]">
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
      table2ColumnHelper.accessor("fiftyFour", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row gap-[50px] items-center justify-end pl-[13px] py-[13px]">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              xxx / xxxx
            </Text>
            <Button
              className="cursor-pointer font-semibold leading-[normal] min-w-[177px] text-3xl sm:text-[26px] md:text-[28px] text-center"
              shape="round"
              color="green_800"
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
        <div className="absolute bottom-[0] md:h-[1071px] h-[1177px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-100 h-[1071px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <div className="overflow-auto absolute bottom-[0] inset-x-[0] mx-auto w-[89%]">
            <ReactTable
              columns={table2Columns}
              data={table2Data.current}
              rowClass={"border-b border-black-900"}
              headerClass=""
            />
          </div>
        </div>
        <Footer className="absolute bg-lime-800 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
        <div className="absolute md:h-[266px] h-[304px] sm:h-[382px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="md:h-[266px] h-[304px] sm:h-[382px] m-auto w-full">
            <div className="absolute bg-blue_gray-700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto p-5 top-[0] w-full">
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[168px] sm:mt-0 my-[34px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                onClick={() => navigate("/homenormaluser")}
                shape="round"
                color="purple_500"
                size="sm"
                variant="fill"
              >
                Switch
              </Button>
              <Img
                className="h-[87px] ml-7 sm:ml-[0]"
                src="images/img_messagebell.svg"
                alt="messagebell"
              />
              <Text
                className="sm:ml-[0] ml-[1338px] sm:mt-0 my-6 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                size="txtInterRegular50"
              >
                <>
                  使用者名稱
                  <br />
                  UserID
                </>
              </Text>
            </div>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] right-[16%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[6%] w-[213px]"
              onClick={() => navigate("/store")}
              color="deep_purple_A200_01"
              size="xl"
              variant="fill"
            >
              商城
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] right-[29%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[6%] w-[213px]"
              onClick={() => navigate("/organizationmanagement")}
              color="yellow_900"
              size="xl"
              variant="fill"
            >
              組織
            </Button>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-semibold h-[266px] inset-x-[0] leading-[normal] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-center w-[266px]"
              onClick={() => navigate("/activitiesmanagement")}
              shape="circle"
              color="lime_800_02"
              size="xl"
              variant="fill"
            >
              管理活動
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] left-[30%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[6%] w-[213px]"
              onClick={() => navigate("/accountmanagement")}
              color="teal_300"
              size="xl"
              variant="fill"
            >
              帳號
            </Button>
            <Button
              className="common-pointer absolute cursor-pointer font-semibold h-[213px] leading-[normal] left-[17%] rounded-[106px] sm:text-[40px] md:text-[46px] text-[50px] text-center top-[6%] w-[213px]"
              onClick={() => navigate("/friends")}
              color="light_green_700"
              size="xl"
              variant="fill"
            >
              好友
            </Button>
          </div>
          <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-5 items-center justify-start left-[4%] w-[23%]">
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
      </div>
    </>
  );
};

export default HomeListNormalUserPage;
