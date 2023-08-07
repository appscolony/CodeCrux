import React from "react";

const Tooltip = ({
    text,
    children,
}: {
    text: string;
    children: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    if (text === "") return <>{children}</>;

    return (
        <>
            <div
                className="hover:cursor-pointer h-fit w-fit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {children}
            </div>
            {isHovered && (
                <div className="absolute mt-[4px] left-1/2 -translate-x-1/2 bg-black border border-borders text-white px-[8px] py-[4px] rounded text-[14px]">
                    {text}
                </div>
            )}
        </>
    );
};

export default Tooltip;
