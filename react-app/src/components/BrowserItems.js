import { useContext, useEffect } from "react"
import { useSelector } from "react-redux";
import { OptionContext } from "../context/OptionContext"

const BrowserItems = () => {
    const sessionUser = useSelector(state => state.session.user);
    const sessionNotebooks = useSelector(state => state.notebooks.allNotebooks);
    const sessionTags = useSelector(state => state.tags.allTags);
    const sessionNotes = useSelector(state => state.notes.userNotes);
    const { option, optionContent, setOptionContent, currentOption, setCurrentOption } = useContext(OptionContext);

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
            {console.log(currentOption)}
            <div className="browser-choice">
                {`${sessionUser.firstName.toUpperCase() + 'S' + "'"} ${option.toUpperCase()}`}
            </div>
            <div className="browser-details">
                <div className="option-list">   
                <div className="option-list-item">
                    {optionContent.map(optionItem => (
                        <div key={optionItem.id} onClick={() => setCurrentOption(optionItem)}>
                            {optionItem.name}
                        </div>
                    ))}
                </div>
                </div>
                <div className="option-details">
                    <div>
                        {currentOption ? currentOption.name : 'Click on an option to see details of it!'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrowserItems;
