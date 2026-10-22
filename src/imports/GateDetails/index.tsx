import svgPaths from "./svg-r0lqslklq5";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#414857] text-[18px] whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        PROD release gate
      </p>
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[16px]">
            <div className="absolute inset-[-1.5px_0_0_0]">
              <svg className="block size-full" fill="none" height="1.5" preserveAspectRatio="none" viewBox="0 0 16 1.5" width="16">
                <line id="Line 330" stroke="#414857" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="15.25" y1="0.75" y2="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[25px] relative shrink-0 text-[#414857] text-[18px] whitespace-nowrap" dir="auto" style={{ fontVariationSettings: '"wdth" 100' }}>
        Lifecycle Policies
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <div className="bg-[#2a8553] h-[28px] max-h-[28px] min-h-[28px] min-w-[76px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center max-h-[inherit] min-h-[inherit] min-w-[inherit] px-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/add">
              <div className="absolute inset-[22.92%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.66667" preserveAspectRatio="none" viewBox="0 0 8.66667 8.66667" width="8.66667">
                  <path d={svgPaths.p1420f780} fill="white" id="ic" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              Create Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f8fafb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Frame4 />
        <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[14px] w-[664px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[22px]" dir="auto">
            View the policies that get triggered based on the PROD lifecycle stage release gate
          </p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#415980] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Lifecycle Policies
      </p>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="left content">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25px]">Lifecycle Policies (3)</p>
      </div>
    </div>
  );
}

function IconButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="icon buttons">
      <div className="bg-[#eaeef5] relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="layout and sorting/columns">
              <div className="absolute inset-[20.83%_12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 15 11.6667" width="15">
                  <path d={svgPaths.p2f634500} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="right content">
      <IconButtons />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="table">
      <div className="h-[28px] relative shrink-0 w-full" data-name="table-header/table assets">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <LeftContent />
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function PendingRequests() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[675px] items-start min-w-px relative" data-name=".Pending_requests">
      <Table />
    </div>
  );
}

function TextInfoIcon() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#415980] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">{`Name & Rule`}</p>
      </div>
    </div>
  );
}

function TextIcons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-between min-w-px relative" data-name="text+icons">
      <TextInfoIcon />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons />
    </div>
  );
}

function GeneralShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Verify PR evidence</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`at least one approver that isn't the committer`}</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck />
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function GeneralShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis whitespace-pre">Verify Jira Evidence</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Verify Jira Evidence</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck1 />
          </div>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Global - Sonar Evidence w status ok Required</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">sonar-with-status-ok</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=workflow">
        <div className="absolute inset-[11.68%_17.76%_9.11%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.8407" preserveAspectRatio="none" viewBox="0 0 13.9484 15.8407" width="13.9484">
            <path d={svgPaths.p31b0c780} fill="#5E6D81" id="ic" />
          </svg>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#414857] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">prod-release-SLSA-passed</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">SLSA Evidence exist</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=workflow">
        <div className="absolute inset-[11.68%_17.76%_9.11%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.8407" preserveAspectRatio="none" viewBox="0 0 13.9484 15.8407" width="13.9484">
            <path d={svgPaths.p31b0c780} fill="#5E6D81" id="ic" />
          </svg>
        </div>
      </div>
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#414857] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px]">prod-release-Critical-CVE</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Critical CVE with CVSS score between 9.0 and 10.0 (ignore applicability)</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=workflow">
        <div className="absolute inset-[11.68%_17.76%_9.11%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.8407" preserveAspectRatio="none" viewBox="0 0 13.9484 15.8407" width="13.9484">
            <path d={svgPaths.p31b0c780} fill="#5E6D81" id="ic" />
          </svg>
        </div>
      </div>
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">aged version in promoted release bundle</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] overflow-hidden text-ellipsis">{`Package with license in banned license group {group id}`}</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=opperational">
        <div className="absolute flex inset-[10%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="15.9998" preserveAspectRatio="none" viewBox="0 0 16 15.9998" width="16">
                <path d={svgPaths.p373be740} id="Vector" stroke="#5E6D81" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Text5 />
    </div>
  );
}

function GeneralShieldCheck2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Malicious package detected</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Malicious package in app dependencies Build</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck2 />
          </div>
        </div>
      </div>
      <Text6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">block application version with banned licenses promoted to prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Package with license in banned license group {group id}`}</p>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text7 />
    </div>
  );
}

function GeneralShieldCheck3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Pentest approval evidence exist on app</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {pentest-approval} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck3 />
          </div>
        </div>
      </div>
      <Text8 />
    </div>
  );
}

function GeneralShieldCheck4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM VEX with vulnerability evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck4 />
          </div>
        </div>
      </div>
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text11 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] relative shrink-0 w-full" data-name="cell-title/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[24px] relative size-full">
            <Content2 />
            <div className="h-[20px] relative shrink-0 w-px" data-name=".divider">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 1 20" width="1">
                <path clipRule="evenodd" d={svgPaths.p780e000} fill="#7E8194" fillRule="evenodd" id="divider" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content4 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content5 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content6 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content8 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content9 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content10 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content11 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content12 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content13 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumnTableAssets() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[294px]" data-name="table-column/table assets">
      <Column />
    </div>
  );
}

function TextInfoIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Actions</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="general/info">
        <div className="absolute inset-[8.33%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
            <path clipRule="evenodd" d={svgPaths.p1ac657c0} fill="#5E6D81" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextIcons1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-between min-w-px relative" data-name="text+icons">
      <TextInfoIcon1 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons1 />
    </div>
  );
}

function Scroll() {
  return <div className="bg-[#eaeef5] h-[52px] relative rounded-[8px] shrink-0 w-[6px]" data-name="scroll" />;
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] min-w-[120px] relative shrink-0 w-full" data-name="cell-title/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] pl-[24px] relative size-full">
            <Content15 />
            <div className="h-[20px] relative shrink-0 w-px" data-name=".divider">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 1 20" width="1">
                <path clipRule="evenodd" d={svgPaths.p780e000} fill="#B4BACC" fillRule="evenodd" id="divider" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Fail</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Fail</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Fail</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Warning">
              <div className="absolute inset-[12.5%_7.24%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 17.1058 15" width="17.1058">
                  <path d={svgPaths.p26b0dc00} fill="#F59E0B" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Warning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Warning">
              <div className="absolute inset-[12.5%_7.24%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 17.1058 15" width="17.1058">
                  <path d={svgPaths.p26b0dc00} fill="#F59E0B" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Warning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-[258px]" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Property 1=Block">
              <div className="absolute inset-[7.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
                  <path d={svgPaths.p1d6f5700} fill="#E93838" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">{`Fail `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[468px] left-[123px] top-[616px] w-[10px]" data-name="scroll-bar-vertical">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end pl-[4px] py-[24px] relative size-full">
            <Scroll />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumnTableAssets1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[162px]" data-name="table-column/table assets">
      <Column1 />
    </div>
  );
}

function TextInfoIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Lifecycle Gate</p>
      </div>
    </div>
  );
}

function TextIcons2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-between min-w-px relative" data-name="text+icons">
      <TextInfoIcon2 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons2 />
    </div>
  );
}

function GeneralShieldCheck5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Malicious package detected</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Malicious package in app dependencies Build</p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck5 />
          </div>
        </div>
      </div>
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">block application version with banned licenses promoted to prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Package with license in banned license group {group id}`}</p>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text13 />
    </div>
  );
}

function GeneralShieldCheck6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Pentest approval evidence exist on app</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {pentest-approval} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck6 />
          </div>
        </div>
      </div>
      <Text14 />
    </div>
  );
}

function GeneralShieldCheck7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM VEX with vulnerability evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck7 />
          </div>
        </div>
      </div>
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text17 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] relative shrink-0 w-full" data-name="cell-title/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[24px] relative size-full">
            <Content16 />
            <div className="h-[20px] relative shrink-0 w-px" data-name=".divider">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 1 20" width="1">
                <path clipRule="evenodd" d={svgPaths.p780e000} fill="#B4BACC" fillRule="evenodd" id="divider" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">PROD | Release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">PROD | Release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">PROD | Release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">PROD | Release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">PROD | Release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content17 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content18 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content19 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content20 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content21 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumnTableAssets2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[198px]" data-name="table-column/table assets">
      <Column2 />
    </div>
  );
}

function TextInfoIcon3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Scope</p>
      </div>
    </div>
  );
}

function TextIcons3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-between min-w-px relative" data-name="text+icons">
      <TextInfoIcon3 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons3 />
    </div>
  );
}

function GeneralShieldCheck8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Malicious package detected</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Malicious package in app dependencies Build</p>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck8 />
          </div>
        </div>
      </div>
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">block application version with banned licenses promoted to prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Package with license in banned license group {group id}`}</p>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text19 />
    </div>
  );
}

function GeneralShieldCheck9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Pentest approval evidence exist on app</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {pentest-approval} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck9 />
          </div>
        </div>
      </div>
      <Text20 />
    </div>
  );
}

function GeneralShieldCheck10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="general/shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="general/shield-check">
          <path clipRule="evenodd" d={svgPaths.p367f0240} fill="#5E6D81" fillRule="evenodd" id="ic" />
        </g>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM VEX with vulnerability evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-vex} exist on application version to target stage`}</p>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0" data-name="Property 1=Security">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center relative size-full">
            <GeneralShieldCheck10 />
          </div>
        </div>
      </div>
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="text">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19px] overflow-hidden text-ellipsis">Xray SBOM evidence exist on SaaS app Prod</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#999db4] text-[12px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`Evidence type {cyclonedx-sbom} exist on application version`}</p>
      </div>
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start max-w-[320px] min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[20px]" data-name="Property 1=legal">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[2px] relative size-full">
            <div className="h-[15.442px] relative shrink-0 w-[16px]" data-name="Vector">
              <div className="absolute inset-[-2.43%_-2.34%]">
                <svg className="block size-full" fill="none" height="16.1923" preserveAspectRatio="none" viewBox="0 0 16.75 16.1923" width="16.75">
                  <path d={svgPaths.p2a32fd80} id="Vector" stroke="#5E6D81" strokeWidth="0.75" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text23 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] relative shrink-0 w-full" data-name="cell-title/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[24px] relative size-full">
            <Content23 />
            <div className="h-[20px] relative shrink-0 w-px" data-name=".divider">
              <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 1 20" width="1">
                <path clipRule="evenodd" d={svgPaths.p780e000} fill="#B4BACC" fillRule="evenodd" id="divider" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="general/globe">
              <div className="absolute inset-[12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                  <path d={svgPaths.p2d84eef0} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Global Organization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="general/globe">
              <div className="absolute inset-[12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                  <path d={svgPaths.p2d84eef0} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Global Organization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="general/globe">
              <div className="absolute inset-[12.5%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                  <path d={svgPaths.p2d84eef0} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">Global Organization</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="jfrog/project">
              <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.592" preserveAspectRatio="none" viewBox="0 0 13.3333 13.592" width="13.3333">
                  <path d={svgPaths.p1b5bee80} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">apptrust</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="jfrog/project">
              <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.592" preserveAspectRatio="none" viewBox="0 0 13.3333 13.592" width="13.3333">
                  <path d={svgPaths.p1b5bee80} fill="#414857" id="ic" />
                </svg>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[44px] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px]">apptrust</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content24 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content25 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content26 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content27 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content28 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="cell/table assets">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[24px] relative size-full">
            <Content29 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableColumnTableAssets3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[236px]" data-name="table-column/table assets">
      <Column3 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex h-[360px] items-start overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="table">
      <TableColumnTableAssets />
      <TableColumnTableAssets1 />
      <TableColumnTableAssets2 />
      <TableColumnTableAssets3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[412px] items-start relative shrink-0 w-full">
      <div className="h-[28px] relative shrink-0 w-full" data-name="request_table_full_concept">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start relative size-full">
            <PendingRequests />
          </div>
        </div>
      </div>
      <Table1 />
    </div>
  );
}

function PoliciesListFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[462px] items-start overflow-clip relative shrink-0 w-full" data-name="policies list/Frame 427320146">
      <div className="h-[40px] relative shrink-0 w-full" data-name="tabs">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[24px] items-start relative size-full">
          <div className="h-[40px] min-w-[28px] relative shrink-0" data-name=".tab-item">
            <div aria-hidden className="absolute border-[#415980] border-b-2 border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] relative size-full">
                <Content1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[600px] items-start relative shrink-0 w-full" data-name="content">
      <Frame1 />
      <PoliciesListFrame />
    </div>
  );
}

export default function GateDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end pb-[24px] pt-[64px] px-[24px] relative shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)] size-full" data-name="Gate details">
      <div className="absolute right-[24px] rounded-[4px] size-[20px] top-[64px]" data-name="button-icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="actions/close">
              <div className="absolute inset-[23.57%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="8.459" preserveAspectRatio="none" viewBox="0 0 8.459 8.459" width="8.459">
                  <path d={svgPaths.p21439910} fill="#4C4E59" id="ic" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
}