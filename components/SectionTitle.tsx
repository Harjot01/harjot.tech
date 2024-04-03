interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <h2 className="font-titleFont text-center md:text-left text-textDarkGreen dark:text-textGreen text-3xl font-semibold  ">
            {title}
        </h2>
    );
};

export default SectionTitle;
