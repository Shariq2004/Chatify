const Avatar = ({ src, name = "User", size = "h-11 w-11" }) => {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EEF0FF] text-sm font-semibold text-[#7F84F7]`}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

export default Avatar;

