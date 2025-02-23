// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { pasteSlice } from '../redux/pasteSlice';

// const Paste = () => {
//   const paste=useSelector((state)=>state.paste.pastes);
//   const dispatch =useDispatch();
//   const filteredData =paste.filter(
//     (paste)=> paste.title.toLowercase().includes()
//   )
//   return (
//     <div>List of paste</div>
//   )
// }

// export default Paste
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import { FiEdit, FiEye, FiTrash2, FiCopy, FiShare2 } from "react-icons/fi"; // Import icons
import { Link } from "react-router-dom"; // Import Link for navigation

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes); // Correct state reference
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteID) {
    dispatch(removeFromPastes(pasteID));
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content).then(() => {
      alert("Paste content copied to clipboard!");
    });
  }

  function handleShare(paste) {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.content,
        url: window.location.href,
      }).then(() => {
        alert("Paste shared successfully!");
      }).catch((error) => {
        alert("Failed to share: " + error);
      });
    } else {
      alert("Sharing is not supported on this browser/device.");
    }
  }

  return (
    <div className="flex flex-col items-center p-6">
      {/* Search Bar */}
      <input
        className="p-3 rounded-xl border w-[50%] text-lg outline-none shadow-md focus:ring-2 focus:ring-blue-400"
        type="search"
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Paste List */}
      <div className="mt-6 w-[60%] flex flex-col gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id} className="border rounded-xl p-4 shadow-lg bg-white">
              {/* Title & Content */}
              <h3 className="text-xl font-semibold text-blue-700">{paste.title}</h3>
              <p className="mt-2 text-gray-600">{paste.content}</p>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <Link to={`/edit/${paste._id}`}>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    <FiEdit /> Edit
                  </button>
                </Link>
                <Link to={`/view/${paste._id}`}>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    <FiEye /> View
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(paste._id)} // Fixed delete function
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  <FiTrash2 /> Delete
                </button>
                <button
                  onClick={() => handleCopy(paste.content)} // Added copy functionality
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <FiCopy /> Copy
                </button>
                <button
                  onClick={() => handleShare(paste)} // Added share functionality
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                >
                  <FiShare2 /> Share
                </button>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-400 mt-3">Created at: {paste.createdAt}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-5">No pastes found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
