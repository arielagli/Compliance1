type SwitchProps = {
  className?: string;
  on?: boolean;
  state?: "enabled" | "hover" | "focus" | "disabled";
};

export default function Switch({ className, on = true, state = "enabled" }: SwitchProps) {
  if (!on && state === "disabled") {
    return (
      <div className={className || "bg-[#eaeef5] relative rounded-[12px] w-[32px]"} data-name="on=off, state=disabled">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center pl-[2px] pr-[16px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (on && state === "disabled") {
    return (
      <div className={className || "bg-[#d9fad2] relative rounded-[12px] w-[32px]"} data-name="on=on, state=disabled">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-end pl-[16px] pr-[2px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!on && state === "focus") {
    return (
      <button className={className || "bg-[#999db4] cursor-pointer relative rounded-[12px]"} data-name="on=off, state=focus">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[2px] pr-[16px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-[100px]" data-name="focus indicator">
              <div aria-hidden className="absolute border-2 border-[#1d6ce2] border-solid inset-[-2px] pointer-events-none rounded-[102px]" />
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (on && state === "focus") {
    return (
      <button className={className || "bg-[#2a8553] cursor-pointer relative rounded-[12px] w-[32px]"} data-name="on=on, state=focus">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end pl-[16px] pr-[2px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-[100px]" data-name="focus indicator">
              <div aria-hidden className="absolute border-2 border-[#1d6ce2] border-solid inset-[-2px] pointer-events-none rounded-[102px]" />
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (!on && state === "hover") {
    return (
      <button className={className || "bg-[#999db4] cursor-pointer relative rounded-[12px] w-[32px]"} data-name="on=off, state=hover">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center pl-[2px] pr-[16px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (on && state === "hover") {
    return (
      <button className={className || "bg-[#20633e] cursor-pointer relative rounded-[12px] w-[32px]"} data-name="on=on, state=hover">
        <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-end pl-[16px] pr-[2px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }
  if (!on && state === "enabled") {
    return (
      <button className={className || "bg-[#999db4] cursor-pointer relative rounded-[12px] w-[32px]"} data-name="on=off, state=enabled">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center pl-[2px] pr-[16px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="knob">
              <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
                <circle cx="7" cy="7" fill="white" id="knob" r="7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "bg-[#2a8553] relative rounded-[12px] w-[32px]"} data-name="on=on, state=enabled">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end pl-[16px] pr-[2px] py-[2px] relative size-full">
          <div className="relative shrink-0 size-[14px]" data-name="knob">
            <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
              <circle cx="7" cy="7" fill="white" id="knob" r="7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}