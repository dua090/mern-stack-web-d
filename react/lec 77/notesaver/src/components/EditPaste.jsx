import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updatePaste } from "../redux/pasteSlice"; // Ensure updatePaste is imported

const EditPaste = () => {
  const { id } = useParams();
  const paste = useSelector((state) =>
    state.paste.pastes.find((paste) => paste._id === id)
  );

  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (paste) {
      setEditedTitle(paste.title);
      setEditedContent(paste.content);
    }
  }, [paste]);

  const handleSave = () => {
    const updatedPaste = {
      ...paste,
      title: editedTitle,
      content: editedContent,
    };
    dispatch(updatePaste(updatedPaste));
    navigate(`/pastes/${id}`); // Redirect to the paste view page after save
  };

  if (!paste) {
    return <div>Paste not found</div>;
  }

  return (
    <div className="edit-paste">
      <h2>Edit Paste</h2>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        placeholder="Edit Title"
        className="edit-title-input"
      />
      <textarea
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        placeholder="Edit Content"
        className="edit-content-input"
      />
      <button onClick={handleSave} className="save-button">Save</button>
    </div>
  );
};

export default EditPaste;
