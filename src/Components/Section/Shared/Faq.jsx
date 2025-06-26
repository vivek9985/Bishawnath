import { Accordion } from "@szhsin/react-accordion";
import CustomAccordion from "../../ui/CustomAccordion";
import Tittle from "../../Tittle/Tittle";

export default function Faq() {
    const faqData = [
        {
            initialEntered: true,
            title: "What services do you offer?",
            description: "I provide a range of development services including Frontend Development (React, Next.js), Backend APIs (Node.js, Express), Mern-stack Solutions and MongoDB integration. Custom animations and responsive design are also included.",
            type: "services"
        },
        {
            initialEntered: false,
            title: "Do you work with custom designs?",
            description: "Yes, I can bring your custom designs to life or create designs from scratch based on your brand identity and user needs.",
            type: "services"
        },
        {
            initialEntered: false,
            title: "Can I get a custom pricing plan?",
            description: "Absolutely! I offer flexible pricing based on the complexity and scope of the project. Reach out with your requirements and I'll tailor a quote for you.",
            type: "sales&billings"
        },
        {
            initialEntered: false,
            title: "Do you offer support after project delivery?",
            description: "Yes, I provide post-launch support and maintenance to ensure your project continues running smoothly. Support plans can be discussed based on your needs.",
            type: "support"
        },
        {
            initialEntered: false,
            title: "How long does a typical project take?",
            description: "Project timelines vary depending on the scope, but small to medium projects usually take 1–4 weeks. I'll give a clear timeline during the planning phase.",
            type: "process"
        },
        {
            initialEntered: false,
            title: "What technologies do you use?",
            description: "I primarily use React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express, MongoDB, and GSAP for animations.",
            type: "tech"
        },
        {
            initialEntered: false,
            title: "Can you help with deploying the project?",
            description: "Yes, I can deploy your site on platforms like Vercel, Netlify, or your preferred hosting provider. I also handle basic server setup if required.",
            type: "process"
        }
    ]

    return (
        <div className="w-11/12 sm:max-w-[650px] lg:max-w-[815px] mx-auto my-[110px] xl:mb-40 px-4 lg:px-0">
            <div className="text-center">
                <Tittle text={"Faq"}></Tittle>
            </div>
            <Accordion transition transitionTimeout={300} className="flex flex-col gap-4 md:gap-6 mt-9 md:mt-12">
                {faqData?.map(({ title, description, initialEntered }, index) => (
                    <CustomAccordion key={index} header={title} initialEntered={initialEntered}>
                        {description}
                    </CustomAccordion>
                ))}
            </Accordion>
        </div>
    );
}
