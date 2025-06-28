/* eslint-disable react/prop-types */

const Paragraph = ({ children, className }) => {
    return (
        <p className={`font-medium dark:text-primary outfit text-base md:text-xl ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;