import Image from "next/image";
import FaqItem from "./components/FaqItem";

export interface Item {
  question: string;
  answer: string;
}

let items: Item[] = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function Home() {
  return (
    <section className="flex min-h-dvh justify-center items-center">
      <div className="min-w-sm max-w-3xl flex flex-col gap-8 justify-center items-start bg-white px-10 py-10 rounded-4xl">
        {/* Title */}
        <div className="flex justify-center items-center gap-6">
          <Image
            src={"/icon-star.svg"}
            alt="Star icon"
            width={40}
            height={40}
          />

          <h1 className="font-bold text-6xl text-purple-950">FAQs</h1>
        </div>

        {/* Actual FAQ */}
        <div className="flex flex-col gap-2">
          {items.map((i, idx) => (
            <FaqItem key={idx} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
