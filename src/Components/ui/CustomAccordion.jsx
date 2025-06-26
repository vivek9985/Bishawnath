/* eslint-disable react/prop-types */
import { AccordionItem as Item } from "@szhsin/react-accordion";
import { FaPlus } from 'react-icons/fa6';
const AccordionItem = ({
    header,
    initialEntered = false,
    children,
}) => {
    return (
        <Item
            initialEntered={initialEntered}
            header={({ state: { isEnter } }) => (
                <>
                    <h2 className="w-[90%] text-xl md:text-2xl duration-300 md:group-hover:translate-x-7">
                        {header}
                    </h2>
                    <div className={`w-6 md:w-8 h-6 md:h-8 rounded-full text-2xl bg-accent dark:bg-primary flex items-center justify-center md:text-3xl xl:text-4xl absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${isEnter && "rotate-[135deg]"}`}>
                        <FaPlus className="text-white dark:text-black text-sm md:text-xl" />
                    </div>
                </>
            )}
            className={({ isEnter }) => `rounded-3xl border-[1px] dark:border-[#ffffff2b] bg-[#0000000f]  dark:bg-[#ffffff0e] outfit transition-all duration-500 ${isEnter ? "" : ""}`}
            buttonProps={{
                className: ({ isEnter }) => `relative flex w-full py-5 px-6 lg:px-8 text-left cursor-pointer text-black dark:text-white group ${isEnter && ''}`
            }}
            contentProps={{ className: `text-black dark:text-white pr-10 transition-all duration-300 ease-out` }}
            panelProps={{ className: "p-6 pt-0" }}
        >
            <p className="">
                {children}
            </p>
        </Item>
    );
};

export default function CustomAccordion({ header, children, initialEntered }) {
    return (
        <AccordionItem header={header} initialEntered={initialEntered}>
            {children}
        </AccordionItem>
    );
}
