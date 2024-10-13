"use client";
import React, { KeyboardEvent, useCallback, useEffect } from "react";
import { ReactElement, ReactNode, useState } from "react";

type PaginationProps = {
  children: ReactNode[];
  itemsPerPage: number;
};
const Pagination = ({
  children,
  itemsPerPage,
}: PaginationProps): ReactElement => {
  const [, updateState] = useState<unknown>(null);
  const forceUpdate = useCallback(() => updateState({}), []);
  const [paginationBtn, setPaginationBtn] = useState<number[]>([]);
  const [paginationValues, setPaginationValues] = useState({
    currentPage: 0,
    itemsPerPage: itemsPerPage,
  });
  const [userPageSelection, setUserPageSelection] = useState<number>("");
  const getChildrenLength = (children: ReactNode[]): number => {
    return children.length;
  };
  const getPages = (): number => {
    const pages = getChildrenLength(children) / paginationValues.itemsPerPage;
    return pages % 1 === 0 ? pages : Math.floor(pages) + 1;
  };
  const paginate = (children: ReactNode[]): ReactNode[] => {
    return children.slice(
      paginationValues.currentPage * paginationValues.itemsPerPage,
      paginationValues.currentPage * paginationValues.itemsPerPage +
        paginationValues.itemsPerPage,
    );
  };
  const handlePageSelection = (pageNumber: number) => {
    if (![-3, -2, -1].includes(pageNumber)) {
      setPaginationValues((prev) => ({ ...prev, currentPage: pageNumber }));
    } else {
      switch (pageNumber) {
        case -4:
          //spread start
          break;
        case -5:
          //spread end
          break;
        case -3:
          setPaginationValues({
            ...paginationValues,
            currentPage:
              getSpreadPages(paginationBtn[3] ?? 0, paginationBtn[5] ?? 0) ?? 0,
          });
          //handlePageSelection(-3);
          break;
        case -2:
          setPaginationValues({
            ...paginationValues,
            currentPage:
              paginationValues.currentPage > 0
                ? paginationValues.currentPage - 1
                : paginationValues.currentPage,
          });

          break;
        case -1:
          setPaginationValues({
            ...paginationValues,
            currentPage:
              paginationValues.currentPage < getPages() - 1
                ? paginationValues.currentPage + 1
                : paginationValues.currentPage,
          });
          break;
        default:
          break;
      }
      //paginationButtons(pageNumber, true);
      forceUpdate();
    }
  };
  const handlePageInputSelection = (e: KeyboardEvent) => {
    if (e.key === "Enter") return handlePageSelection(userPageSelection);
    e.altKey.key;
  };
  const getSpreadPages = (endStart: number, startEnd: number) => {
    if (startEnd !== 0) {
      return startEnd - endStart;
    }
  };
  const getMiddleSpreadPageNumber = (endStart: number, startEnd: number) => {
    const diff = getSpreadPages(endStart, startEnd) ?? 0;
    console.log(diff);
    return Math.floor(getSpreadPages(endStart, startEnd) ?? 0 / 2);
  };
  const paginationButtons = (pageNumber: number, dots = false): void => {
    const full = Array.from({ length: getPages() }).map((_, idx) => idx);
    if (full.length <= 9) {
      setPaginationBtn([...full]);
    } else {
      const start = [...full].slice(pageNumber, pageNumber + 3);
      console.log("start", start);
      const spread = -3;
      const end = [...full].reverse().slice(0, 3).reverse();
      console.log("end", end);
      console.log("paginationBtn", [...start, spread, ...end]);
      const spreadPage = getMiddleSpreadPageNumber(pageNumber + 3, end[0] ?? 0);
      setPaginationBtn([...start, spread, ...end]);
    }
  };
  useEffect(() => {
    paginationButtons(0);
  }, []);
  useEffect(() => {
    paginationButtons(paginationValues.currentPage);
  }, [paginationValues]);

  return (
    <div className="">
      {paginate(children)}
      <div className="flex items-center justify-center">
        <span
          className={`mr-2 cursor-pointer px-1 py-1 font-bold  text-white `}
        >
          {"page " +
            (paginationValues.currentPage + 1) +
            " - " +
            getPages() +
            ""}
        </span>
        <span
          onClick={() => handlePageSelection(-2)}
          className={`cursor-pointer rounded border-2 px-2 py-1 font-bold text-white ${true}`}
        >
          {"<"}
        </span>
        {paginationBtn.map((pageNbr, idx) => (
          <span
            key={idx}
            onClick={() => handlePageSelection(pageNbr)}
            className={`cursor-pointer px-2 py-1 font-bold text-white ${
              pageNbr === paginationValues.currentPage
                ? "rounded border-2 border-blue-400"
                : ""
            }`}
          >
            {pageNbr === -3 ? "..." : pageNbr + 1}
          </span>
        ))}
        <span
          onClick={() => handlePageSelection(-1)}
          className={`cursor-pointer rounded border-2 px-2 py-1 font-bold text-white ${true}`}
        >
          {">"}
        </span>
        <span>
          <input
            type="text"
            className="w-12"
            onKeyUp={handlePageInputSelection}
            onChange={(e) => setUserPageSelection(Number(e.target.value) - 1)}
          />
          {"page"}
        </span>
        <span>
          <select
            className="ml-2 w-14 cursor-pointer rounded-md border px-2 py-1"
            onChange={(e) => {
              setPaginationValues({
                ...paginationValues,
                itemsPerPage: Number(e.target.value),
              });
              window.scrollTo({ top: 0 });
            }}
          >
            {[1, 2, 5, 10, 20, 50, 100].map((n) => {
              return (
                <option
                  key={n}
                  className="cursor-pointer font-semibold hover:bg-blue-100"
                  value={n}
                >
                  {n}
                </option>
              );
            })}
          </select>
        </span>
      </div>
    </div>
  );
};
export { Pagination };
