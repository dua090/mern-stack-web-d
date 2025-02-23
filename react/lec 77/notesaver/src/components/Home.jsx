import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updatePaste } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteID = searchParams.get("pasteid");
  const dispatch = useDispatch();

  function createPaste() {
    if (pasteID) {
      // Update paste
      dispatch(updatePaste({ index: pasteID, newText: { title, content: value } }));
    } else {
      // Create new paste
      const paste = {
        title,
        content: value,
        _id: Date.now().toString(36),
        createdAt: new Date().toISOString(),
      };
      dispatch(addToPastes(paste));
    }

    // Clear form after creation or update
    setTitle('');
    setValue('');
    setSearchParams({}); // ✅ Corrected function call
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input 
          className="p-1 border rounded-2xl mt-2 border-black w-[66%] pl-4"
          type="text" 
          placeholder="Enter title here" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="p-2 border rounded-2xl mt-2 border-black">
          {pasteID ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <div className="mt-8">
        <textarea
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
          cols={50}
          className="rounded-2xl mt-4 min-w-[500px] p-4"
        />
      </div>
    </div>
  );
};

export default Home;
