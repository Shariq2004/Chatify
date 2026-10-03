import { UserRound } from "lucide-react";

const ProfileAvatar = ({ src, size = "h-11 w-11" }) => {
  return (
    <div
      className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EEF0FF] text-[#7F84F7]`}
    >
      {src ? (
        <img
          src={src}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      ) : (
        <UserRound size={22} strokeWidth={1.8} />
      )}
    </div>
  );
};

export default ProfileAvatar;


