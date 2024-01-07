import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";

const Accordion = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSingleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <MainLayout>
      <div className="flex h-full w-auto justify-center items-center flex-col gap-[20px]">
        <div className="w-[500px]">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="bg-[#0A174E] mb-[10px] px-[10px] py-[20px]">
                <div
                  className="text-[#F5D042] flex justify-between items-center cursor-pointer font-extrabold"
                  onClick={() => handleSingleSelection(dataItem.id)}
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="text-[#F5D042] font-extralight">
                    {dataItem.answer}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data Found!</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

export default Accordion;
