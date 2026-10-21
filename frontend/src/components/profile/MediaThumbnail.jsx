import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const MediaThumbnail = ({ imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group relative aspect-square overflow-hidden rounded-[10px] bg-[#F3F4FA]">
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-linear-to-br from-[#F0F1FA] via-[#E8EBF6] to-[#F3F0FF]">
          <div className="absolute inset-0 animate-pulse bg-linear-to-br from-white/40 via-transparent to-[#DCDFFF]/30" />

          <div className="relative flex h-9 w-9 animate-pulse items-center justify-center rounded-xl border border-white/80 bg-white/70 text-[#8589D8] shadow-sm">
            <ImageIcon size={19} strokeWidth={1.7} />
          </div>
        </div>
      )}

      {!hasError && (
        <img
          src={imageUrl}
          alt="Shared image"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {hasError && (
        <div className="flex h-full w-full items-center justify-center text-[#8589D8]">
          <ImageIcon size={24} strokeWidth={1.6} />
        </div>
      )}
    </div>
  );
};

export default MediaThumbnail;