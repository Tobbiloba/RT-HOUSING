// import React, { useState, useRef } from "react";
// import './dropzone.css';

// const DragDropFiles = () => {
//   const [files, setFiles] = useState(null);
//   const inputRef = useRef();
//   console.log(files)

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setFiles(event.dataTransfer.files);
//   };
  
//   // send files to the server // learn from my other video
//   const handleUpload = () => {
//     const formData = new FormData();
//     Array.from(files).forEach((file, index) => {
//       formData.append(`Files[${index}]`, file);
//     });

//     console.log(Array.from(formData.entries()));
//     // Uncomment the following fetch code when you have the correct server link
//     // fetch("link", {
//     //   method: "POST",
//     //   body: formData
//     // });
//   };

//   if (files) return (
//     <div className="uploads">
//       <ul>
//         {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
//       </ul>
//       <div className="actions">
//         <button onClick={() => setFiles(null)}>Cancel</button>
//         <button onClick={handleUpload}>Upload</button>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <div
//         className="border-dashed border-2 cursor-pointer border-slate-500 flex items-center justify-center flex-col h-[15rem]"
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         onClick={() => inputRef.current.click()}
//       >

//         <img src="https://cdn-icons-png.flaticon.com/128/892/892311.png" className="w-16 h-16"/>
//         <h1 className="mt-3">Drag your image here</h1>

//         <p className="text-[14px] text-slate-400">(Only *.jpeg and *.png images will be accepted)</p>
//         <input
//           type="file"
//           multiple
//           onChange={(event) => setFiles(event.target.files)}
//           hidden
//           accept="image/png, image/jpeg"
//           ref={inputRef}
          
//         />
//         {/* <button  className="border  px-8 text-slate-500 hover:bg-slate-500 hover:text-white">Select Files</button> */}
//       </div>
//     </>
//   );
// };

// export default DragDropFiles;





















import React, { useState, useRef, useEffect } from "react";
import './dropzone.css';

const DragDropFiles = ({ setState }) => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
    
  };

  useEffect(() => {
    if(files) {
      handleUpload()
    }
    
  }, [files])
  const handleUpload = () => {
    const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
    // console.log('Uploaded Image URLs:', imageUrls);

    // Update the state with image URLs
    setState(prevState => [...prevState, ...imageUrls]);
    // Your upload logic here
  };

  return (
    <div>
      {/* {files ? (
        <div className="uploads border">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
          <div className="images">

          </div>
          <div className="actions">
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div> */}

        <div
          className="border-dashed border-2 cursor-pointer border-slate-500 flex items-center justify-center flex-col h-[15rem]"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/892/892311.png"
            alt="Default Image"
            className="w-16 h-16"
          />
          <h1 className="mt-3">Drag your image here</h1>
          <p className="text-[14px] text-slate-400">
            (Only *.jpeg and *.png images will be accepted)
          </p>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
    </div>
  );
};

export default DragDropFiles;
