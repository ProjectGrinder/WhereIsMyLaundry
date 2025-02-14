type Props = {
    title: string;
    data: string[];
    onSet: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchDropdown({title, data, onSet }: Props) {

    return (
        <>
            <select onChange={(e) => onSet(e.target.value)} defaultValue="">
                <option value="" disabled hidden>
                {title}
                </option>
                {data.map((name, index) => (
                <option key={index + 1} value={name}>
                    {name}
                </option>
                ))}
            </select>
        </>
    );
}