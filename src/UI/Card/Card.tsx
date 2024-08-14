import "./Card.css";
import Radio from "../RadioButton";
import CircleIcone from "UI/CircleIcone/CircleIcone";

type cardType = {
  label?: string;
  type?: string;
};

interface cardProps {
  id?: number;
  cardType?: cardType;
  disabled?: boolean;
  selectCard?: string;
  radioOptions?: {
    label?: string;
    value?: string;
    description?: string;
    price?: string;
  };
  className: string;
  setSelectCard: (value: string) => void;
}

function Card({
  id,
  radioOptions,
  selectCard,
  className,
  setSelectCard,
}: cardProps) {
  return (
    <Radio
      value={radioOptions?.value}
      selected={selectCard}
      handleSelected={setSelectCard}
      isGroupRadio={true}
    >
      <div className="flex justify-between items-center w-full">
        <div>
          <span>{radioOptions?.label}</span>
          <p className="text-[#7E7E7E] text-[1.2rem]">
            {radioOptions?.description}
          </p>
        </div>
        <p className="text-[1.2rem] md:text-[1.4rem]">${radioOptions?.price}</p>
      </div>
    </Radio>
  );
}

export default Card;
