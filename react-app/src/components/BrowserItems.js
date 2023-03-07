import { useContext, useEffect } from "react"
import { useSelector } from "react-redux";
import { OptionContext } from "../context/OptionContext"

const BrowserItems = () => {
    const sessionNotebooks = useSelector(state => state.notebooks.allNotebooks);
    const sessionTags = useSelector(state => state.tags.allTags);
    const sessionNotes = useSelector(state => state.notes.userNotes);
    const { option, setOption, optionContent, setOptionContent } = useContext(OptionContext);

    useEffect(() => {
        if (option === 'tags')
            setOptionContent(Object.values(sessionTags));
        else if (option === 'notebooks')
            setOptionContent(Object.values(sessionNotebooks));
        else if (option === 'notes')
            setOptionContent(Object.values(sessionNotes));
        else
            setOptionContent([]);
    }, [option]);
    return (
        <div className="browser">
            {option}
            {optionContent.map(optionItem => (
                <div>
                    {optionItem.name}
                </div>
            ))}
        </div>
    );
};

export default BrowserItems;
