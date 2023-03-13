import { useState } from "react";
import { useSelector } from "react-redux";
import OpenModalButton from "./OpenModalButton";


const EditTagModalForm = ({ tag }) => {
  const sessionNotes = useSelector(state => state.notes.userNotes);

  const [selectedNotes, setSelectedNotes] = useState(tag.notes.map(tagNote => tagNote.id));

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

  return (
    <form className="update-tag-form">
      <h2>{tag?.name}</h2>
      <div>
        {Object.values(sessionNotes).map(note => (
          <div key={note.id}>
            <label>
              <input
                type="checkbox"
                value={note.id}
                checked={selectedNotes.includes(note.id)}
                onChange={handleTagNoteAlteration}
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
