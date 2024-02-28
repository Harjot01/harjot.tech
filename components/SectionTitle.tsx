interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <h2 className="font-titleFont text-2xl font-semibold flex items-center ">
            {title}
            <span className="hidden md:inline-flex md:w-80 lgl:w-96 h-[2px] bg-secondary dark:bg-textDark ml-6"></span>
        </h2>
    );
};

export default SectionTitle;
