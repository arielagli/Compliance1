import svgPaths from "./svg-1how5l0rs1";
type NavigationTagProps = {
  className?: string;
  content?: string;
};

function NavigationTag({ className, content = "New" }: NavigationTagProps) {
  return (
    <div className={className || "bg-white h-[20px] relative rounded-[2px]"} data-name=".navigation-tag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type ProjectsBadgeProps = {
  className?: string;
  size?: "m";
  type?: "all projects" | "project";
};

function ProjectsBadge({ className, size = "m", type = "all projects" }: ProjectsBadgeProps) {
  const isAllProjects = type === "all projects";
  return (
    <div className={className || `relative rounded-[100px] ${isAllProjects ? "bg-[#b0d8fe]" : "bg-[#1d6ce2]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          {type === "project" && (
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="jfrog/project">
              <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8736" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736" width="10.6667">
                  <path d={svgPaths.p30ca0800} fill="white" id="ic" />
                </svg>
              </div>
            </div>
          )}
          {isAllProjects && (
            <div className="relative rounded-[80px] shrink-0 size-[16px]" data-name="jfrog/projects">
              <div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.736" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736" width="12.0588">
                  <path d={svgPaths.pc737900} fill="#414857" id="Vector" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type ScrollBarProps = {
  className?: string;
  state?: "enabled";
  type?: "horizontal";
};

function ScrollBar({ className, state = "enabled", type = "horizontal" }: ScrollBarProps) {
  return (
    <div className={className || "relative w-[142px]"}>
      <div className="content-stretch flex flex-col items-start pb-[2px] pt-[4px] px-[12px] relative size-full">
        <div className="bg-[#eaeef5] h-[6px] relative rounded-[8px] shrink-0 w-[64px]" data-name="scroll" />
      </div>
    </div>
  );
}

function DateAndTimeCalendar({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="date and time/calendar">
      <div className="absolute inset-[11.54%_16.67%_12.5%_16.67%]" data-name="ic">
        <svg className="absolute block inset-0 size-full" fill="none" height="18.2307" preserveAspectRatio="none" viewBox="0 0 16 18.2307" width="16">
          <path d={svgPaths.p3f232ce0} fill="#414857" id="ic" />
        </svg>
      </div>
    </div>
  );
}
type SelectMultiChevronProps = {
  className?: string;
  openClose?: "close";
};

function SelectMultiChevron({ className, openClose = "close" }: SelectMultiChevronProps) {
  return (
    <div className={className || "relative size-[20px]"}>
      <div className="absolute inset-0 rounded-[4px]" data-name="button-icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-down">
              <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p1e229180} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JfrogLifecycle({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="jfrog/lifecycle">
      <div className="absolute inset-[16.24%_16.83%_16.24%_12.66%]" data-name="ic">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.2031" preserveAspectRatio="none" viewBox="0 0 16.9229 16.2031" width="16.9229">
          <g id="ic">
            <path clipRule="evenodd" d={svgPaths.p1e383120} fill="#414857" fillRule="evenodd" />
            <path d={svgPaths.p9f4ac80} fill="#414857" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowsChevronRight({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="arrows/chevron-right">
      <div className="absolute inset-[20.83%_33.33%]" data-name="ic">
        <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 8 14" width="8">
          <path d={svgPaths.pfea3800} fill="#414857" id="ic" />
        </svg>
      </div>
    </div>
  );
}
type UserMenuButtonProps = {
  className?: string;
  name?: string;
  size?: "m";
  state?: "enabled" | "hover" | "selected";
};

function UserMenuButton({ className, name = "G", size = "m", state = "selected" }: UserMenuButtonProps) {
  if (state === "hover" && size === "m") {
    return (
      <button className={className || "bg-[#d2dfed] cursor-pointer relative rounded-[100px] size-[28px]"} data-name="state=hover, size=m">
        <div aria-hidden className="absolute border border-[#708cb2] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#708cb2] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[19px]">{name}</p>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "enabled" && size === "m") {
    return (
      <div className={className || "bg-[#eef3f8] relative rounded-[100px] size-[28px]"} data-name="state=enabled, size=m">
        <div aria-hidden className="absolute border border-[#708cb2] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#708cb2] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[19px]">{name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#415980] relative rounded-[100px] size-[28px]"} data-name="state=selected, size=m">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px]">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonAskAi({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative rounded-[8px] w-[90px]"} style={{ backgroundImage: "linear-gradient(243.1048622227427deg, rgb(255, 196, 1) 1.0452%, rgb(158, 226, 158) 100%)" }} data-name="button_ask_ai">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="general/stars-fill">
            <div className="absolute inset-[12.5%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                <g id="ic">
                  <path d={svgPaths.p3e339f00} fill="#414857" />
                  <path d={svgPaths.p2d597700} fill="#414857" />
                </g>
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px]">Ask AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DividerVerticalSurfacePrimary({ className }: { className?: string }) {
  return (
    <div className={className || "h-[300px] relative w-[12px]"} data-name="divider/vertical/surface primary">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center relative size-full">
          <div className="bg-[#eaeef5] h-full relative rounded-[1px] shrink-0 w-px" data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type SearchButtonIconProps = {
  className?: string;
  chevronStatus?: "close";
  state?: "enabled" | "hover" | "click-on";
};

function SearchButtonIcon({ className, chevronStatus = "close", state = "click-on" }: SearchButtonIconProps) {
  if (state === "hover" && chevronStatus === "close") {
    return (
      <button className={className || "bg-[#f8fafb] cursor-pointer relative rounded-[4px] size-[24px]"} data-name="state=hover, chevron status=close">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="arrows/chevron-down">
              <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10.5 6" width="10.5">
                  <path d={svgPaths.p2c3eb00} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (state === "enabled" && chevronStatus === "close") {
    return (
      <div className={className || "relative rounded-[4px] size-[24px]"} data-name="state=enabled, chevron status=close">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="arrows/chevron-down">
              <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10.5 6" width="10.5">
                  <path d={svgPaths.p2c3eb00} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "bg-[#eaeef5] relative rounded-[4px] size-[24px]"} data-name="state=click-on, chevron status=close">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="overflow-clip relative shrink-0 size-[18px]" data-name="arrows/chevron-down">
            <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10.5 6" width="10.5">
                <path d={svgPaths.p2c3eb00} fill="#414857" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type SearchFilterButtonProps = {
  className?: string;
  state?: "enabled" | "hover" | "click-on";
};

function SearchFilterButton({ className, state = "enabled" }: SearchFilterButtonProps) {
  const isHover = state === "hover";
  return (
    <div className={className || `relative size-[28px] ${isHover ? "cursor-pointer" : ""}`}>
      <div className={`absolute inset-0 rounded-[4px] ${state === "click-on" ? "bg-[#eaeef5]" : isHover ? "bg-[#f8fafb]" : ""}`} data-name="advanced-search">
        <div className="-translate-x-1/2 absolute bottom-[29.19%] left-1/2 top-[29.15%] w-[15px]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 15 11.6667" width="15">
            <g id="ic">
              <path d={svgPaths.p120fd400} fill="#5E6D81" />
              <path d={svgPaths.p29457100} fill="#5E6D81" />
              <path d={svgPaths.p37c97d00} fill="#5E6D81" />
              <path d={svgPaths.p9ee4880} fill="#5E6D81" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type SearchNavBarProps = {
  className?: string;
  filled?: "no";
  state?: "enabled" | "hover" | "click-on/focused";
  type?: "packages";
};

function SearchNavBar({ className, filled = "no", state = "enabled", type = "packages" }: SearchNavBarProps) {
  if (type === "packages" && state === "hover" && filled === "no") {
    return (
      <button className={className || "bg-white cursor-pointer h-[40px] max-h-[40px] min-h-[40px] min-w-[364px] relative rounded-[4px] w-[364px]"} data-name="type=packages, state=hover, filled=no">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
            <div className="content-stretch flex gap-[8px] h-[34px] items-center px-[8px] relative shrink-0 w-[72px]" data-name="left content">
              <div aria-hidden className="absolute border-[#eaeef5] border-r border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="general/package">
                <div className="absolute inset-[12.9%_16.67%]" data-name="ic">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17.8075" preserveAspectRatio="none" viewBox="0 0 16 17.8075" width="16">
                    <path d={svgPaths.p11146f00} fill="#C9D0E3" id="ic" />
                  </svg>
                </div>
              </div>
              <SearchButtonIcon className="relative rounded-[4px] shrink-0 size-[24px]" state="enabled" />
            </div>
            <div className="flex-[1_0_0] h-[34px] min-w-px relative" data-name="right content">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px] overflow-hidden text-ellipsis">Search Packages</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28px]" data-name="button">
                    <SearchFilterButton className="relative shrink-0 size-[28px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#7e8194] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
    );
  }
  if (type === "packages" && state === "click-on/focused" && filled === "no") {
    return (
      <button className={className || "bg-white cursor-pointer h-[40px] max-h-[40px] min-h-[40px] relative rounded-[4px] w-[364px]"} data-name="type=packages, state=click-on/focused, filled=no">
        <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] relative size-full">
            <div className="content-stretch flex gap-[8px] h-[34px] items-center px-[8px] relative shrink-0" data-name="left content">
              <div aria-hidden className="absolute border-[#eaeef5] border-r border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="general/package">
                <div className="absolute inset-[12.9%_16.67%]" data-name="ic">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17.8075" preserveAspectRatio="none" viewBox="0 0 16 17.8075" width="16">
                    <path d={svgPaths.p11146f00} fill="#C9D0E3" id="ic" />
                  </svg>
                </div>
              </div>
              <SearchButtonIcon className="relative rounded-[4px] shrink-0 size-[24px]" state="enabled" />
            </div>
            <div className="flex-[1_0_0] h-[34px] min-w-px relative" data-name="right content">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px] overflow-hidden text-ellipsis">Search Packages</p>
                  </div>
                  <div className="relative shrink-0 size-[28px]" data-name=".search-filter-button">
                    <div className="absolute inset-0 rounded-[4px]" data-name="advanced-search">
                      <div className="-translate-x-1/2 absolute bottom-[29.19%] left-1/2 top-[29.15%] w-[15px]" data-name="ic">
                        <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 15 11.6667" width="15">
                          <g id="ic">
                            <path d={svgPaths.p120fd400} fill="#5E6D81" />
                            <path d={svgPaths.p29457100} fill="#5E6D81" />
                            <path d={svgPaths.p37c97d00} fill="#5E6D81" />
                            <path d={svgPaths.p9ee4880} fill="#5E6D81" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#3eb065] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </button>
    );
  }
  return (
    <div className={className || "bg-white h-[40px] max-h-[40px] min-h-[40px] min-w-[364px] relative rounded-[4px] w-[364px]"} data-name="type=packages, state=enabled, filled=no">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] relative size-full">
          <div className="content-stretch flex gap-[8px] h-[34px] items-center px-[8px] relative shrink-0" data-name="left content">
            <div aria-hidden className="absolute border-[#eaeef5] border-r border-solid inset-0 pointer-events-none" />
            <div className="relative shrink-0 size-[24px]" data-name="general/package">
              <div className="absolute inset-[12.9%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.8075" preserveAspectRatio="none" viewBox="0 0 16 17.8075" width="16">
                  <path d={svgPaths.p11146f00} fill="#C9D0E3" id="ic" />
                </svg>
              </div>
            </div>
            <SearchButtonIcon className="relative rounded-[4px] shrink-0 size-[24px]" state="enabled" />
          </div>
          <div className="flex-[1_0_0] h-[34px] min-w-px relative" data-name="right content">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[22px] overflow-hidden text-ellipsis">Search Packages</p>
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28px]" data-name="button">
                  <SearchFilterButton className="relative shrink-0 size-[28px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type DividerProps = {
  className?: string;
  appearsOn?: "surface primary";
  direction?: "vertical";
};

function Divider({ className, appearsOn = "surface primary", direction = "vertical" }: DividerProps) {
  return (
    <div className={className || "h-[300px] relative w-px"}>
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center relative size-full">
          <div className="bg-[#eaeef5] h-full relative shrink-0 w-px" data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type NavButtonIconProps = {
  className?: string;
  state?: "enabled" | "hover" | "selected";
};

function NavButtonIcon({ className, state = "enabled" }: NavButtonIconProps) {
  const isEnabled = state === "enabled";
  const isHover = state === "hover";
  return (
    <div className={className || `relative size-[24px] ${isHover ? "cursor-pointer" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="actions/open-in-new">
            <div className="absolute inset-[20.83%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <g id="ic">
                  <path d={svgPaths.p1cf29470} fill={isHover ? "white" : isEnabled ? "#EAEEF5" : "#3EB065"} />
                  <path d={svgPaths.p2f9e7840} fill={isHover ? "white" : isEnabled ? "#EAEEF5" : "#3EB065"} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DividerHorizontalSurfacePrimary({ className }: { className?: string }) {
  return (
    <div className={className || "h-[12px] relative w-[472px]"} data-name="divider/horizontal/surface primary">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center relative size-full">
          <div className="bg-[#eaeef5] h-px relative rounded-[1px] shrink-0 w-full" data-name="divider" />
        </div>
      </div>
    </div>
  );
}
type ProjectsBadge1Props = {
  className?: string;
  size?: "m" | "s";
  type?: "all projects" | "project";
};

function ProjectsBadge1({ className, size = "m", type = "all projects" }: ProjectsBadge1Props) {
  const isAllProjectsAndS = type === "all projects" && size === "s";
  const isProjectAndS = type === "project" && size === "s";
  return (
    <div className={className || `relative ${size === "s" ? "size-[20px]" : "bg-[#b0d8fe] rounded-[100px]"}`}>
      <div className={isAllProjectsAndS ? "absolute bg-[#b0d8fe] inset-0 rounded-[41.667px]" : isProjectAndS ? "absolute bg-[#3a86f9] inset-0 rounded-[41.667px]" : "flex flex-row items-center size-full"}>
        {type === "all projects" && size === "m" && (
          <div className="content-stretch flex items-center p-[4px] relative size-full">
            <div className="relative rounded-[80px] shrink-0 size-[16px]" data-name="jfrog/projects">
              <div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]" data-name="Union">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.736" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736" width="12.0588">
                  <path clipRule="evenodd" d={svgPaths.p190e8a00} fill="#414857" fillRule="evenodd" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      {isProjectAndS && (
        <div className="absolute inset-[10%] overflow-clip" data-name="jfrog/project">
          <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="10.8736" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736" width="10.6667">
              <path d={svgPaths.p30ca0800} fill="white" id="ic" />
            </svg>
          </div>
        </div>
      )}
      {isAllProjectsAndS && (
        <div className="absolute inset-[10%]" data-name="jfrog/projects">
          <div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.736" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736" width="12.0588">
              <path clipRule="evenodd" d={svgPaths.p190e8a00} fill="#414857" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <div className="bg-[#1f2f4a] h-[18px] relative shrink-0" data-name=".side-bar_logo">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center relative size-full">
                <div className="h-[18.097px] relative shrink-0 w-[126.053px]" data-name="ic">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.0967" preserveAspectRatio="none" viewBox="0 0 126.053 18.0967" width="126.053">
                    <g id="ic">
                      <path d={svgPaths.p2aac8780} fill="white" />
                      <path d={svgPaths.p204c5e00} fill="white" />
                      <path d={svgPaths.p13202600} fill="white" />
                      <path d={svgPaths.pea38280} fill="white" />
                      <path d={svgPaths.p1f8ea900} fill="white" />
                      <path d={svgPaths.p318cb300} fill="white" />
                      <path d={svgPaths.p2b696380} fill="white" />
                      <path d={svgPaths.p27583d00} fill="white" />
                      <path d={svgPaths.p6db300} fill="#3EB065" />
                      <path d={svgPaths.p2061ea00} fill="#3EB065" />
                      <path d={svgPaths.p11f7c200} fill="#3EB065" />
                      <path d={svgPaths.p1bd3cb00} fill="#3EB065" />
                      <path d={svgPaths.pda80880} fill="#3EB065" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsDropdown() {
  return (
    <div className="bg-[#152033] relative rounded-[4px] shrink-0 w-full" data-name=".projects dropdown">
      <div aria-hidden className="absolute border border-[#d2dfed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <ProjectsBadge1 className="bg-[#b0d8fe] relative rounded-[100px] shrink-0" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[0px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[19px] overflow-hidden text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              All Projects
            </p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
            <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667" width="11.6667">
                <path d={svgPaths.p9434780} fill="white" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDropdown() {
  return (
    <div className="relative shrink-0 w-full" data-name="project dropdown">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[12px] px-[16px] relative size-full">
          <div className="relative shrink-0 w-[200px]" data-name=".projects expanded">
            <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative size-full">
              <ProjectsDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/apptrust">
        <div className="absolute inset-[9.38%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.4971" preserveAspectRatio="none" viewBox="0 0 18 19.4971" width="18">
            <g id="ic">
              <path d={svgPaths.p2ce8f0f0} fill="#EAEEF5" />
              <path d={svgPaths.p6cb1700} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">AppTrust</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/artifactory">
        <div className="absolute inset-[10.42%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.pc949d80} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Artifactory</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/xray">
        <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1b6f5500} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p32e23700} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Xray</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/curation">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19px] left-1/2 top-[calc(50%-0.5px)] w-[18px]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1faf03f0} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb63100} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Curation</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="jfrog/runtime">
        <div className="absolute inset-[8.33%_8.33%_7.78%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.1333" preserveAspectRatio="none" viewBox="0 0 20 20.1333" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1e45fe80} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p3c89d800} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Runtime</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/package-catalog">
        <div className="absolute inset-[17.71%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 20 15.5" width="20">
            <path clipRule="evenodd" d={svgPaths.p19de9300} fill="#EAEEF5" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Package Catalog</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/distribution">
        <div className="absolute inset-[8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p16a205e0} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3b07fa00} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Distribution</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/ml-side-bar">
        <div className="absolute inset-[10.94%_12.5%_8.33%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.3751" preserveAspectRatio="none" viewBox="0 0 18 19.3751" width="18">
            <g id="ic">
              <path d={svgPaths.p347fc700} fill="#EAEEF5" />
              <path d={svgPaths.p33ed1f00} fill="#EAEEF5" />
              <path clipRule="evenodd" d={svgPaths.p1cfe6200} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p7766080} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19eda200} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p161f7b80} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Jfrog ML</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/pipelines">
        <div className="absolute inset-[8.33%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p56df00} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p3bfa9200} fill="#EAEEF5" />
              <path d={svgPaths.p1d64c00} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Pipelines</p>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="divider">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative size-full">
          <DividerHorizontalSurfacePrimary className="h-[12px] relative shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/integrations">
        <div className="absolute inset-[8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path clipRule="evenodd" d={svgPaths.p54f8100} fill="#EAEEF5" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Integrations</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/my-jfrog">
        <div className="absolute inset-[8.33%_5.83%_5.83%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.6" preserveAspectRatio="none" viewBox="0 0 20.6 20.6" width="20.6">
            <g id="ic">
              <path d={svgPaths.p39809a00} fill="#EAEEF5" />
              <path d={svgPaths.p532a080} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">MyJfrog Portal</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/connect">
        <div className="absolute inset-[12.5%_18.22%_12.5%_20.83%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.9995" preserveAspectRatio="none" viewBox="0 0 14.6269 17.9995" width="14.6269">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p7588200} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p3678d580} fill="#EAEEF5" />
              <path clipRule="evenodd" d={svgPaths.p170f8d40} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29cf5a00} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p32598f00} fill="#EAEEF5" />
              <path d={svgPaths.p2bf8a600} fill="#EAEEF5" />
              <path d={svgPaths.p317faa00} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Connect</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="body">
      <div className="content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".sidebar-list">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#3eb065] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[19px]">Applications</p>
                  </div>
                  <div className="absolute bg-[#3eb065] h-[12px] left-[42px] rounded-br-[4px] rounded-tr-[4px] top-[11.5px] w-[2px]" data-name="line" />
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[0px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[19px] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Policies
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Waivers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Activity Log</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content1 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content2 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content3 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content4 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content5 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content6 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content7 />
              <NavButtonIcon className="relative shrink-0 size-[24px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content8 />
            </div>
          </div>
        </div>
        <Divider1 />
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content9 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content10 />
              <NavButtonIcon className="relative shrink-0 size-[24px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content11 />
              <NavButtonIcon className="relative shrink-0 size-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoIconButton() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="logo+icon_button">
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Jfrog">
        <div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="30.9375" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375" width="32.625">
            <path d={svgPaths.p1c3cb000} fill="#3EB065" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[#2d4264] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 size-[32px]" data-name=".footer-button-icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name=".nav-icon-arrow-closed">
              <div className="absolute inset-[29.17%_33.33%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 8 10" width="8">
                  <path d={svgPaths.p3afd0c00} fill="#B4BACC" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#999db4] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] mb-0">{`Enterprise Plus 7.38.8 rev 73808900 Licensed to Jfrog © Copyright 2024 `}</p>
        <p className="leading-[16px]">JFrog Ltd</p>
      </div>
    </div>
  );
}

function NavSelectSingleTabs() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="nav-select-single+tabs">
      <div className="bg-[#1f2f4a] h-[40px] relative shrink-0" data-name=".nav-tabs">
        <div className="content-stretch flex gap-[16px] items-start relative size-full">
          <div className="h-[40px] relative shrink-0" data-name=".nav-tab_item">
            <div aria-hidden className="absolute border-[#3eb065] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] overflow-hidden relative shrink-0 text-[#3eb065] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Platform
                </p>
              </div>
            </div>
          </div>
          <div className="h-[40px] relative shrink-0" data-name=".nav-tab_item">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Administration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="left-content">
      <Divider className="h-[40px] relative shrink-0 w-px" />
      <NavSelectSingleTabs />
    </div>
  );
}

function ButtonDivider() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="button+divider">
      <DividerVerticalSurfacePrimary className="h-[34px] relative shrink-0 w-[12px]" />
      <ButtonAskAi className="h-[40px] relative rounded-[8px] shrink-0 w-[90px]" />
    </div>
  );
}

function HelpIconDividerAvatar() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="help-icon+divider+avatar">
      <ButtonDivider />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="actionsl/get-help">
        <div className="absolute inset-[6.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.9608" preserveAspectRatio="none" viewBox="0 0 20.9602 20.9608" width="20.9602">
            <g id="ic">
              <path d={svgPaths.p210d8200} fill="white" />
              <path d={svgPaths.p1a9bec00} fill="white" />
              <path clipRule="evenodd" d={svgPaths.p22839880} fill="white" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="general/bell">
        <div className="absolute inset-[12.5%_20.83%_10.9%_20.83%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.3846" preserveAspectRatio="none" viewBox="0 0 14 18.3846" width="14">
            <path d={svgPaths.p3f0e0900} fill="white" id="ic" />
          </svg>
        </div>
      </div>
      <UserMenuButton className="bg-[#eef3f8] relative rounded-[100px] shrink-0 size-[28px]" state="enabled" />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="right-content">
      <SearchNavBar className="bg-white h-[40px] max-h-[40px] min-h-[40px] min-w-[364px] relative rounded-[4px] shrink-0 w-[364px]" />
      <HelpIconDividerAvatar />
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white h-[28px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="jfrog/application">
            <div className="absolute inset-[15.99%_15.83%_19.23%_19.23%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.3655" preserveAspectRatio="none" viewBox="0 0 10.3912 10.3655" width="10.3912">
                <path d={svgPaths.pd823f40} fill="#5E6D81" id="ic" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#5e6d81] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Green-Pizza</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name=".select multi-chevron">
            <div className="absolute inset-0 rounded-[4px]" data-name="button-icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-down">
                    <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                      <svg className="absolute block inset-0 size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                        <path d={svgPaths.p1e229180} fill="#414857" id="ic" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[22px] relative shrink-0" data-name="breadcrumb">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center relative size-full">
            <div className="h-[22px] relative shrink-0" data-name=".breadcrumb-projects-item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[6px] items-center relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="projects badge">
                    <div className="absolute bg-[#3a86f9] inset-0 rounded-[41.667px]" />
                    <div className="absolute inset-[10%] overflow-clip" data-name="jfrog/project">
                      <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                        <svg className="absolute block inset-0 size-full" fill="none" height="10.8736" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736" width="10.6667">
                          <path d={svgPaths.p30ca0800} fill="white" id="ic" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]" dir="auto">
                      Apptrust Demos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ArrowsChevronRight className="overflow-clip relative shrink-0 size-[16px]" />
            <div className="h-[22px] relative shrink-0" data-name=".breadcrumb-item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">AppTrust</p>
                  </div>
                </div>
              </div>
            </div>
            <ArrowsChevronRight className="overflow-clip relative shrink-0 size-[16px]" />
            <div className="h-[22px] relative shrink-0" data-name=".breadcrumb-item">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[4px] items-center relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Applications</p>
                  </div>
                </div>
              </div>
            </div>
            <ArrowsChevronRight className="overflow-clip relative shrink-0 size-[16px]" />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[240px]" data-name="select-single-input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <Content14 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <div className="bg-[#3eb065] h-[34px] max-h-[34px] min-h-[34px] min-w-[80px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] relative size-full">
            <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Actions
            </p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-down">
              <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="5.33333" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333" width="9.33333">
                  <path d={svgPaths.p1e229180} fill="white" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-[26px]" data-name="text" />;
}

function Content15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="general/overview">
          <div className="absolute bottom-[20.61%] left-1/4 right-[20.83%] top-[21.06%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 13 14" width="13">
              <path d={svgPaths.p38997200} fill="#415980" id="ic" />
            </svg>
          </div>
        </div>
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-[26px]" data-name="text" />;
}

function Content16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <JfrogLifecycle className="overflow-clip relative shrink-0 size-[24px]" />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-[26px]" data-name="text" />;
}

function Content17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="general/package">
          <div className="absolute inset-[12.9%_16.67%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="17.8075" preserveAspectRatio="none" viewBox="0 0 16 17.8075" width="16">
              <path d={svgPaths.p11146f00} fill="#5E6D81" id="ic" />
            </svg>
          </div>
        </div>
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="content-stretch flex gap-[4px] h-[16px] items-center relative shrink-0 w-[26px]" data-name="text" />;
}

function Content18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <div className="relative shrink-0 size-[24px]" data-name="date and time/history">
          <div className="absolute inset-[20.83%_21.06%_20.83%_21.13%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 13.8741 14" width="13.8741">
              <g id="ic">
                <path d={svgPaths.p2771b740} fill="#5E6D81" />
                <path d={svgPaths.p22e93e00} fill="#5E6D81" />
              </g>
            </svg>
          </div>
        </div>
        <Text3 />
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="files/file-search">
          <div className="absolute inset-[12.5%_14.47%_10.3%_16.67%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="18.5275" preserveAspectRatio="none" viewBox="0 0 16.5275 18.5275" width="16.5275">
              <g id="ic">
                <path d={svgPaths.p3b5f6ef0} fill="#5E6D81" />
                <path clipRule="evenodd" d={svgPaths.pfc3ad80} fill="#5E6D81" fillRule="evenodd" />
                <path d={svgPaths.p2d873f00} fill="#5E6D81" />
                <path d={svgPaths.p37c6e0f0} fill="#5E6D81" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[159px]" data-name="body">
      <div className="bg-[#f8fafb] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name=".menu-item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] relative size-full">
            <Content15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafb] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name=".menu-item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[8px] relative size-full">
            <Content16 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafb] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name=".menu-item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[8px] relative size-full">
            <Content17 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafb] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name=".menu-item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[8px] relative size-full">
            <Content18 />
          </div>
        </div>
      </div>
      <div className="bg-[#f8fafb] h-[42px] relative rounded-[4px] shrink-0 w-full" data-name=".menu-item">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[20px] items-center px-[8px] relative size-full">
            <Content19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return <div className="absolute bg-[#415980] h-[8px] left-0 top-0 w-[197px]" />;
}

function ApplicationMenu() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[54px]" data-name=".application-menu">
      <div className="bg-[#f8fafb] flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="inner-navigation-menu">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[24px] px-[8px] relative size-full">
            <Body1 />
            <Frame13 />
            <div className="absolute bg-[#eaeef5] right-0 rounded-[4px] size-[34px] top-[625px]" data-name="button-icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrows/arrow-solid-right">
                    <div className="absolute flex inset-[29.17%_33.33%] items-center justify-center" style={{ containerType: "size" }}>
                      <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                        <div className="relative size-full" data-name="ic">
                          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 10 8" width="10">
                            <path d={svgPaths.pfd49f00} fill="#414857" id="ic" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[531px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="jfrog/lifecycle">
        <div className="absolute inset-[16.24%_16.83%_16.24%_12.66%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.2031" preserveAspectRatio="none" viewBox="0 0 16.9229 16.2031" width="16.9229">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1e383120} fill="#414857" fillRule="evenodd" />
              <path d={svgPaths.p9f4ac80} fill="#414857" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25px]">Lifecycle</p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#415980] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Stages Board
      </p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#5e6d81] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Versions `}</p>
    </div>
  );
}

function ApplicationPageNav() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0 w-[1125px]" data-name=".application-page-nav">
      <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="tabs">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[24px] items-start relative size-full">
          <div className="h-[40px] min-w-[28px] relative shrink-0" data-name=".tab-item">
            <div aria-hidden className="absolute border-[#415980] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                <Content20 />
              </div>
            </div>
          </div>
          <div className="h-[40px] min-w-[28px] relative shrink-0" data-name=".tab-item">
            <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                <Content21 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <div className="h-[34px] relative shrink-0 w-[1125px]" data-name=".header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] items-center relative size-full">
            <Frame12 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-[1125px]" data-name=".stage/.application-page-nav">
        <div className="content-stretch flex items-start relative size-full">
          <ApplicationPageNav />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[424px]">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[16px] text-center text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        4 Versions
      </p>
    </div>
  );
}

function Content22() {
  return (
    <div className="bg-white h-[28px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="date and time/calendar">
            <div className="absolute inset-[11.54%_16.67%_12.5%_16.67%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="12.1538" preserveAspectRatio="none" viewBox="0 0 10.6667 12.1538" width="10.6667">
                <path d={svgPaths.pe395300} fill="#414857" id="ic" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#5e6d81] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Last 14 days</p>
          </div>
          <SelectMultiChevron className="relative shrink-0 size-[20px]" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="general/search">
        <div className="absolute inset-[17.29%_14.17%_18.78%_18.06%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.7848" preserveAspectRatio="none" viewBox="0 0 13.5534 12.7848" width="13.5534">
            <path clipRule="evenodd" d={svgPaths.p9cd5e00} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">Search version or tag</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 w-[240px]" data-name="select-single-input">
        <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
          <Content22 />
        </div>
      </div>
      <div className="bg-white h-[28px] min-w-[200px] relative rounded-[4px] shrink-0 w-[200px]" data-name="input-search">
        <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] px-[8px] relative size-full">
            <Content23 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function KanbanTop() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name=".kanban-top">
      <Frame29 />
      <Frame1 />
    </div>
  );
}

function GateIn() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Entry
      </p>
    </div>
  );
}

function StageFilters() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="Stage filters">
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#414857] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Dev `}</p>
        </div>
      </div>
    </div>
  );
}

function GateIn1() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Exit
      </p>
    </div>
  );
}

function Stage() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="stage">
      <GateIn />
      <StageFilters />
      <GateIn1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">4.0.0</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="graph">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/flowchart">
              <div className="absolute inset-[20.83%_7.05%_11.54%_12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8205" preserveAspectRatio="none" viewBox="0 0 12.8718 10.8205" width="12.8718">
                  <path d={svgPaths.p16e26900} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VersionNumber() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Version-number">
      <Frame32 />
      <Frame19 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="arrows/arrow-right">
        <div className="absolute inset-[29.17%_16.67%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 10.6667 6.66667" width="10.6667">
            <path clipRule="evenodd" d={svgPaths.p31cc2e80} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">DEV</p>
      </div>
    </div>
  );
}

function Path() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Path">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/copy-version">
        <div className="absolute flex inset-[7.19%_15.04%_9.96%_19.69%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.4442" preserveAspectRatio="none" viewBox="0 0 13.2563 10.4442" width="13.2563">
                <path d={svgPaths.p33fe9d30} fill="#5E6D81" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Date">
      <DateAndTimeCalendar className="overflow-clip relative shrink-0 size-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 16:57</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Data">
      <Path />
      <Date />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[0px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-[12px] text-ellipsis" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
          Promotion from DEV to apptrust-demos-qa - Failed
        </p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5e6d81] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 16:57</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[145px] items-start relative shrink-0">
      <div className="bg-white h-[145px] relative rounded-[4px] shrink-0 w-[230px]" data-name=".kanban-card/Yes">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
            <VersionNumber />
            <Data />
            <div className="bg-[#fff1f2] relative rounded-[2px] shrink-0 w-full" data-name=".Alert">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[5px] items-center px-[8px] py-[4px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/alert">
                    <div className="absolute inset-[8.33%]" data-name="ic">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                        <g id="ic">
                          <path d={svgPaths.p36ccea00} fill="#E93838" />
                          <path d={svgPaths.p3b06cd80} fill="#E93838" />
                          <path clipRule="evenodd" d={svgPaths.p33787c80} fill="#E93838" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Frame6 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Stage />
      <Frame25 />
    </div>
  );
}

function GateIn2() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Entry
      </p>
    </div>
  );
}

function StageFilters1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="Stage filters">
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="jfrog/project">
            <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.592" preserveAspectRatio="none" viewBox="0 0 13.3333 13.592" width="13.3333">
                <path d={svgPaths.p1b5bee80} fill="#414857" id="ic" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            qa
          </p>
        </div>
      </div>
    </div>
  );
}

function GateIn3() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Exit
      </p>
    </div>
  );
}

function Stage1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="stage">
      <GateIn2 />
      <StageFilters1 />
      <GateIn3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">3.0.0</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="graph">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/flowchart">
              <div className="absolute inset-[20.83%_7.05%_11.54%_12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8205" preserveAspectRatio="none" viewBox="0 0 12.8718 10.8205" width="12.8718">
                  <path d={svgPaths.p16e26900} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VersionNumber1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Version-number">
      <Frame33 />
      <Frame20 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">DEV</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="arrows/arrow-right">
        <div className="absolute inset-[29.17%_16.67%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 10.6667 6.66667" width="10.6667">
            <path clipRule="evenodd" d={svgPaths.p31cc2e80} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">apptrust-demos-qa</p>
      </div>
    </div>
  );
}

function Path1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Path">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/copy-version">
        <div className="absolute flex inset-[7.19%_15.04%_9.96%_19.69%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.4442" preserveAspectRatio="none" viewBox="0 0 13.2563 10.4442" width="13.2563">
                <path d={svgPaths.p33fe9d30} fill="#5E6D81" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Date">
      <DateAndTimeCalendar className="overflow-clip relative shrink-0 size-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 16:43</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Data">
      <Path1 />
      <Date1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[0px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] text-[12px]" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
          Promotion from DEV to qa- Passed with warnings
        </p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5e6d81] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 16:43</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">2.0.0</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="graph">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/flowchart">
              <div className="absolute inset-[20.83%_7.05%_11.54%_12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8205" preserveAspectRatio="none" viewBox="0 0 12.8718 10.8205" width="12.8718">
                  <path d={svgPaths.p16e26900} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VersionNumber2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Version-number">
      <Frame34 />
      <Frame21 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">DEV</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="arrows/arrow-right">
        <div className="absolute inset-[29.17%_16.67%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 10.6667 6.66667" width="10.6667">
            <path clipRule="evenodd" d={svgPaths.p31cc2e80} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">apptrust-demos-qa</p>
      </div>
    </div>
  );
}

function Path2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Path">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/copy-version">
        <div className="absolute flex inset-[7.19%_15.04%_9.96%_19.69%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.4442" preserveAspectRatio="none" viewBox="0 0 13.2563 10.4442" width="13.2563">
                <path d={svgPaths.p33fe9d30} fill="#5E6D81" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Date">
      <DateAndTimeCalendar className="overflow-clip relative shrink-0 size-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 15:02</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Data">
      <Path2 />
      <Date2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px relative">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[0px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] text-[12px]" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
          Promotion from DEV to qa- Passed with warnings
        </p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5e6d81] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Aug 2, 2026 16:43</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[160px] items-start relative shrink-0">
      <div className="bg-white h-[160px] relative rounded-[4px] shrink-0 w-[230px]" data-name=".kanban-card/Yes">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
            <VersionNumber1 />
            <Data1 />
            <div className="bg-[#fbf1dd] relative rounded-[2px] shrink-0 w-full" data-name=".Alert">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[5px] items-center px-[8px] py-[4px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/alert">
                    <div className="absolute inset-[8.33%]" data-name="ic">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                        <g id="ic">
                          <path d={svgPaths.p36ccea00} fill="#F59E0B" />
                          <path d={svgPaths.p3b06cd80} fill="#F59E0B" />
                          <path clipRule="evenodd" d={svgPaths.p33787c80} fill="#F59E0B" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Frame7 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white h-[160px] relative rounded-[4px] shrink-0 w-[230px]" data-name=".kanban-card/Yes">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
            <VersionNumber2 />
            <Data2 />
            <div className="bg-[#fbf1dd] relative rounded-[2px] shrink-0 w-full" data-name=".Alert">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[5px] items-center px-[8px] py-[4px] relative size-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/alert">
                    <div className="absolute inset-[8.33%]" data-name="ic">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                        <g id="ic">
                          <path d={svgPaths.p36ccea00} fill="#F59E0B" />
                          <path d={svgPaths.p3b06cd80} fill="#F59E0B" />
                          <path clipRule="evenodd" d={svgPaths.p33787c80} fill="#F59E0B" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <Frame9 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[160px] items-start relative shrink-0">
      <Frame30 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Stage1 />
      <Frame27 />
    </div>
  );
}

function StageFilters2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="Stage filters">
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="jfrog/project">
            <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.592" preserveAspectRatio="none" viewBox="0 0 13.3333 13.592" width="13.3333">
                <path d={svgPaths.p1b5bee80} fill="#414857" id="ic" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
            pre-prod
          </p>
        </div>
      </div>
    </div>
  );
}

function GateIn4() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Exit
      </p>
    </div>
  );
}

function Stage2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="stage">
      <StageFilters2 />
      <GateIn4 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-[1_0_0] flex-col h-full items-center min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Stage2 />
    </div>
  );
}

function GateIn5() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-col h-[40px] items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[44px]" data-name="Gate-In">
      <div aria-hidden className="absolute border border-[#415980] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#414857] text-[10px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Release
      </p>
    </div>
  );
}

function StageFilters3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative" data-name="Stage filters">
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#414857] text-[0px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="leading-[22px] text-[14px]">{`prod `}</span>
            <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] text-[#999db4] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              (Release)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Stage3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="stage">
      <GateIn5 />
      <StageFilters3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[128px]">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">1.0.0</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <div className="relative rounded-[4px] shrink-0 size-[20px]" data-name="graph">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="general/flowchart">
              <div className="absolute inset-[20.83%_7.05%_11.54%_12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8205" preserveAspectRatio="none" viewBox="0 0 12.8718 10.8205" width="12.8718">
                  <path d={svgPaths.p16e26900} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trusted badge">
        <div className="absolute inset-[8.94%_17.71%]" data-name="Vector">
          <div className="absolute inset-[-3.04%_-3.87%]">
            <svg className="block size-full" fill="none" height="17.4247" preserveAspectRatio="none" viewBox="0 0 13.9167 17.4247" width="13.9167">
              <path d={svgPaths.pd8ecb00} fill="url(#paint0_linear_0_4114)" id="Vector" stroke="#2A8553" strokeWidth="0.5" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_4114" x1="3.625" x2="9.5625" y1="4.31348" y2="12.6468">
                  <stop stopColor="#7CCF83" />
                  <stop offset="1" stopColor="#2D975C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.39%_27.34%_37.85%_31.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="5.75044" preserveAspectRatio="none" viewBox="0 0 8.26265 5.75044" width="8.26265">
            <path d={svgPaths.p27ef7a00} fill="#F5F5F5" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VersionNumber3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Version-number">
      <Frame35 />
      <Frame22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">
          apptrust-
          <br aria-hidden />
          demos-qa
        </p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="arrows/arrow-right">
        <div className="absolute inset-[29.17%_16.67%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 10.6667 6.66667" width="10.6667">
            <path clipRule="evenodd" d={svgPaths.p31cc2e80} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">
          apptrust-demos-
          <br aria-hidden />
          pre-prod
        </p>
      </div>
    </div>
  );
}

function Path3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Path">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/move-version">
        <div className="absolute flex inset-[7.19%_15.04%_9.96%_19.69%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
            <div className="relative size-full" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="10.4442" preserveAspectRatio="none" viewBox="0 0 13.2563 10.4442" width="13.2563">
                <path d={svgPaths.p27b957e0} fill="#5E6D81" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Date">
      <DateAndTimeCalendar className="overflow-clip relative shrink-0 size-[16px]" />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">15 May 2024 8:30 am</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Data">
      <Path3 />
      <Date3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <div className="bg-white relative rounded-[4px] shrink-0 w-[230px]" data-name=".kanban-card/Yes">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
            <VersionNumber3 />
            <Data3 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#eef3f8] content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#eef3f8] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Stage3 />
      <Frame31 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center justify-end min-h-px relative w-full">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-end min-h-px relative w-[1079px]">
      <Frame23 />
      <ScrollBar className="relative shrink-0 w-[82px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px relative w-full">
      <Frame26 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end min-h-px relative w-[1078px]">
      <KanbanTop />
      <Frame28 />
    </div>
  );
}

function Lifecycle() {
  return (
    <div className="h-full relative shrink-0" data-name="Lifecycle">
      <div className="content-stretch flex flex-col gap-[16px] items-start py-[10px] relative size-full">
        <Frame14 />
        <Frame24 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] h-[615px] items-start relative shrink-0 w-full">
      <ApplicationMenu />
      <Lifecycle />
    </div>
  );
}

function Content13() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <div className="relative shrink-0 w-full" data-name=".bread-crums">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between relative size-full">
                <Frame2 />
                <Frame />
              </div>
            </div>
          </div>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[1200px]">
      <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name="nav-bar">
        <div className="flex flex-row items-center justify-center size-full">
          
        </div>
      </div>
      <Content13 />
    </div>
  );
}

function CanbanRight() {
  return (
    <div className="absolute bg-white content-stretch flex h-[812px] items-center left-0 top-[-1px] w-[1440px]" data-name="CANBAN RIGHT">
      <div className="bg-[#1f2f4a] h-[900px] relative shrink-0 w-[240px]" data-name="sidebar_platform">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-between relative size-full">
            <Header />
            <ProjectDropdown />
            <Body />
            <div className="bg-[#1f2f4a] h-[128px] relative shrink-0 w-full" data-name=".sidebar-footer">
              <div aria-hidden className="absolute border-[#708cb2] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pt-[12px] relative size-full">
                <LogoIconButton />
                <Content12 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame11 />
    </div>
  );
}

function Header1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <div className="relative shrink-0" data-name=".side-bar_logo">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center relative size-full">
                <div className="h-[17.174px] relative shrink-0 w-[46.45px]" data-name="ic">
                  <svg className="absolute block inset-0 size-full" fill="none" height="17.1738" preserveAspectRatio="none" viewBox="0 0 46.4502 17.1738" width="46.4502">
                    <g id="ic">
                      <path d={svgPaths.p2f23a200} fill="#3EB065" />
                      <path d={svgPaths.p1a3dd600} fill="#3EB065" />
                      <path d={svgPaths.p1019b2c0} fill="#3EB065" />
                      <path d={svgPaths.pef0000} fill="#3EB065" />
                      <path d={svgPaths.p33b0d980} fill="#3EB065" />
                    </g>
                  </svg>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[22px]" dir="auto">
                    Platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsDropdown1() {
  return (
    <div className="bg-[#152033] relative rounded-[4px] shrink-0 w-full" data-name=".projects dropdown">
      <div aria-hidden className="absolute border border-[#d2dfed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <ProjectsBadge className="bg-[#1d6ce2] relative rounded-[100px] shrink-0" type="project" />
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px] overflow-hidden text-ellipsis">Apptrust Demos</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
            <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667" width="11.6667">
                <path d={svgPaths.p9434780} fill="white" id="ic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDropdown1() {
  return (
    <div className="relative shrink-0 w-full" data-name="project dropdown">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pt-[12px] px-[16px] relative size-full">
          <div className="relative shrink-0 w-[200px]" data-name=".projects expanded">
            <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative size-full">
              <ProjectsDropdown1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/apptrust">
        <div className="absolute inset-[9.38%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.4971" preserveAspectRatio="none" viewBox="0 0 18 19.4971" width="18">
            <g id="ic">
              <path d={svgPaths.p2ce8f0f0} fill="#EAEEF5" />
              <path d={svgPaths.p6cb1700} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[14px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">AppTrust</p>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/artifactory">
        <div className="absolute inset-[10.42%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.pc949d80} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Artifactory</p>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/xray">
        <div className="absolute inset-[16.67%_8.33%_12.5%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 20 17" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1b6f5500} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p32e23700} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Xray</p>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/curation">
        <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1faf03f0} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb63100} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Curation</p>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="jfrog/runtime">
        <div className="absolute inset-[8.33%_8.33%_7.78%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.1333" preserveAspectRatio="none" viewBox="0 0 20 20.1333" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1e45fe80} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p3c89d800} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Runtime</p>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/package-catalog">
        <div className="absolute inset-[17.71%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 20 15.5" width="20">
            <path clipRule="evenodd" d={svgPaths.p19de9300} fill="#EAEEF5" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Catalog</p>
      </div>
    </div>
  );
}

function Content30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/distribution">
        <div className="absolute inset-[8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p16a205e0} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3b07fa00} fill="#EAEEF5" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Distribution</p>
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/ml-side-bar">
        <div className="absolute inset-[10.94%_12.5%_8.33%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.3751" preserveAspectRatio="none" viewBox="0 0 18 19.3751" width="18">
            <g id="ic">
              <path d={svgPaths.p347fc700} fill="#EAEEF5" />
              <path d={svgPaths.p33ed1f00} fill="#EAEEF5" />
              <path clipRule="evenodd" d={svgPaths.p1cfe6200} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p7766080} fill="#EAEEF5" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19eda200} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p161f7b80} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">ML</p>
      </div>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/pipelines">
        <div className="absolute inset-[8.33%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p56df00} fill="#EAEEF5" fillRule="evenodd" />
              <path d={svgPaths.p3bfa9200} fill="#EAEEF5" />
              <path d={svgPaths.p1d64c00} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Pipelines</p>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="divider">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative size-full">
          <div className="h-[12px] relative shrink-0 w-full" data-name="divider/horizontal/surface primary">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center relative size-full">
                <div className="bg-[#eaeef5] h-px relative rounded-[1px] shrink-0 w-full" data-name="divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/integrations">
        <div className="absolute inset-[12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <path clipRule="evenodd" d={svgPaths.p15cf1580} fill="white" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Integrations</p>
      </div>
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/my-jfrog">
        <div className="absolute inset-[8.33%_5.83%_5.83%_8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20.6" preserveAspectRatio="none" viewBox="0 0 20.6 20.6" width="20.6">
            <g id="ic">
              <path d={svgPaths.p39809a00} fill="#EAEEF5" />
              <path d={svgPaths.p532a080} fill="#EAEEF5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">AppTrust Settings</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="body">
      <div className="content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content24 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".sidebar-list">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Insights</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#3eb065] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[19px]">Applications</p>
                  </div>
                  <div className="absolute bg-[#3eb065] h-[12px] left-[42px] rounded-br-[4px] rounded-tr-[4px] top-[11.5px] w-[2px]" data-name="line" />
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Lifecycle Policies</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Compliance</p>
                  </div>
                  <NavigationTag className="bg-white h-[20px] relative rounded-[2px] shrink-0" />
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Waivers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#152033] relative shrink-0 w-full" data-name=".sidebar-item-inner-list">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[56px] pr-[12px] py-[8px] relative size-full">
                  <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[22px]">Activity Log</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content25 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content26 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content27 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content28 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content29 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content30 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content31 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content32 />
            </div>
          </div>
        </div>
        <Divider2 />
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content33 />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2f4a] relative shrink-0 w-full" data-name=".sidebar-item">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative size-full">
              <Content34 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoIconButton1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="logo+icon_button">
      <div className="overflow-clip relative shrink-0 size-[36px]" data-name="Jfrog">
        <div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="30.9375" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375" width="32.625">
            <path d={svgPaths.p1c3cb000} fill="#3EB065" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[#2d4264] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 size-[32px]" data-name=".footer-button-icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name=".nav-icon-arrow-closed">
              <div className="absolute inset-[29.17%_33.33%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 8 10" width="8">
                  <path d={svgPaths.p3afd0c00} fill="#B4BACC" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#eaeef5] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] mb-0">{`Enterprise Plus 7.38.8 rev 73808900 Licensed to Jfrog © Copyright 2024 `}</p>
        <p className="leading-[16px]">JFrog Ltd</p>
      </div>
    </div>
  );
}

export default function CanbanEvaluationCreateRequest() {
  return (
    <div className="relative size-full" data-name="Canban - Evaluation -create request">
      <CanbanRight />
      <div className="absolute bg-[#1f2f4a] h-[811px] left-0 top-[-1px] w-[240px]" data-name="sidebar_platform">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-between relative size-full">
            <Header1 />
            <ProjectDropdown1 />
            <Body2 />
            <div className="bg-[#1f2f4a] h-[128px] relative shrink-0 w-full" data-name=".sidebar-footer">
              <div aria-hidden className="absolute border-[#708cb2] border-solid border-t inset-0 pointer-events-none" />
              <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pt-[12px] relative size-full">
                <LogoIconButton1 />
                <Content35 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}