import svgPaths from "./svg-v9esxaw9gv";

function Header() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".side-bar_logo">
            <div className="h-[17.174px] relative shrink-0 w-[46.45px]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.1738" preserveAspectRatio="none" viewBox="0 0 46.4502 17.1738" width="46.4502">
                <g id="ic">
                  <path d={svgPaths.p2f23a200} fill="var(--fill-0, #3EB065)" />
                  <path d={svgPaths.p1a3dd600} fill="var(--fill-0, #3EB065)" />
                  <path d={svgPaths.p1019b2c0} fill="var(--fill-0, #3EB065)" />
                  <path d={svgPaths.pef0000} fill="var(--fill-0, #3EB065)" />
                  <path d={svgPaths.p33b0d980} fill="var(--fill-0, #3EB065)" />
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
  );
}

function ProjectsDropdown() {
  return (
    <div className="bg-[#152033] relative rounded-[4px] shrink-0 w-full" data-name=".projects dropdown">
      <div aria-hidden className="absolute border border-[#d2dfed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="bg-[#1d6ce2] content-stretch flex items-center p-[4px] relative rounded-[100px] shrink-0" data-name="projects badge">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="jfrog/project">
              <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8736" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736" width="10.6667">
                  <path d={svgPaths.p30ca0800} fill="var(--fill-0, white)" id="ic" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[14px] text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px] overflow-hidden text-ellipsis">Project</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrows/chevron-down">
            <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667" width="11.6667">
                <path d={svgPaths.p9434780} fill="var(--fill-0, white)" id="ic" />
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
          <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] relative shrink-0 w-[200px]" data-name=".projects expanded">
            <ProjectsDropdown />
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
              <path d={svgPaths.p2ce8f0f0} fill="var(--fill-0, #EAEEF5)" />
              <path d={svgPaths.p6cb1700} fill="var(--fill-0, #EAEEF5)" />
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

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/artifactory">
        <div className="absolute inset-[10.42%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.pc949d80} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
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
              <path clipRule="evenodd" d={svgPaths.p1b6f5500} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p32e23700} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
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
        <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 18 19" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p1faf03f0} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2e5b0840} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1eb63100} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
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
              <path clipRule="evenodd" d={svgPaths.p1e45fe80} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path d={svgPaths.p3c89d800} fill="var(--fill-0, #EAEEF5)" />
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
            <path clipRule="evenodd" d={svgPaths.p19de9300} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">Catalog</p>
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
              <path clipRule="evenodd" d={svgPaths.p16a205e0} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p3b07fa00} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
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
              <path d={svgPaths.p347fc700} fill="var(--fill-0, #EAEEF5)" />
              <path d={svgPaths.p33ed1f00} fill="var(--fill-0, #EAEEF5)" />
              <path clipRule="evenodd" d={svgPaths.p1cfe6200} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p7766080} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p19eda200} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path d={svgPaths.p161f7b80} fill="var(--fill-0, #EAEEF5)" />
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

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/pipelines">
        <div className="absolute inset-[8.33%_12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
            <g id="ic">
              <path clipRule="evenodd" d={svgPaths.p56df00} fill="var(--fill-0, #EAEEF5)" fillRule="evenodd" />
              <path d={svgPaths.p3bfa9200} fill="var(--fill-0, #EAEEF5)" />
              <path d={svgPaths.p1d64c00} fill="var(--fill-0, #EAEEF5)" />
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

function Divider() {
  return (
    <div className="h-[12px] relative shrink-0 w-full" data-name="divider">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[20px] relative size-full">
          <div className="content-stretch flex flex-col h-[12px] items-start justify-center relative shrink-0 w-full" data-name="divider/horizontal/surface primary">
            <div className="bg-[#eaeef5] h-px relative rounded-[1px] shrink-0 w-full" data-name="divider" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="content">
      <div className="relative shrink-0 size-[24px]" data-name="jfrog/integrations">
        <div className="absolute inset-[12.5%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
            <path clipRule="evenodd" d={svgPaths.p15cf1580} fill="var(--fill-0, white)" fillRule="evenodd" id="ic" />
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
              <path d={svgPaths.p39809a00} fill="var(--fill-0, #EAEEF5)" />
              <path d={svgPaths.p532a080} fill="var(--fill-0, #EAEEF5)" />
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
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".sidebar-list">
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
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#eaeef5] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[22px]">Applications</p>
                </div>
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
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#3eb065] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[19px]">Compliance</p>
                </div>
                <div className="absolute bg-[#3eb065] h-[12px] left-[42px] rounded-br-[4px] rounded-tr-[4px] top-[11.5px] w-[2px]" data-name="line" />
                <div className="bg-white content-stretch flex h-[20px] items-center justify-center px-[4px] relative rounded-[2px] shrink-0" data-name=".navigation-tag">
                  <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px]">New</p>
                  </div>
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
        <Divider />
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
            <path d={svgPaths.p1c3cb000} fill="var(--fill-0, #3EB065)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[#2d4264] content-stretch flex items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 size-[32px]" data-name=".footer-button-icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name=".nav-icon-arrow-closed">
          <div className="absolute inset-[29.17%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 8 10" width="8">
              <path d={svgPaths.p3afd0c00} fill="var(--fill-0, #B4BACC)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#eaeef5] text-[12px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] mb-0">{`Enterprise Plus 7.38.8 rev 73808900 Licensed to Jfrog © Copyright 2024 `}</p>
        <p className="leading-[16px]">JFrog Ltd</p>
      </div>
    </div>
  );
}

function NavSelectSingleTabs() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="nav-select-single+tabs">
      <div className="bg-[#1f2f4a] content-stretch flex gap-[16px] h-[40px] items-start relative shrink-0" data-name=".nav-tabs">
        <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0" data-name=".nav-tab_item">
          <div aria-hidden className="absolute border-[#3eb065] border-b-2 border-solid inset-0 pointer-events-none" />
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] overflow-hidden relative shrink-0 text-[#3eb065] text-[14px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Platform
          </p>
        </div>
        <div className="content-stretch flex flex-col h-[40px] items-center justify-center relative shrink-0" data-name=".nav-tab_item">
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] overflow-hidden relative shrink-0 text-[14px] text-center text-ellipsis text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Administration
          </p>
        </div>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="left-content">
      <div className="content-stretch flex h-[40px] items-start justify-center relative shrink-0 w-px" data-name="divider">
        <div className="bg-[#eaeef5] h-full relative shrink-0 w-px" data-name="divider" />
      </div>
      <NavSelectSingleTabs />
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[34px] items-center px-[8px] relative shrink-0" data-name="left content">
      <div aria-hidden className="absolute border-[#eaeef5] border-r border-solid inset-0 pointer-events-none" />
      <div className="relative shrink-0 size-[24px]" data-name="general/package">
        <div className="absolute inset-[12.9%_16.67%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.8075" preserveAspectRatio="none" viewBox="0 0 16 17.8075" width="16">
            <path d={svgPaths.p11146f00} fill="var(--fill-0, #C9D0E3)" id="ic" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name=".search-button-icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10.5 6" width="10.5">
              <path d={svgPaths.p2c3eb00} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[28px]" data-name="button">
      <div className="relative shrink-0 size-[28px]" data-name=".search-filter-button">
        <div className="absolute inset-0 rounded-[4px]" data-name="advanced-search">
          <div className="-translate-x-1/2 absolute bottom-[29.19%] left-1/2 top-[29.15%] w-[15px]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 15 11.6667" width="15">
              <g id="ic">
                <path d={svgPaths.p120fd400} fill="var(--fill-0, #5E6D81)" />
                <path d={svgPaths.p29457100} fill="var(--fill-0, #5E6D81)" />
                <path d={svgPaths.p37c97d00} fill="var(--fill-0, #5E6D81)" />
                <path d={svgPaths.p9ee4880} fill="var(--fill-0, #5E6D81)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightContent1() {
  return (
    <div className="flex-[1_0_0] h-[34px] min-w-px relative" data-name="right content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Search Packages</p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function ButtonDivider() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="button+divider">
      <div className="content-stretch flex h-[34px] items-start justify-center relative shrink-0 w-[12px]" data-name="divider/vertical/surface primary">
        <div className="bg-[#eaeef5] h-full relative rounded-[1px] shrink-0 w-px" data-name="divider" />
      </div>
      <div className="content-stretch flex gap-[4px] h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[90px]" style={{ backgroundImage: "linear-gradient(243.105deg, rgb(255, 196, 1) 1.0452%, rgb(158, 226, 158) 100%)" }} data-name="button_ask_ai">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="general/stars-fill">
          <div className="absolute inset-[12.5%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
              <g id="ic">
                <path d={svgPaths.p3e339f00} fill="var(--fill-0, #414857)" />
                <path d={svgPaths.p2d597700} fill="var(--fill-0, #414857)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">Ask AI</p>
        </div>
      </div>
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
              <path d={svgPaths.p210d8200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1a9bec00} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p22839880} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="general/bell">
        <div className="absolute inset-[12.5%_20.83%_10.9%_20.83%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" height="18.3846" preserveAspectRatio="none" viewBox="0 0 14 18.3846" width="14">
            <path d={svgPaths.p3f0e0900} fill="var(--fill-0, white)" id="ic" />
          </svg>
        </div>
      </div>
      <div className="bg-[#eef3f8] content-stretch flex flex-col items-center justify-center relative rounded-[100px] shrink-0 size-[28px]" data-name=".user-menu-button">
        <div aria-hidden className="absolute border border-[#708cb2] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#708cb2] text-[14px] text-center tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[19px]">G</p>
        </div>
      </div>
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="right-content">
      <div className="bg-white h-[40px] max-h-[40px] min-h-[40px] min-w-[364px] relative rounded-[4px] shrink-0 w-[364px]" data-name="search-nav-bar">
        <div className="content-stretch flex items-center max-h-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <LeftContent1 />
          <RightContent1 />
        </div>
        <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <HelpIconDividerAvatar />
    </div>
  );
}

function BreadcrumbsButton() {
  return (
    <div className="content-stretch flex h-[28px] items-end relative shrink-0 w-full" data-name="breadcrumbs+button">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[22px] items-center min-w-px relative" data-name="breadcrumb">
        <div className="content-stretch flex gap-[6px] h-[22px] items-center relative shrink-0" data-name=".breadcrumb-projects-item">
          <div className="relative shrink-0 size-[20px]" data-name="projects badge">
            <div className="absolute bg-[#3a86f9] inset-0 rounded-[41.667px]" />
            <div className="absolute inset-[10%] overflow-clip" data-name="jfrog/project">
              <div className="absolute inset-[16.02%_16.67%]" data-name="ic">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.8736" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736" width="10.6667">
                  <path d={svgPaths.p30ca0800} fill="var(--fill-0, white)" id="ic" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]" dir="auto">
              Project
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-right">
          <div className="absolute inset-[20.83%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333" width="5.33333">
              <path d={svgPaths.p2a1d9600} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[22px] items-center relative shrink-0" data-name=".breadcrumb-item">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]">AppTrust</p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-right">
          <div className="absolute inset-[20.83%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" height="9.33333" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333" width="5.33333">
              <path d={svgPaths.p2a1d9600} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[22px] items-center relative shrink-0" data-name=".breadcrumb-item">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#415980] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px]">Compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[20px] relative shrink-0 w-[1200px]" data-name="header">
      <BreadcrumbsButton />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute flex h-[71.659px] items-center justify-center left-[90.07px] top-[59.31px] w-[87.207px]">
      <div className="flex-none rotate-[-7.35deg] skew-x-[-2.63deg]">
        <div className="h-[61.271px] relative w-[82.848px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="61.2707" preserveAspectRatio="none" viewBox="0 0 82.8475 61.2707" width="82.8475">
            <g id="Group 1321314249">
              <path d={svgPaths.p8562b70} fill="var(--fill-0, #3EB065)" id="Subtract" />
              <path d={svgPaths.p1e404d00} fill="var(--fill-0, white)" id="Subtract_2" />
              <g id="Subtract_3">
                <path d={svgPaths.pbc4ed00} fill="var(--fill-0, #152033)" />
                <path d={svgPaths.p1959d400} fill="var(--fill-0, #152033)" />
                <path d={svgPaths.p2a2e1600} fill="var(--fill-0, #152033)" />
                <path d={svgPaths.p34513a00} fill="var(--fill-0, #152033)" />
                <path clipRule="evenodd" d={svgPaths.p32583370} fill="var(--fill-0, #152033)" fillRule="evenodd" />
                <path d={svgPaths.p1bf67480} fill="var(--fill-0, #152033)" />
                <path d={svgPaths.p11d41900} fill="var(--fill-0, #152033)" />
                <path d={svgPaths.p21df6600} fill="var(--fill-0, #152033)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[25px] min-w-px overflow-hidden relative text-[#414857] text-[18px] text-center text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>{`No applications in <project name> yet`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] max-h-[44px] min-w-px overflow-hidden relative text-[#5e6d81] text-[16px] text-center text-ellipsis" style={{ fontVariationSettings: '"wdth" 100' }}>
        The project needs at least one application
        <br aria-hidden />
        before you can implement a framework.
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="content">
      <Title />
      <Paragraph />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="content">
      <Content14 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col h-[899px] items-center relative shrink-0" data-name="content">
      <div className="bg-[#1f2f4a] content-stretch flex h-[72px] items-center justify-between pr-[16px] py-[16px] relative shrink-0 w-[1200px]" data-name="nav-bar">
        <LeftContent />
        <RightContent />
      </div>
      <Header1 />
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-[337px] p-[16px] top-[300px] w-[524px]" data-name="empty-state">
        <div className="h-[200px] overflow-clip relative shrink-0 w-[260px]" data-name="no_repositories_medium">
          <div className="absolute h-[114px] left-[10px] top-[53px] w-[240px]" data-name="pond">
            <svg className="absolute block inset-0 size-full" fill="none" height="114" preserveAspectRatio="none" viewBox="0 0 240 114" width="240">
              <path d={svgPaths.p30817400} fill="var(--fill-0, #D9FAD2)" id="pond" />
            </svg>
          </div>
          <div className="absolute flex h-[13.958px] items-center justify-center left-[85.4px] top-[130.77px] w-[80.108px]">
            <div className="flex-none rotate-[2.49deg]">
              <div className="h-[10.5px] relative w-[79.727px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 79.7272 10.5" width="79.7272">
                  <ellipse cx="39.8636" cy="5.25" fill="var(--fill-0, #152033)" id="Ellipse 4544" rx="39.8636" ry="5.25" />
                </svg>
              </div>
            </div>
          </div>
          <Group />
          <div className="absolute flex h-[32.114px] items-center justify-center left-[32.17px] right-[188.48px] top-[74.49px]" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-8.70346cqw,86.1519cqh)] rotate-[7.06deg] w-[hypot(91.2965cqw,13.8481cqh)]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="27.8783" preserveAspectRatio="none" viewBox="0 0 36.2002 27.8783" width="36.2002">
                  <path d={svgPaths.p2adbbc00} fill="var(--fill-0, #9EE29E)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[18.327px] items-center justify-center left-[202.69px] top-[75.38px] w-[23.162px]">
            <div className="flex-none rotate-[-3.09deg]">
              <div className="h-[17.15px] relative w-[22.269px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.15" preserveAspectRatio="none" viewBox="0 0 22.2694 17.15" width="22.2694">
                  <path d={svgPaths.p3f0feb00} fill="var(--fill-0, #9EE29E)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[21.095px] items-center justify-center left-[162.65px] top-[58.02px] w-[23.796px]">
            <div className="flex-none rotate-[-3.95deg]">
              <div className="h-[19.592px] relative w-[22.5px]" data-name="Vector 2499 (Stroke)">
                <svg className="absolute block inset-0 size-full" fill="none" height="19.592" preserveAspectRatio="none" viewBox="0 0 22.4999 19.592" width="22.4999">
                  <path d={svgPaths.p59ee700} fill="var(--fill-0, #152033)" id="Vector 2499 (Stroke)" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[174.16px] size-[15px] top-[36.49px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
              <circle cx="7.5" cy="7.5" fill="var(--fill-0, white)" id="Ellipse 4551" r="7.5" />
            </svg>
          </div>
          <div className="absolute flex items-center justify-center left-[171.12px] size-[21.717px] top-[33.36px]">
            <div className="flex-none rotate-[-13.55deg]">
              <div className="relative size-[18px]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
                  <path d={svgPaths.p255bbf00} fill="var(--fill-0, #1D6CE2)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Content13 />
      </div>
    </div>
  );
}

export default function PlatformComplaince() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="platform_complaince">
      <div className="bg-[#1f2f4a] content-stretch flex flex-col h-[900px] items-start justify-between relative shrink-0 w-[240px]" data-name="sidebar_platform">
        <Header />
        <ProjectDropdown />
        <Body />
        <div className="bg-[#1f2f4a] h-[128px] relative shrink-0 w-full" data-name=".sidebar-footer">
          <div aria-hidden className="absolute border-[#708cb2] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col gap-[8px] items-start pl-[24px] pt-[12px] relative size-full">
            <LogoIconButton />
            <Content11 />
          </div>
        </div>
      </div>
      <Content12 />
    </div>
  );
}