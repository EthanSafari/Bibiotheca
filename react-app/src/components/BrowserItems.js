import { useContext, useEffect } from "react"
import { useSelector } from "react-redux";
import { OptionContext } from "../context/OptionContext"

const BrowserItems = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { option, setOption, optionContent, setOptionContent } = useContext(OptionContext);

    useEffect(() => {
        if (option === 'tags')
            setOptionContent(Object.values(sessionUser.tags));
        else if (option === 'notebooks')
            setOptionContent(Object.values(sessionUser.notebooks));
        else if (option === 'notes')
            setOptionContent(Object.values(sessionUser.notes));
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
