import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFileContext } from "../context/fileContext";
import image from "../images/image.svg";

const UploadImageComponent = () => {
  const { uploadImage } = useFileContext();

  const onDrop = useCallback(async (acceptedFiles) => {
    await uploadImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, open, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "image/*": [".jpeg", ".png", ".svg", ".jpg", ".gif"],
      },
      multiple: false,
    });
  return (
    <div className="h-[450px] w-[400px] border-3xl shadow-lg rounded-lg py-9 px-8 bg-white text-center">
      <h3 className="text-lg font-medium text-gray-700">Upload your image</h3>
      <p className="text-xs text-gray-400">File should be Jpeg, Png,...</p>
      <div
        {...getRootProps()}
        className={
          "h-64 w-full border rounded-xl border-blue-500 border-dashed mt-2 cursor-pointer bg-slate-100 flex justify-center items-center flex-col " +
          (isDragReject === true ? "border-red-500" : "") +
          (isDragAccept === true ? "border-green-500" : "")
        }
      >
        <input name="fileimage" id="fileimage" {...getInputProps()} />
        <div className="h-maxmt-16">
          <img src={image} alt="Photo image" />
        </div>
        {isDragReject ? (
          <TextDesign text="Sorry, this app only supports images" />
        ) : (
          <TextDesign text="Drag & Drop your image here" />
        )}
      </div>
      <p className="my-2 text-sm text-gray-400">Or</p>
      <button
        onClick={open}
        className="bg-blue-500 rounded-md text-white py-2 px-4 hover:bg-blue-600 active:bg-blue-700 hover:cursor-pointer"
      >
        Choose a file
      </button>
    </div>
  );
};

const TextDesign = ({ text }) => <p className="text-gray-400 mt-12">{text}</p>;

export default UploadImageComponent;
