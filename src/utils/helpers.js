import React from "react";
import { useLocation } from "react-router-dom";
import TAG_COLORS from "./colorsTag";
import { PAGES_INFO } from "./path";

export const handleMultipleCheck = (event, values) => {
  let checked = values;

  if (event.target.checked) {
    checked = [...checked, event.target.value];
  } else {
    checked.splice(checked.indexOf(event.target.value), 1);
  }
  return checked;
};

export const checkPastDate = (date) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
};

export const getColorsTagClass = (tag) => {
  const tagColor = TAG_COLORS.find(
    (item) => item.name.toLowerCase() === tag.toLowerCase()
  );
  return tagColor?.colorClass || "most-least-assets";
};

export function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// eslint-disable-next-line arrow-body-style
export const getCountryTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};
const comparePath = (pathUrl, locationUrl) => {
  // debugger; // eslint-disable-line no-debugger
  const path = pathUrl?.split("/");
  const location = locationUrl.split("/");
  if (path.length !== location.length) return false;
  let isSamePath = true;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < location.length; i++) {
    if (!path[i].startsWith(":")) {
      if (location[i].toLowerCase() !== path[i].toLowerCase()) {
        isSamePath = false;
        break;
      }
    }
  }
  return isSamePath;
};

export const getPageInfo = (path) => {
  const getInfo = PAGES_INFO.find((item) =>
    comparePath(item?.pathName?.toLowerCase(), path?.toLowerCase())
  );
  return getInfo;
};

export const findMonthForXAxisToolTip = (data) => {
  const dataIndex = data?.dataPointIndex;
  const dateMiliSeconds = data?.w?.globals?.seriesX[0]?.[dataIndex];
  const month = new Date(dateMiliSeconds).toLocaleString("default", {
    month: "long",
  });
  return month;
};
