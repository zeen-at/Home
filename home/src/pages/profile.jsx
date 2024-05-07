import { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GrFormEdit } from "react-icons/gr";
import CustomButton from "../components/CustomButton";
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state?.user);

  const fileRef = useRef(null);
  const [imgContent, setImgContent] = useState("");
  const [imgStatus, setImgStatus] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [userDetails, setUserDetails] = useState({
    fullName: currentUser?.data?.fullname,
    email: currentUser?.data?.email,
    avatar: currentUser?.data?.avatar,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (imgContent) {
      handleUpload(imgContent);
    }
  }, [imgContent]);

  const handleUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgStatus(Math.round(progress));
      },

      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserDetails({ ...userDetails, avatar: downloadURL });
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <>
      <div className="body_container">
        <div className="flex items-center  text-3xl font-bold">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="hover:text-slate-600"
          >
            <IoIosArrowRoundBack />
          </button>
          <p className="flex-1">Profile</p>
        </div>

        <div className="py-12 flex flex-col gap-4  ">
          <img
            src={userDetails.avatar || currentUser?.data?.avatar }
            alt="profile_picture"
            className=" relative rounded-full object-cover w-24 h-24 mx-auto "
          />
          <button
            type="button"
            onClick={() => fileRef.current.click()}
            className="cursor-pointer"
          >
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImgContent(e.target.files[0])}
            />
            <GrFormEdit className=" mx-auto absolute left-[200px] md:left-[420px] lg:left-[730px] font-extrabold top-[270px] bg-emerald-700 hover:bg-emerald-300 text-teal-100 p-2 rounded-full text-3xl" />
          </button>
        </div>

        <p className="pb-4">
          {fileUploadError ? (
            <span className="text-red-700">Error with Upload (Image must be less than 2mb)</span>
          ) : imgStatus > 0 && imgStatus < 100 ? (
            <span className="text-slate-700">{`Uploading ${imgStatus}%`}</span>
          ) : imgStatus === 100 ? (
            <span className="text-green-700">Image successfully Uploaded</span>
          ) : (
            ""
          )}
        </p>
        <div className="mx-auto flex flex-col gap-6">
          <input
            value={userDetails?.fullName}
            type="text"
            name="fullName"
            onChange={handleChange}
            className="editInput"
            onFocus={() => setIsDisabled(false)}
          />
          <input
            value={userDetails?.email}
            type="text"
            name="email"
            onChange={handleChange}
            className="editInput"
            onFocus={() => setIsDisabled(false)}
          />
        </div>

        <div className="py-6 flex flex-col gap-6 max-w-md mx-auto">
          <CustomButton
            onClick={() => {}}
            title="Update"
            disabled={isDisabled}
          />
          <CustomButton
            onClick={() => {}}
            title="Create Listing"
            backgroundColor="bg-red-700"
          />
        </div>

        <div className=" flex justify-between max-w-md mx-auto">
          <button
            onClick={() => {}}
            type="button"
            className="cursor-pointer text-red-800 hover:text-red-300"
          >
            Delete Account
          </button>
          <button
            onClick={() => {}}
            type="button"
            className="cursor-pointer text-emerald-800 hover:text-emerald-300"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
