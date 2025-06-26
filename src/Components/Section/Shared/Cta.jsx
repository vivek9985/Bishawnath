import Bg from "../../../assets/cta-bg.mp4"
import BgLight from "../../../assets/cta-bg-light.mp4"
import PrimaryButton from './../../ui/Button/PrimaryButton';
import { Link } from "react-router-dom";

const Cta = () => {
    return (
        <section className="pb-40">
            <div className="w-[1200px] h-[600px] mx-auto rounded-[50px] overflow-hidden relative">
                <video
                    className="w-full hidden dark:block invert"
                    loop
                    muted
                    autoPlay
                >
                    <source
                        src={Bg}
                        type="video/mp4"
                    />
                </video>
                <video
                    className="w-full block dark:hidden"
                    loop
                    muted
                    autoPlay
                >
                    <source
                        src={BgLight}
                        type="video/mp4"
                    />
                </video>
                <div className="w-full h-full absolute left-0 top-0 bg-white/20 dark:bg-[#0000008b] flex items-center justify-center">
                    <div className="text-black dark:text-white text-center outfit">
                        <h2 className="text-[56px] font-light leading-[120%]">
                            Ready to <span className="lobster text-accent dark:text-primary">Supercharge</span>
                            <br />
                            Your web application?
                        </h2>
                        <p className="text-xl tracking-wide mt-5 mb-10">Let&apos;s Build Together</p>
                        <Link to="/contact" className="w-fit block mx-auto"><PrimaryButton text="Let's Talk" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;