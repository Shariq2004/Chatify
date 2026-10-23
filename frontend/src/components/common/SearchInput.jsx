import { Search, X } from "lucide-react";

const SearchInput = ({
  search,
  setSearch,
  placeholder = "Search...",
}) => {
  return (
    <div className="shrink-0 px-4 pb-3">
      <div className="group flex h-11 sm:h-10 items-center gap-3 rounded-full border border-slate-200/80 bg-[#7F84F7]/5 px-3 transition-all duration-200 focus-within:border-[#7F84F7] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#7F84F7]/10">
        <Search
          size={18}
          strokeWidth={2}
          className="shrink-0 text-slate-400 transition-colors duration-200 group-focus-within:text-[#7F84F7]"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={15} strokeWidth={2.3} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;