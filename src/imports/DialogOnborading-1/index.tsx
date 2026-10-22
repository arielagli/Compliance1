import svgPaths from "./svg-6kkb34hn58";

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
        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[472px]" data-name="divider">
          <div className="bg-[#eaeef5] h-px relative shrink-0 w-full" data-name="divider" />
        </div>
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="general/search">
        <div className="absolute inset-[17.29%_14.17%_18.78%_18.06%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5534 12.7848">
            <path clipRule="evenodd" d={svgPaths.p9cd5e00} fill="var(--fill-0, #5E6D81)" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">Search rules</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white h-[34px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">All types</p>
          </div>
          <div className="relative shrink-0 size-[20px]" data-name=".select multi-chevron">
            <div className="absolute content-stretch flex inset-0 items-center justify-center rounded-[4px]" data-name="button-icon">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-down">
                <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
                    <path d={svgPaths.p1e229180} fill="var(--fill-0, #414857)" id="ic" />
                  </svg>
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] h-[34px] min-w-px relative rounded-[4px]" data-name="input-search">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[8px] relative size-full">
            <Content />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[149px]" data-name="select-single-input">
        <Content1 />
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
              <path clipRule="evenodd" d={svgPaths.p2425dd00} fill="var(--fill-0, #C9D0E3)" fillRule="evenodd" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RuleIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="relative shrink-0 size-[20px]" data-name="workflow">
        <div className="absolute inset-[11.68%_17.76%_9.11%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9484 15.8407">
            <path d={svgPaths.p31b0c780} fill="var(--fill-0, #414857)" id="ic" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer />
      </div>
      <RuleIcon />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
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

function GeneralShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer1 />
      </div>
      <RuleIcon1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer2() {
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

function GeneralShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck1 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer2 />
      </div>
      <RuleIcon2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer3() {
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

function RuleIcon3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="relative shrink-0 size-[20px]" data-name="workflow">
        <div className="absolute inset-[11.68%_17.76%_9.11%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9484 15.8407">
            <path d={svgPaths.p31b0c780} fill="var(--fill-0, #414857)" id="ic" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer3 />
      </div>
      <RuleIcon3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer4() {
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

function GeneralShieldCheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck2 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer4 />
      </div>
      <RuleIcon4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer5() {
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

function GeneralShieldCheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck3 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer5 />
      </div>
      <RuleIcon5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer6() {
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

function GeneralShieldCheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck4 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer6 />
      </div>
      <RuleIcon6 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RadioButtonContainer7() {
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

function GeneralShieldCheck5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="var(--fill-0, #414857)" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function RuleIcon7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="rule+icon">
      <div className="content-stretch flex items-center relative shrink-0" data-name="workflow">
        <GeneralShieldCheck5 />
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative">
      <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0" data-name="radio-item">
        <RadioButtonContainer7 />
      </div>
      <RuleIcon7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center pl-[12px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p9434780} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[64px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="list">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[12px] relative size-full">
            <div className="content-stretch flex items-center py-[8px] relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
                    <Frame1 />
                    <Frame11 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start py-[8px] relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
                    <Frame2 />
                    <Frame12 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame5 />
                    <Frame13 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame6 />
                    <Frame14 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame7 />
                    <Frame15 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame8 />
                    <Frame16 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame9 />
                    <Frame17 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="card_slot">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".rule with radio">
              <div className="flex-[1_0_0] min-w-px relative" data-name=".rule with radio">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
                    <Frame10 />
                    <Frame18 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <List />
    </div>
  );
}

function Scroll() {
  return <div className="bg-[#eaeef5] h-full relative rounded-[8px] shrink-0 w-[6px]" data-name="scroll" />;
}

function SlotBottom() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="slot-bottom">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Property 1=replace_1">
        <Frame4 />
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
      <div className="content-stretch flex flex-col gap-[24px] items-start max-h-[inherit] px-[24px] py-[8px] relative size-full">
        <SlotBottom />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-w-px relative" data-name="buttons">
      <div className="content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Back
        </p>
      </div>
      <div className="bg-[#3eb065] content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Done
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