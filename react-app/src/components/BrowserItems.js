import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { OptionContext } from "../context/OptionContext"
import { getAllUserNotes } from "../store/note";
import { getAllNotebooks } from "../store/notebook";
import { getAllTags } from "../store/tag";
import ListItems from "./ListItems";

const BrowserItems = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const sessionNotebooks = useSelector(state => state.notebooks.allNotebooks);
    const sessionTags = useSelector(state => state.tags.allTags);
    const sessionNotes = useSelector(state => state.notes.userNotes);
    const { option, optionContent, setOptionContent, currentOption, setCurrentOption } = useContext(OptionContext);

    useEffect(() => {
        const grabInformation = async () => {
            if (option === 'tags') {
                await dispatch(getAllTags(sessionUser.id));
                setOptionContent(Object.values(sessionTags));
            } else if (option === 'notebooks') {
                await dispatch(getAllNotebooks(sessionUser.id));
                setOptionContent(Object.values(sessionNotebooks));
            } else if (option === 'notes') {
                await dispatch(getAllUserNotes(sessionUser.id));
                setOptionContent(Object.values(sessionNotes));
            } else
                setOptionContent([]);
        };
        grabInformation();
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
                    {currentOption ? (
                        <div className="option-date-container">
                    <div style={{ fontSize: '45px', textAlign: 'center', maxWidth: '30rem' }}>
                        {currentOption.name}
                    </div>
                            <div className="option-dates">
                                <div className="date">
                                    <div className="twtypxtext">
                                        Date Created:
                                    </div>
                                    <div className="twtypxtext">
                                        {new Date(currentOption.createdAt).toDateString()}
                                    </div>
                                </div>
                                <div className="date">
                                    <div className="twtypxtext">
                                        Last Updated:
                                    </div>
                                    <div className="twtypxtext">
                                        {new Date(currentOption.updatedAt).toDateString()}
                                    </div>
                                </div>
                            </div>
                            {option === 'tags' && (
                                <div>
                                    <div>
                                        Associated notes:
                                    </div>
                                    <div>
                                        {currentOption.notes.length > 0 && (
                                            <ListItems arr={currentOption.notes} />
                                        )}
                                    </div>
                                </div>
                            )}
                            {option === 'notebooks' && (
                                <div>
                                    <div>
                                        Associated Notes:
                                    </div>
                                    <div>
                                        <ListItems arr={Object.values(sessionNotes).filter(note => note.notebookId === currentOption.id)} />
                                    </div>
                                </div>
                            )}
                            {option === 'notes' && (
                                <div className="option-details">
                                    <div className="twtypxtext">
                                        Notebook: {Object.values(sessionNotebooks).find(notebook => notebook.id === currentOption.notebookId).name}
                                    </div>
                                    <div className="twtypxtext mrgbtmtrtypx">
                                        Total Note Length: {currentOption.body.length} characters
                                    </div>
                                    <div className="note-preview-container">
                                        <div className="twtypxtext mrgbtmtenpx btmbrdr">
                                            Preview
                                        </div>
                                        <div>
                                                <div className="cntr">
                                                    {currentOption.body.slice(0, 799)}...
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div style={{ fontSize: '45px', textAlign: 'center', maxWidth: '30rem'}}>
                        {`Click on a ${option.slice(0, option.length - 1)} to view its details!`}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrowserItems;
