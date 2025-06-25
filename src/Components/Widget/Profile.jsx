import profile from "../../assets/vivek.png";
import circleText from "../../assets/circle-text.png";

const Profile = () => {
    return (
        <div className="w-[90px] h-[90px] relative" >
            <div className="w-[90px] h-[90px] overflow-hidden rotate-animation">
                <img
                    src={circleText}
                    alt="text"
                    className="w-full h-full rounded-full select-none dark:invert"
                />
            </div>
            <div className="absolute w-14 h-14 top-0 bottom-0 left-0 right-0 m-auto">
                <div className="relative bg-accent dark:bg-primary rounded-full overflow-hidden">
                    <img
                        src={profile}
                        alt="Vivek"
                        className="w-full h-full rounded-full select-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;