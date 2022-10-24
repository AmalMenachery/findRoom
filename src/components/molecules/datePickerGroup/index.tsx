import React, { useState } from "react";

import { Button } from "react-native-paper";
import styles from "./datePickerGroup.styles";

import Calendar from "@svg/calendar.svg";
import { DatePickerModal } from "react-native-paper-dates";
import { customFormatDate } from "@utils/dateTime";

export type DatePickerGroupProps = {
  testId: string;
  textColor: string;
  debounceTime?: number;
};

const DatePickerGroup: React.FC<DatePickerGroupProps> = ({
  testId,
  textColor,
}): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const [range, setRange] = React.useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({ startDate: undefined, endDate: undefined });

  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  return (
    <>
      <Button
        testID={testId}
        onPress={() => setOpen(true)}
        uppercase={false}
        mode="outlined"
        icon={Calendar}
        labelStyle={{ color: textColor }}
        style={styles.buttonStyle}
        color={"#0077FF"}
      >
        {`${customFormatDate(range?.startDate, "DD MMM")} - ${customFormatDate(
          range?.endDate,
          "DD MMM"
        )}`}
      </Button>
      <DatePickerModal
        locale="en"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default DatePickerGroup;
