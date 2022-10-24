import { MONTHS_NAME, WEEKS_NAME } from "@constants/common";
import { DateFormats } from "@types/common";

export const convertTo12 = (time: string): string => {
  if (!time) {
    return "";
  }
  const [hours24, min] = time?.trim()?.split(":");
  const hours24num = Number(hours24);
  const meridian = hours24num < 12 ? "am" : "pm";
  const hours12 = hours24num % 12 === 0 ? 12 : hours24num % 12;
  return `${hours12 < 10 ? "0" + hours12 : hours12}:${min} ${meridian}`;
};

export const getCurrentTimestampInSec = () => {
  return new Date().getTime() / 1000;
};

export const mergeDateAndTime = (date: Date, time: Date): Date => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds()
  );
};

export const getMonthName = (
  month: number,
  fullName?: boolean,
  isUpperCase?: boolean
) => {
  var monthName = MONTHS_NAME[month];
  let tm = fullName ? monthName : monthName?.substring(0, 3);
  return isUpperCase ? tm?.toUpperCase() : tm;
};
export const getWeekName = (
  week: number,
  fullName?: boolean,
  isUpperCase?: boolean
) => {
  var weekName = WEEKS_NAME[week];
  let tw = fullName ? weekName : weekName?.substring(0, 3);
  return isUpperCase ? tw?.toUpperCase() : tw;
};

export const addZeroAsPrefix = (data: number | string) => {
  let num = parseInt(data?.toString());
  let isNegative = num < 0;
  num = Math.abs(num);
  let f = num > 9 ? num : `0${num}`;
  return isNegative ? `-${f}` : f;
};

export const getTimeStampInMilliSecond = (inputDate) => {
  let d = inputDate?.toString()?.split("T");
  let date = `${d?.[0]} ${d?.[1]?.split("+")?.[0]}`;
  return inputDate ? new Date(date).getTime() : new Date().getTime();
};
export const get12HourTime = (hour: number | string, min: number | string) => {
  hour = parseInt(hour.toString());
  return hour >= 12
    ? `${hour === 12 ? hour : addZeroAsPrefix(hour - 12)}:${addZeroAsPrefix(
        min
      )} PM`
    : `${addZeroAsPrefix(hour)}:${addZeroAsPrefix(min)}  AM`;
};

export const customFormatDate = (
  inputDate: Date | string | undefined | null,
  format: DateFormats,
  isIsoString = false
) => {
  let date = inputDate;
  if (isIsoString && date) {
    let d = inputDate?.toString()?.split("T");
    date = `${d?.[0]} ${d?.[1]?.split("+")?.[0]}`;
    // date = Date.parse(inputDate as string);
  }
  date = date || new Date();
  const td = typeof date === "object" ? date : new Date(date);
  const d = {
    date: td.getDate(),
    day: td.getDay(),
    month: td.getMonth(),
    year: td.getFullYear(),
    hours: td.getHours(),
    min: td.getMinutes(),
    sec: td.getSeconds(),
  };

  switch (format) {
    case "DateObject":
      return td;
    case "DD MMM YYYY":
      return `${d.date} ${getMonthName(d.month)} ${d.year}`;
    case "HH:mm":
      return `${addZeroAsPrefix(d.hours)}:${addZeroAsPrefix(d.min)}`;
    case "hh:mm A":
      return `${get12HourTime(d.hours, d.min)}`;
    case "DD MMM YYYY, HH:mm":
      return `${d.date} ${getMonthName(d.month)} ${d.year}, ${addZeroAsPrefix(
        d.hours
      )}:${addZeroAsPrefix(d.min)}`;
    case "DD MMM YYYY HH:mm":
      return `${d.date} ${getMonthName(d.month)} ${d.year}, ${addZeroAsPrefix(
        d.hours
      )}:${addZeroAsPrefix(d.min)}`;
    case "DD MMM YYYY, hh:mm A":
      return `${d.date} ${getMonthName(d.month)} ${d.year}, ${get12HourTime(
        d.hours,
        d.min
      )}`;
    case "DD MMM YYYY, ddd":
      return `${d.date} ${getMonthName(d.month)} ${d.year}, ${getWeekName(
        d.day
      )}`;
    case "DD MMM YYYY | ddd":
      return `${d.date} ${getMonthName(d.month)} ${d.year} | ${getWeekName(
        d.day
      )}`;
    case "MMM DD, YYYY":
      return `${getMonthName(d.month)} ${d.date}, ${d.year}`;
    case "DD MMM":
        return `${d.date} ${getMonthName(d.month)}`;
    case "ddd":
      return `${getWeekName(d.day)}`;
    case "dddd, DD MMM YYYY":
      return `${getWeekName(d.day, true)}, ${d.date} ${getMonthName(d.month)} ${
        d.year
      }`;
    case "DD/MM/YYYY":
      return `${d.date}/${addZeroAsPrefix(d.month + 1)}/${d.year}`;
    case "MM/DD/YYYY":
      return `${addZeroAsPrefix(d.month + 1)}/${d.date}/${d.year}`;
    case "YYYY-MM-DD":
    default:
      return `${d.year}-${addZeroAsPrefix(d.month + 1)}-${d.date}`;
  }
};

export const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);
  return [h, m > 9 ? m : h ? "0" + m : m || "0", s > 9 ? s : "0" + s]
    .filter(Boolean)
    .join(":");
};
