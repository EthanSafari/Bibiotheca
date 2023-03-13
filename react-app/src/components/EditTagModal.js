import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTag } from "../store/tag";
import OpenModalButton from "./OpenModalButton";
import { useModal } from "../context/Modal";


const EditTagModalForm = ({ tag }) => {
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const sessionNotes = useSelector(state => state.notes.userNotes);
  const sessionUser = useSelector(state => state.session.user);

  const [selectedNotes, setSelectedNotes] = useState(tag.notes.map(tagNote => tagNote.id));
  const [editTagName, setEditTagName] = useState(tag?.name);

  const handleTagNoteAlteration = async (e) => {
    const noteId = parseInt(e.target.value);
    const isChecked = e.target.checked;
    if (isChecked) {
      async function addNoteToTag() {
        const response = await fetch(`/api/tags/${tag.id}/alter-notes/${noteId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
      }
      addNoteToTag();
      tag['notes'].push(sessionNotes[noteId]);
    } else {
      async function removeNoteFromTag() {
        const response = await fetch(`/api/tags/${tag.id}/alter-notes/${noteId}`, {
          method: 'DELETE',
        });
        const responseData = await response.json();
      };
      removeNoteFromTag();
      tag['notes'].splice(tag['notes'].indexOf(tag['notes'].find(note => note.id === noteId)), 1);
    };
    setSelectedNotes(notes => {
      if (isChecked) {
        return [...notes, noteId];
      } else {
        return notes.filter(id => id !== noteId);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedTag = {
      id: tag.id,
      name: editTagName,
      user_id: sessionUser.id,
    };
    await dispatch(editTag(editedTag));
    closeModal();
  };

  return (
    <form className="update-tag-form" onSubmit={handleSubmit}>
      <div className="exit-modal-button">
        <button className="exit-save-button"
        disabled={editTagName?.length < 1 || new Array(editTagName?.length).fill(' ').join('') === editTagName}
        >
          <i class="fa-regular fa-floppy-disk" style={{ fontSize: '16px' }}></i>
        </button>
      </div>
      <input
        type='text'
        placeholder={'Please enter a valid name*'}
        value={editTagName}
        onChange={e => setEditTagName(e.target.value)}
        required
        className='edit-tag-name'
      />
      <div>
        {Object.values(sessionNotes).map(note => (
          <div key={note.id} className='twtypxtext'>
            <label>
              <input
                type="checkbox"
                value={note.id}
                checked={selectedNotes.includes(note.id)}
                onChange={handleTagNoteAlteration}
                style={{marginRight: '5px'}}
              />
              {note.name}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};


const EditTagModal = ({ tag }) => {
  return (
    <OpenModalButton
      buttonText={<i class="fa-regular fa-pen-to-square edit-pencil"></i>}
      modalComponent={<EditTagModalForm tag={tag} />}
      onButtonClick={() => console.log("Greeting initiated")}
      onModalClose={() => console.log("Greeting completed")}
    />
  );
};

export default EditTagModal;
