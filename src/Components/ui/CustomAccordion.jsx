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
                    <h2 className="w-[90%] text-xl md:text-2xl outfit">
                        {header}
                    </h2>
                    <div className={`w-8 h-8 rounded-full text-2xl bg-black dark:bg-white flex items-center justify-center md:text-3xl xl:text-4xl absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-out ${isEnter && "rotate-[135deg]"}`}>
                        <FaPlus className="text-white dark:text-black" size={20} />
                    </div>
                </>
            )}
            className="rounded-[16px] bg-gradient-to-b from-[#c4c2c2] to-light dark:from-[#272626] dark:to-secondary transition-all duration-300"
            buttonProps={{
                className: ({ isEnter }) => `relative flex w-full p-6 text-left cursor-pointer text-black dark:text-white ${isEnter && ''}`
            }}
            contentProps={{ className: `text-black dark:text-white pr-10 transition-all duration-300 ease-out` }}
            panelProps={{ className: "p-6 pt-0" }}
        >
            <p className="outfit">
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
