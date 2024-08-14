import React, { Children, ReactNode, useState } from "react";
import "./Radio.css";

interface radioProps {
  label?: string;
  value?: string;
  selected?: string;
  isSelect?: false;
  // radioList: radioList[];
  handleSelected?: (radioSeletecd: string) => void;
  isGroupRadio?: boolean;
  selectState?: (state: boolean) => void;
  children: ReactNode;
  childrenClassName?: string;
}

function Radio({
  label,
  value,
  selected,
  handleSelected,
  isGroupRadio,
  isSelect,
  selectState,
  children,
  childrenClassName,
}: radioProps) {
  const [isSelected, setIsSelected] = useState(false);

  const isChecked = isGroupRadio ? value === selected : isSelected;

  /**
   *recuper la valeur selectionner lorsqu'il s'agit d'un group de list
   * @param radioValue la valeur du radio selectionner
   */
  const handleRadioChange = (radioValue: string) => {
    handleSelected!(radioValue);
  };

  /**
   * *recuper la valeur selectionner lorsqu'il s'agit d'un radio button
   */
  const handleIsSelected = () => {
    setIsSelected(!isSelected);
    selectState!(!isSelected);
  };

  // const isListGroup = isGroupRadio ? handleIsSelected : handleRadioChange;

  return (
    <div
      className={`flex space-x-[1.3rem]  items-center cursor-pointer hover:border-black border-[1px] border-[#E5E5E5]  rounded-[12px] p-[1.2rem] ${
        isChecked && "!border-black"
      }`}
      onClick={() =>
        isGroupRadio ? handleRadioChange(value!) : handleIsSelected()
      }
    >
      <div
        className={`radio-outer-circle flex-shrink-0 ${
          isChecked && "outer-selected"
        }`}
      >
        <div
          className={`radio-inner-circle ${isChecked && "inner-selected"}`}
        />
      </div>
      <div className={`${childrenClassName} w-full`}>{children}</div>
    </div>
  );
}

export default Radio;
