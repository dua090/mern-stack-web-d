import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VeiwPaste = () => {
  const {id} = useParams();
  const paste = useSelector((state) =>
    state.paste.pastes.find((paste) => paste._id === id)
  );

  if (!paste) {
    return <div>Paste not found</div>;
  }

  return (
    <div className="view-paste">
      <h2>{paste.title}</h2>
      <p>{paste.content}</p>
      <p>Created at: {paste.createdAt}</p>
    </div>
  );
};

export default VeiwPaste;
