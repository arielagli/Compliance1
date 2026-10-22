type ImpactProps = {
  className?: string;
  property1?: "Low" | "High" | "Critical" | "Medium";
};

export default function Impact({ className, property1 = "Low" }: ImpactProps) {
  return (
    <div className={className || "bg-white overflow-clip relative size-[24px]"}>
      <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
        <div className={`h-[3px] relative rounded-[1px] shrink-0 w-full ${property1 === "Critical" ? "bg-[#3eb065]" : "bg-[#eaeef5]"}`} />
        <div className={`h-[3px] relative rounded-[1px] shrink-0 w-full ${["High", "Critical"].includes(property1) ? "bg-[#3eb065]" : "bg-[#eaeef5]"}`} />
        <div className={`h-[3px] relative rounded-[1px] shrink-0 w-full ${["Medium", "High", "Critical"].includes(property1) ? "bg-[#3eb065]" : "bg-[#eaeef5]"}`} />
        <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />
      </div>
    </div>
  );
}