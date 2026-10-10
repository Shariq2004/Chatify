
const avatarColors = [
  { range: ["A", "B", "C", "D", "E", "F"], bg: "bg-[#DDF5E4]", text: "text-[#247344]" },
  { range: ["G", "H", "I", "J", "K", "L"], bg: "bg-[#DDEBFF]", text: "text-[#2859A6]" },
  { range: ["M", "N", "O", "P", "Q", "R"], bg: "bg-[#FFE8D6]", text: "text-[#A64F19]" },
  { range: ["S", "T", "U", "V", "W", "X", "Y", "Z"], bg: "bg-[#F0E2FF]", text: "text-[#763BA8]" },
];

const Avatar = ({ src, name = "User", size = "h-11 w-11", textSize = "text-sm",}) => {
  const initial = name.trim().charAt(0).toUpperCase();

  const colorGroup = avatarColors.find((group) =>
    group.range.includes(initial)
  );

  const bgColor = colorGroup?.bg || "bg-[#EEF0FF]";
  const textColor = colorGroup?.text || "text-[#7F84F7]";

  return (
    <div
      className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-full ${src ? "bg-[#EEF0FF]" : `${bgColor} ${textColor}`}`}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className={`font-semibold ${textSize}`}>
          {initial || "U"}
        </span>
      )}
    </div>
  );
};

export default Avatar;