"use client";

import Image from "next/image";
import { Item } from "../page";
import { useState } from "react";

type Props = {
  item: Item;
};

const FaqItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-black/10 last-of-type:border-b-0 py-4">
      {/* Title and button container */}
      <div className="flex justify-between items-center">
        {/* Title / question */}
        <h2 className="font-semibold text-lg text-purple-950 hover:text-purple-500 motion-safe:duration-150 ease-in-out text-balance">
          {props.item.question}
        </h2>
        {/* Button */}
        <button onClick={clickHandler} className="cursor-pointer shrink-0">
          {!isOpen ? (
            <Image
              src={"/icon-plus.svg"}
              alt="Expand question"
              height={32}
              width={32}
            />
          ) : (
            <Image
              src={"/icon-minus.svg"}
              alt="Expand question"
              height={32}
              width={32}
            />
          )}
        </button>
      </div>

      {/* Answer */}
      <div
        className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} duration-300 ease-in-out origin-top`}
      >
        <p className={`text-purple-600  overflow-hidden pt-4`}>
          {props.item.answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
