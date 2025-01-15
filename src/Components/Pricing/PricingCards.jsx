import { FaRegCircleCheck } from "react-icons/fa6";

const PricingCards = () => {
    <div className="border-[1px] bg-[#201E1D] border-[#2e2c2b] rounded-xl">
        <div className="p-5 border-b-[1px] border-stone-700">
            <h2 className="text-white text-xl font-light">Basic</h2>
            <h2 className="text-white text-6xl font-medium tracking-[-10px] dhurjati">$10</h2>
            <a href="/contact" className="flex items-center justify-center w-full text-center font-medium py-3 px-5 bg-gradient-to-r from-lime-300 to-yellow-300 rounded-xl mt-4">Get Started</a>
        </div>
        <ul className="flex flex-col gap-3 text-white p-4 mt-2">
            <li className="flex items-center gap-2">
                <FaRegCircleCheck />
                <span>
                    3 Page design
                </span>
            </li>
            <li className="flex items-center gap-2">
                <FaRegCircleCheck />
                <span>
                    3 Times revission
                </span>
            </li>
            <li className="flex items-center gap-2">
                <FaRegCircleCheck />
                <span>
                    3 Page design
                </span>
            </li>
            <li className="flex items-center gap-2">
                <FaRegCircleCheck />
                <span>
                    3 Page design
                </span>
            </li>
        </ul>
    </div>
}

export default PricingCards;