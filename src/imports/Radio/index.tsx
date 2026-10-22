import svgPaths from "./svg-n3smnu9ojw";
type RadioProps = {
  className?: string;
  state?: "enabled" | "hover" | "on-click" | "focused" | "disabled" | "validation";
  type?: boolean;
};

export default function Radio({ className, state = "enabled", type = true }: RadioProps) {
  if (!type && state === "disabled") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=unchecked, state=disabled">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p26f6c1b0} fill="#F8FAFB" id="background" />
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#C9D0E3" fillRule="evenodd" id="border" />
        </svg>
      </div>
    );
  }
  if (!type && state === "validation") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=unchecked, state=validation">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p26f6c1b0} fill="white" id="background" />
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#D72D2D" fillRule="evenodd" id="border" />
        </svg>
      </div>
    );
  }
  if (!type && state === "focused") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=unchecked, state=focused">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#1D6CE2" fillRule="evenodd" id="border" />
        </svg>
      </div>
    );
  }
  if (!type && state === "hover") {
    return (
      <button className={className || "block cursor-pointer relative size-[16px]"} data-name="type=unchecked, state=hover">
        <div className="absolute left-0 size-[16px] top-0" data-name="bg">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <path d={svgPaths.p26f6c1b0} fill="#D9FAD2" id="bg" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#2A8553" fillRule="evenodd" id="ic" />
        </svg>
      </button>
    );
  }
  if (!type && state === "on-click") {
    return (
      <button className={className || "block cursor-pointer relative size-[16px]"} data-name="type=unchecked, state=on-click">
        <div className="absolute left-0 size-[16px] top-0" data-name="bg">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <path d={svgPaths.p26f6c1b0} fill="#EDFCE8" id="bg" />
          </svg>
        </div>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#2A8553" fillRule="evenodd" id="ic" />
        </svg>
      </button>
    );
  }
  if (!type && state === "enabled") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=unchecked, state=enabled">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#C9D0E3" fillRule="evenodd" id="ic" />
        </svg>
      </div>
    );
  }
  if (type && state === "disabled") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=checked, state=disabled">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p26f6c1b0} fill="#F8FAFB" id="background" />
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#C9D0E3" fillRule="evenodd" id="circle" />
        </svg>
        <div className="absolute inset-1/4" data-name="border">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="#C9D0E3" id="border" r="4" />
          </svg>
        </div>
      </div>
    );
  }
  if (type && state === "validation") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=checked, state=validation">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path d={svgPaths.p26f6c1b0} fill="white" id="background" />
        </svg>
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#D72D2D" fillRule="evenodd" id="circle" />
        </svg>
      </div>
    );
  }
  if (type && state === "focused") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=checked, state=focused">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#1D6CE2" fillRule="evenodd" id="border" />
        </svg>
        <div className="absolute inset-1/4" data-name="border">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="#2A8553" id="border" r="4" />
          </svg>
        </div>
      </div>
    );
  }
  if (type && state === "on-click") {
    return (
      <div className={className || "relative size-[16px]"} data-name="type=checked, state=on-click">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#2A8553" fillRule="evenodd" id="circle" />
        </svg>
        <div className="absolute inset-1/4" data-name="border">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="#2A8553" id="border" r="4" />
          </svg>
        </div>
      </div>
    );
  }
  if (type && state === "hover") {
    return (
      <button className={className || "block cursor-pointer relative size-[16px]"} data-name="type=checked, state=hover">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
          <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#20633E" fillRule="evenodd" id="circle" />
        </svg>
        <div className="absolute inset-1/4" data-name="border">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
            <circle cx="4" cy="4" fill="#20633E" id="border" r="4" />
          </svg>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "relative size-[16px]"} data-name="type=checked, state=enabled">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="#2A8553" fillRule="evenodd" id="circle" />
      </svg>
      <div className="absolute inset-1/4" data-name="border">
        <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 8 8" width="8">
          <circle cx="4" cy="4" fill="#2A8553" id="border" r="4" />
        </svg>
      </div>
    </div>
  );
}