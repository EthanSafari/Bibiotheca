import OpenModalButton from "./OpenModalButton";


const EditTagModal = ({ tag }) => {
    return (
      <OpenModalButton
        buttonText={<i class="fa-regular fa-pen-to-square edit-pencil"></i>}
        modalComponent={<h2>{tag?.name}</h2>}
        onButtonClick={() => console.log("Greeting initiated")}
        onModalClose={() => console.log("Greeting completed")}
      />
    );
  };

  export default EditTagModal;
