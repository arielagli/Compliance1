import svgPaths from "./svg-eoiu9e84cj";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[33px]" data-name="general/block">
        <div className="absolute inset-[12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.75 24.75">
            <path d={svgPaths.p16867f0} fill="var(--fill-0, #E93838)" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25px]">{`Disable Rule? `}</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0" data-name=".header">
      <Frame />
    </div>
  );
}

function SlotTop() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="slot-top">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name=".slot-top">
        <Header1 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center pb-[8px] pt-[16px] px-[24px] relative size-full">
          <SlotTop />
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="button-icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/close">
              <div className="absolute inset-[23.57%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.459 8.459">
                  <path d={svgPaths.p21439910} fill="var(--fill-0, #414857)" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center min-w-[32px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">PO.3.2</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="bg-[#039] overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Property 1=small">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[9.898px] justify-center leading-[0] left-[calc(50%-0.16px)] text-[6px] text-center text-white top-[calc(50%+0.72px)] w-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]" dir="auto">
            CRA
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">EU CRA</p>
      </div>
    </div>
  );
}

function Frameworks() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="frameworks">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
        <Tag1 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
        <Tag />
      </div>
      <Frameworks />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="content">
      <Frame2 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Configuration & Attack Surface Minimization`}</p>
    </div>
  );
}

function TestDropdownListItemL() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name=".TEST dropdown-list - item l">
      <div className="content-stretch flex items-start px-[8px] py-[12px] relative size-full">
        <Content />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
        <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[19px] leading-[16px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        On Control
      </p>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".slot">
              <TestDropdownListItemL />
              <Frame3 />
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function LabelMandatoryIcon() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Open_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[19px] relative shrink-0 text-[14px]" data-name="label + mandatory icon">
      <p className="relative shrink-0 text-[#5e6d81] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Disable Reason
      </p>
      <p className="h-[19px] relative shrink-0 text-[#e93838] w-[8px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        *
      </p>
    </div>
  );
}

function TextButton() {
  return (
    <div className="content-stretch flex gap-[8px] h-[126px] items-start relative shrink-0 w-full" data-name="text+button">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] min-w-px overflow-hidden relative self-stretch text-[#999db4] text-[14px] text-ellipsis whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px] mb-0">{`Why can’t this rule be enforced for this framwork? `}</p>
        <p className="leading-[22px]">​</p>
      </div>
    </div>
  );
}

function BottomContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#999db4] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]">0/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white min-h-[34px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center min-h-[inherit] p-[12px] relative size-full">
          <TextButton />
          <BottomContent />
          <div className="absolute bottom-[0.32px] overflow-clip right-0 size-[24px]" data-name="icon">
            <div className="absolute inset-1/4" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g id="ic">
                  <path d={svgPaths.p2d09ae84} fill="var(--fill-0, #414857)" />
                  <path d={svgPaths.p15df4d00} fill="var(--fill-0, #414857)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlotBottom() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="slot-bottom">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Property 1=disable">
        <Frame1 />
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="divider">
          <div className="bg-[#eaeef5] h-px relative shrink-0 w-full" data-name="divider" />
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start min-h-[58px] min-w-[240px] relative shrink-0 w-full" data-name="input-textarea">
          <div className="content-stretch flex gap-[2px] h-[20px] items-center relative shrink-0 w-full" data-name=".label">
            <LabelMandatoryIcon />
          </div>
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="max-h-[626px] relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-h-[inherit] px-[24px] py-[8px] relative size-full">
        <SlotBottom />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start justify-end min-w-px relative" data-name="buttons">
      <div className="content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Cancel
        </p>
      </div>
      <div className="bg-[#f8fafb] content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#c9d0e3] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Disable
        </p>
      </div>
    </div>
  );
}

export default function DialogOnborading() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)] size-full" data-name="dialog-onborading">
      <Header />
      <Body />
      <div className="bg-white relative shrink-0 w-full" data-name=".dialog-footer">
        <div aria-hidden className="absolute border-[#eaeef5] border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[187px] items-center justify-center px-[24px] py-[12px] relative size-full">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}