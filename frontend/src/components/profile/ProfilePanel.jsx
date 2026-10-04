import {
  Mail,
  Phone,
  UserRound,
  FileText,
  Camera,
  Check,
  Pencil,
  LoaderCircle,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import ProfileAvatar from "../common/ProfileAvatar";
import { useState } from "react";

const ProfilePanel = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();

  const [isEditing, setIsEditing] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const [formData, setFormData] = useState({
    fullName: authUser?.fullName || "",
    phoneNumber: authUser?.phoneNumber || "",
    bio: authUser?.bio || "",
    status: authUser?.status || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setSelectedImg({
      file,
      url: imageUrl,
    });
  };

  const handleEdit = () => {
    setFormData({
      fullName: authUser?.fullName || "",
      phoneNumber: authUser?.phoneNumber || "",
      bio: authUser?.bio || "",
      status: authUser?.status || "",
    });

    setIsEditing(true);
  };

  const handleSave = async () => {
    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("bio", formData.bio);
    data.append("status", formData.status);

    if (selectedImg?.file) {
      data.append("profilePic", selectedImg.file);
    }

    await updateProfile(data);

    setSelectedImg(null);
    setIsEditing(false);
  };

  return (
    <section className="flex h-full w-full flex-col border-r border-[#E6E8F2] bg-[#FAFBFF]">
      <div className="h-19 flex items-center justify-between px-5">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-[#3F4354]">
            My Profile
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Manage your personal information
          </p>
        </div>
      </div>

      <div className="chatuser-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-6">
        <div className="flex flex-col items-center">
          <div className="relative">
            <ProfileAvatar
              src={selectedImg?.url || authUser?.profilePic}
              size="h-24 w-24"
            />

            {isEditing && (
              <>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[3px] border-[#FAFBFF] bg-[#7F84F7] text-white shadow-sm transition-colors duration-200 hover:bg-[#7076E8]"
                >
                  <Camera size={14} strokeWidth={2} />
                </label>
              </>
            )}
          </div>

          <h3 className="mt-4 max-w-full truncate px-2 text-[17px] font-semibold text-[#3F4354]">
            {authUser?.fullName || "Your Name"}
          </h3>

          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[11px] font-medium text-emerald-500">
              Online
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#737891]">
              <UserRound size={14} />
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              readOnly={!isEditing}
              className={`h-11 w-full rounded-xl border px-3.5 text-[13px] text-[#3F4354] outline-none transition-all duration-200 ${
                isEditing
                  ? "border-[#d7dbed] bg-white focus:border-[#7F84F7]"
                  : "cursor-default border-transparent bg-[#F1F3F9]"
              }`}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#737891]">
              <Mail size={14} />
              Email
            </label>

            <input
              type="email"
              value={authUser?.email || ""}
              readOnly
              className="h-11 w-full cursor-default rounded-xl border border-transparent bg-[#F1F3F9] px-3.5 text-[13px] text-[#3F4354] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#737891]">
              <Phone size={14} />
              Phone
            </label>

            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              readOnly={!isEditing}
              placeholder="Add phone number"
              className={`h-11 w-full rounded-xl border px-3.5 text-[13px] text-[#3F4354] outline-none placeholder:text-[#B0B4C5] transition-all duration-200 ${
                isEditing
                  ? "border-[#d7dbed] bg-white focus:border-[#7F84F7]"
                  : "cursor-default border-transparent bg-[#F1F3F9]"
              }`}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#737891]">
              <FileText size={14} />
              About
            </label>

            <textarea
              name="bio"
              rows={4}
              value={formData.bio}
              onChange={handleInputChange}
              readOnly={!isEditing}
              placeholder="Write something about yourself..."
              className={`w-full resize-none rounded-xl border px-3.5 py-3 text-[13px] leading-5 text-[#3F4354] outline-none placeholder:text-[#B0B4C5] transition-all duration-200 ${
                isEditing
                  ? "border-[#d7dbed] bg-white focus:border-[#7F84F7]"
                  : "cursor-default border-transparent bg-[#F1F3F9]"
              }`}
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-[11px] font-semibold text-[#737891]">
              <Check size={14} />
              Status
            </label>

            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              readOnly={!isEditing}
              placeholder="Hey there! I am using Chatify."
              className={`h-11 w-full rounded-xl border px-3.5 text-[13px] text-[#3F4354] outline-none placeholder:text-[#B0B4C5] transition-all duration-200 ${
                isEditing
                  ? "border-[#d7dbed] bg-white focus:border-[#7F84F7]"
                  : "cursor-default border-transparent bg-[#F1F3F9]"
              }`}
            />
          </div>
        </div>

        {!isEditing ? (
          <button
            type="button"
            onClick={handleEdit}
            className="mt-6 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#7F84F7] text-[13px] font-semibold text-white shadow-sm shadow-[#7F84F7]/20 transition-colors duration-200 hover:bg-[#7076E8] active:scale-[0.98]"
          >
            <Pencil size={15} strokeWidth={2.2} />
            Edit Profile
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSave}
            disabled={isUpdatingProfile}
            className="mt-6 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#7F84F7] text-[13px] font-semibold text-white shadow-sm shadow-[#7F84F7]/20 transition-colors duration-200 hover:bg-[#7076E8] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isUpdatingProfile ? (
              <>
                <LoaderCircle size={16} className="animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Check size={16} strokeWidth={2.3} />
                Save Changes
              </>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default ProfilePanel;
