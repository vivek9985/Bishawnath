import profile from "../../assets/vivek.png";


const HeroProfile = () => {
    return (
        <div className="shadow-2xl shadow-accent dark:shadow-primary dark:shadow-lg w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] 2xl:w-[450px] 2xl:h-[450px] bg-accent dark:bg-primary radius-animation overflow-hidden">
            <img src={profile} alt="profile" className="w-full h-full object-cover" />
        </div>
    );
};

export default HeroProfile;