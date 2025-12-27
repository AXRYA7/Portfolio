export function MarqueeBanner() {
  const items = ["@ UX Designer", "@ Motion Design", "@ wrk.aarya", "@ Framer", "@ Figma"];

  return (
    <div className="overflow-hidden bg-[rgba(39,39,42,0.3)] border border-[#27272a] rounded-2xl">
      <div className="h-[60px] relative flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of items */}
          {items.map((item, index) => (
            <p
              key={`first-${index}`}
              className="text-[18px] text-[#99a1af] mx-8 flex items-center flex-shrink-0"
            >
              {item}
            </p>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, index) => (
            <p
              key={`second-${index}`}
              className="text-[18px] text-[#99a1af] mx-8 flex items-center flex-shrink-0"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}