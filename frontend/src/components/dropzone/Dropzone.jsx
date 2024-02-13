import React, { useState, useRef, useEffect } from 'react'
import './dropzone.css'

const DragDropFiles = ({ setState }) => {
  const [files, setFiles] = useState(null)
  const inputRef = useRef()

  const handleDragOver = event => {
    event.preventDefault()
  }

  const handleDrop = event => {
    console.log(event.dataTransfer.files)
    // event.preventDefault();
    // setFiles(event.dataTransfer.files);
  }

  useEffect(() => {
    if (files) {
      handleUpload()
    }
  }, [files])
  const handleUpload = () => {
    const imageUrls = Array.from(files).map(file => URL.createObjectURL(file))
    // console.log('Uploaded Image URLs:', imageUrls);

    // Update the state with image URLs
    // console.log(imageUrls)
    setState(prevState => [...prevState, ...imageUrls])
    // Your upload logic here
  }

  return (
    <div>
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
          onChange={event => setFiles(event.target.files)}
          hidden
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
      </div>
    </div>
  )
}

export default DragDropFiles
