interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <h2 className="font-titleFont text-center md:text-left text-textDarkGreen dark:text-textGreen text-3xl font-semibold  ">
            {title}
            {/* <span className="hidden md:inline-flex md:w-80 lgl:w-96 h-[2px] bg-secondary dark:bg-textDark ml-6"></span> */}
        </h2>
    );
};

export default SectionTitle;
