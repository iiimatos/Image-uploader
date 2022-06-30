import React from "react";

const UploadImage = () => {
  return (
    <div className="h-[400px] w-[350px] border-3xl shadow-lg rounded-lg py-9 px-8 bg-white text-center">
      <h3 className="text-lg font-medium text-gray-600">Upload your image</h3>
      <p className="text-style">File should be Jpeg, Png,...</p>
      <p className="text-style">Or</p>
      <button className="bg-blue-500 rounded-md text-white py-2 px-4 hover:bg-blue-600 active:bg-blue-700">
        Choose a file
      </button>
    </div>
  );
};

export default UploadImage;
