import svgPaths from "./svg-qaezawa8k3";

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[33px]" data-name="layout and sorting/swap-horizontal">
        <div className="absolute inset-[21.64%_13.87%_21.72%_13.87%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8459 18.6893">
            <path d={svgPaths.p3714fa00} fill="var(--fill-0, #414857)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25px]">{`Replace Rule? `}</p>
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
      <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
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

function Frame7() {
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
      <Frame7 />
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

function Frame8() {
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

function Tag2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center min-w-[32px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">PO.3.2</p>
      </div>
    </div>
  );
}

function Tag3() {
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

function Frameworks1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="frameworks">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
        <Tag3 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
        <Tag2 />
      </div>
      <Frameworks1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="content">
      <Frame9 />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`Configuration & Attack Surface Minimization`}</p>
    </div>
  );
}

function TestDropdownListItemL1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name=".TEST dropdown-list - item l">
      <div className="content-stretch flex items-start px-[8px] py-[12px] relative size-full">
        <Content1 />
      </div>
    </div>
  );
}

function Frame10() {
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
        On Controls
      </p>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".slot">
              <TestDropdownListItemL />
              <Frame8 />
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name=".slot">
              <TestDropdownListItemL1 />
              <Frame10 />
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
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="label + mandatory icon">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[#414857] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <span className="leading-[16px] text-[12px]">Reason</span>
        <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>{` (optional)`}</span>
      </p>
    </div>
  );
}

function TextButton() {
  return (
    <div className="content-stretch flex gap-[8px] h-[126px] items-start relative shrink-0 w-full" data-name="text+button">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] min-w-px overflow-hidden relative self-stretch text-[#999db4] text-[12px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Why this change required? `}</p>
    </div>
  );
}

function BottomContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="bottom content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[#999db4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px]">0/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[34px] relative rounded-[4px] w-full" data-name="content">
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

function RadioButtonContainer() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[16px]" data-name="radio button container">
        <div className="content-stretch flex items-start pt-[3px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="radio">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="var(--fill-0, #3EB065)" fillRule="evenodd" id="circle" />
            </svg>
            <div className="absolute inset-1/4" data-name="border">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="var(--fill-0, #3EB065)" id="border" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] h-[19px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        Choose exiting rule
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[44px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[32px] relative size-full">
          <div className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal h-full leading-[0] min-w-px overflow-hidden relative text-[#414857] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[16px] mb-0" dir="auto">
              Pick from the rules already
            </p>
            <p className="leading-[16px]">{`in your library. Fastest path. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[16px]" data-name="radio button container">
        <div className="content-stretch flex items-start pt-[3px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="radio">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="var(--fill-0, #C9D0E3)" fillRule="evenodd" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] h-[19px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer1 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        Build in Playground
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[32px] relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        Author a new rule from scratch
        <br aria-hidden />
        define logic, text text text
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[79px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f8fafb] flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="card_slot">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start py-[4px] relative shrink-0 w-full" data-name="choose">
                <Frame2 />
                <Frame6 />
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f8fafb] flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="card_slot">
          <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative size-full">
              <div className="flex-[1_0_0] min-h-px relative w-full" data-name="choose">
                <div className="content-stretch flex flex-col gap-[4px] items-start py-[4px] relative size-full">
                  <Frame3 />
                  <Frame11 />
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[19px] leading-[16px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-ellipsis w-full whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`How do you want to replace this rule? `}</p>
      <Frame4 />
    </div>
  );
}

function Scroll() {
  return <div className="bg-[#eaeef5] h-full relative rounded-[8px] shrink-0 w-[6px]" data-name="scroll" />;
}

function SlotBottom() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="slot-bottom">
      <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Property 1=replace_2">
        <Frame1 />
        <div className="content-stretch flex flex-col gap-[4px] h-[84px] items-start min-h-[58px] min-w-[240px] relative shrink-0 w-full" data-name="input-textarea">
          <div className="content-stretch flex gap-[2px] h-[20px] items-center relative shrink-0 w-full" data-name=".label">
            <LabelMandatoryIcon />
          </div>
          <Content2 />
        </div>
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="divider">
          <div className="bg-[#eaeef5] h-px relative shrink-0 w-full" data-name="divider" />
        </div>
        <Frame5 />
        <div className="absolute content-stretch flex h-[197px] items-center justify-end left-[731.5px] pl-[4px] py-[24px] top-[253px]" data-name="scroll-bar">
          <Scroll />
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="flex-[1_0_0] max-h-[626px] min-h-px relative w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-h-[inherit] pb-[8px] pt-[12px] px-[24px] relative size-full">
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
      <div className="bg-[#3eb065] content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Next
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