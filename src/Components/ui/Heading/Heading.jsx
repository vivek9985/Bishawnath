/* eslint-disable react/prop-types */

const Heading = ({ children, className }) => {
    return (
        <h2 className={`font-medium dark:text-primary lobster text-3xl md:text-4xl lg:text-5xl ${className}`}>
            {children}
        </h2>
    );
};

export default Heading;