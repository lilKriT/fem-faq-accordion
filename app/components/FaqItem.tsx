"use client";

import Image from "next/image";
import { Item } from "../page";

type Props = {
  item: Item;
};

const clickHandler = () => {
  console.log("clicking");
};

const FaqItem = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-purple-950 bg-blue-200">
          {props.item.question}
        </h2>
        <button onClick={clickHandler} className="h-2 cursor-pointer">
          <Image
            src={"/icon-plus.svg"}
            alt="Expand question"
            height={32}
            width={32}
          />
        </button>
      </div>
      <p className="text-purple-600">{props.item.answer}</p>
    </div>
  );
};

export default FaqItem;
