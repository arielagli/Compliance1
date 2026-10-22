import svgPaths from "./svg-ogs16g232z";

function Header() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name=".side-bar_logo">
            <div className="h-[17.174px] relative shrink-0 w-[46.45px]" data-name="ic">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4502 17.1738">
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
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736">
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
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.4971">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.1333">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.5">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.3751">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6 20.6">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375">
            <path d={svgPaths.p1c3cb000} fill="var(--fill-0, #3EB065)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[#2d4264] content-stretch flex items-center justify-center relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 size-[32px]" data-name=".footer-button-icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name=".nav-icon-arrow-closed">
          <div className="absolute inset-[29.17%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.8075">
            <path d={svgPaths.p11146f00} fill="var(--fill-0, #C9D0E3)" id="ic" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name=".search-button-icon">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="arrows/chevron-down">
          <div className="absolute inset-[33.33%_20.83%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11.6667">
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
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9602 20.9608">
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
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18.3846">
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
            <div className="absolute bg-[#b0d8fe] inset-0 rounded-[41.667px]" />
            <div className="absolute inset-[10%]" data-name="jfrog/projects">
              <div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736">
                  <path d={svgPaths.pc737900} fill="var(--fill-0, #414857)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]" dir="auto">
              All projects
            </p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-right">
          <div className="absolute inset-[20.83%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p2a1d9600} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[22px] items-center relative shrink-0" data-name=".breadcrumb-item">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]">AppTrust Settings</p>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrows/chevron-right">
          <div className="absolute inset-[20.83%_33.33%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p2a1d9600} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[4px] h-[22px] items-center relative shrink-0" data-name=".breadcrumb-item">
          <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#415980] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[19px]">Compliance Catalog</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageTitle() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-[1162px]" data-name="page-title">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#414857] text-[24px] tracking-[0.24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33px]">Compliance</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#5e6d81] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">{`Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text `}</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[20px] relative shrink-0 w-[1200px]" data-name="header">
      <BreadcrumbsButton />
      <PageTitle />
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">NIST SSDF</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Security</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-black overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="logo">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[9.898px] justify-center leading-[0] left-1/2 text-[12px] text-center text-white top-1/2 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]" dir="auto">
            NIST
          </p>
        </div>
      </div>
      <Name />
    </div>
  );
}

function Name1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">EU CRA</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">Industry</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-[#039] overflow-clip relative rounded-[4px] shrink-0 size-[32px]" data-name="logo">
        <div className="absolute inset-[77.93%_44.06%_10.41%_44.06%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[9.18%_44.06%_79.16%_44.06%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[73.32%_60.72%_15.02%_27.39%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[60.74%_72.92%_27.6%_15.19%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[43.55%_77.39%_44.79%_10.72%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[26.37%_72.92%_61.97%_15.19%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute inset-[13.79%_60.72%_74.56%_27.39%]" data-name="s">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
            <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
          </svg>
        </div>
        <div className="absolute flex inset-[73.32%_27.39%_15.02%_60.72%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="s">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
                <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[60.74%_15.19%_27.6%_72.92%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="s">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
                <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[43.55%_10.72%_44.79%_77.39%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="s">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
                <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[26.37%_15.19%_61.97%_72.92%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="s">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
                <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[13.79%_27.39%_74.56%_60.72%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="s">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.80423 3.7311">
                <path d={svgPaths.p200d8e80} fill="var(--fill-0, #FFCC00)" id="s" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Name1 />
    </div>
  );
}

function Name2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">text</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">text</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-[#c9d0e3] relative rounded-[4px] shrink-0 size-[32px]" data-name="logo" />
      <Name2 />
    </div>
  );
}

function Name3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">text</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">text</p>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-[#c9d0e3] relative rounded-[4px] shrink-0 size-[32px]" data-name="logo" />
      <Name3 />
    </div>
  );
}

function Name4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">text</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">text</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-[#c9d0e3] relative rounded-[4px] shrink-0 size-[32px]" data-name="logo" />
      <Name4 />
    </div>
  );
}

function Name5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start justify-between leading-[0] min-w-px relative self-stretch" data-name="name">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[17.051px] justify-center relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px]">text</p>
      </div>
      <div className="flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[13.957px] justify-center relative shrink-0 text-[#999db4] text-[12px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px]">text</p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="header">
      <div className="bg-[#c9d0e3] relative rounded-[4px] shrink-0 size-[32px]" data-name="logo" />
      <Name5 />
    </div>
  );
}

function Cards() {
  return (
    <div className="relative shrink-0 w-full" data-name="cards">
      <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] pb-[24px] pt-[16px] px-[24px] relative size-full">
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header2 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Secure software development framework practices for producing secure software text text text text text text text text text text text text text text text.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header3 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`EU regulation setting cybersecurity requirements  text text text text text text text text text text text text text text text.`}</p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header4 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header5 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header6 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="bg-[#f8fafb] justify-self-stretch relative rounded-[4px] self-start shrink-0" data-name="card_slot">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="content-stretch flex flex-col gap-[16px] items-start justify-center py-[2px] relative rounded-[4px] shrink-0 w-full" data-name=".card content">
                <Header7 />
                <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal h-[66px] leading-[22px] overflow-hidden relative shrink-0 text-[#5e6d81] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
                  text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text.
                </p>
              </div>
            </div>
          </div>
          <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="content">
      <div className="bg-[#1f2f4a] content-stretch flex h-[72px] items-center justify-between pr-[16px] py-[16px] relative shrink-0 w-[1200px]" data-name="nav-bar">
        <LeftContent />
        <RightContent />
      </div>
      <Header1 />
      <Cards />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[748px]">
      <div className="flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#414857] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25px]">Edit NIST SSDF</p>
      </div>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#5e6d81] text-[16px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Security and privacy controls for federal information systems.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-black overflow-clip relative rounded-[4px] shrink-0 size-[46px]" data-name="logo">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[9.898px] justify-center leading-[0] left-1/2 text-[12px] text-center text-white top-1/2 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]" dir="auto">
            NIST
          </p>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function StepsNumber() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="steps-number">
      <div aria-hidden className="absolute border-[#2a8553] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#2a8553] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0 w-[32px]" data-name="connector">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center pt-[2px] relative size-full">
            <div className="content-stretch flex flex-col h-px items-start justify-center relative shrink-0 w-full" data-name="divider">
              <div className="bg-[#c9d0e3] h-px relative shrink-0 w-full" data-name="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepsNumber1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]" data-name="steps-number">
      <div aria-hidden className="absolute border-[#7e8194] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#414857] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[47px] items-start relative shrink-0">
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="steps_horizontal">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name=".steps_horizontal_item">
          <StepsNumber />
          <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px] relative shrink-0 text-[#2a8553] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Scope
          </p>
          <Connector />
        </div>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name=".steps_horizontal_item">
          <StepsNumber1 />
          <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#414857] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            Configure rules
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]" data-name="button-icon">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="actions/close">
          <div className="absolute inset-[23.57%]" data-name="ic">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5738 10.5738">
              <path d={svgPaths.p264a7200} fill="var(--fill-0, #414857)" id="ic" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[22px] relative shrink-0 w-full">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#414857] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Application Scope
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#999db4] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Choose applications in scope for NIST SSDF
      </p>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="left content">
      <div className="relative shrink-0 size-[20px]" data-name="general/search">
        <div className="absolute inset-[17.29%_14.17%_18.78%_18.06%]" data-name="ic">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5534 12.7848">
            <path clipRule="evenodd" d={svgPaths.p9cd5e00} fill="var(--fill-0, #999DB4)" fillRule="evenodd" id="ic" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22px] overflow-hidden text-ellipsis">{`Search by application name or label `}</p>
      </div>
    </div>
  );
}

function RightContent2() {
  return <div className="content-stretch flex gap-[2px] h-[19px] items-center justify-end relative shrink-0 w-[22px]" data-name="right content" />;
}

function InputContent() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative rounded-[4px]" data-name="input content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
          <LeftContent2 />
          <RightContent2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c9d0e3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-center relative shrink-0 w-full" data-name="input">
      <InputContent />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <Input />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-[64px] relative" data-name="input">
        <Content13 />
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="bg-white h-[40px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Maturity Level</p>
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

function Content15() {
  return (
    <div className="bg-white h-[40px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Business Critically</p>
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

function Content16() {
  return (
    <div className="bg-white h-[40px] min-w-[120px] relative rounded-[4px] shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center min-w-[inherit] px-[8px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] min-w-px overflow-hidden relative text-[#999db4] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px] overflow-hidden text-ellipsis">Labels</p>
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

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[197px]" data-name="select-single-input">
        <Content14 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[197px]" data-name="select-single-input">
        <Content15 />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[197px]" data-name="select-single-input">
        <Content16 />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full">
      <Frame39 />
      <Frame41 />
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-start justify-center py-[24px] relative rounded-[8px] shrink-0 w-full" data-name=".search">
      <Frame40 />
    </div>
  );
}

function Resulets() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="resulets">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal h-[14.707px] justify-center leading-[0] relative shrink-0 text-[#414857] text-[0px] text-center w-[73.002px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            0
          </span>
          <span className="leading-[22px]">{` Selected`}</span>
        </p>
      </div>
      <div className="relative shrink-0 size-[6px]" data-name="notification badge">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #2D4264)" id="red" r="3" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#414857] text-[0px] text-center w-[124.235px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[22px]">{`Showing `}</span>
          <span className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[19px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            11
          </span>
          <span className="leading-[22px]">{` of 11`}</span>
        </p>
      </div>
    </div>
  );
}

function TextInfoIcon() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="text+info icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[38px] pr-[64px] relative size-full">
          <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2c06a280} id="ic" stroke="var(--stroke-0, #C9D0E3)" />
            </svg>
          </div>
        </div>
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

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] content-stretch flex gap-[4px] h-[40px] items-center min-w-[120px] pl-[24px] relative shrink-0 w-[172px]" data-name="table-column-header">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <Content17 />
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
            <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p2c06a280} fill="var(--fill-0, white)" id="ic" stroke="var(--stroke-0, #C9D0E3)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInfoIcon1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Application Name</p>
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

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons1 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#b4bacc] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-black overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Property 1=small">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[9.898px] justify-center leading-[0] left-1/2 text-[6px] text-center text-white top-1/2 w-[13.527px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]" dir="auto">
            NIST
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">{`NIST SSDF `}</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[8px] items-center justify-center min-w-[32px] px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#b4bacc] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-black overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Property 1=small">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold h-[9.898px] justify-center leading-[0] left-1/2 text-[6px] text-center text-white top-1/2 w-[13.527px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[16px]" dir="auto">
            NIST
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">{`NIST SSDF `}</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] min-w-[120px] relative shrink-0 w-full" data-name="table-column-header">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] pl-[24px] relative size-full">
            <Content18 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[120px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis whitespace-pre">{`Green-Pizza   `}</p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-name=".nist tag">
              <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
                <Tag />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">semantic-release</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">electron-packager</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[90px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">mai-oh-my-jfrog</p>
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-name=".nist tag">
              <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
                <Tag1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">stream-combiner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">normalize-data</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">update-notifier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInfoIcon2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Maturity Level</p>
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

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons2 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] min-w-[120px] relative shrink-0 w-full" data-name="table-column-header">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] pl-[24px] relative size-full">
            <Content19 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Unspecified</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Experimental</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Production</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">End Of Life</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Production</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Production</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Production</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInfoIcon3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Business Criticality</p>
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

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons3 />
    </div>
  );
}

function Frame7() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame6() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame5() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame4() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame7 />
      <Frame6 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame11() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame12() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame13() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame16() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame17() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame18() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame21() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame22() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame23() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame25() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame26() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame27() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame28() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame31() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame32() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame33() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame36() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame37() {
  return <div className="bg-[#eaeef5] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame38() {
  return <div className="bg-[#3eb065] h-[3px] relative rounded-[1px] shrink-0 w-full" />;
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start justify-between left-[6px] top-[2px] w-[12px]">
      <Frame35 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] min-w-[120px] relative shrink-0 w-full" data-name="table-column-header">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] pl-[24px] relative size-full">
            <Content20 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame8 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">High</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame9 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Medium</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame14 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Medium</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame19 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Medium</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame24 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Medium</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame29 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Medium</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <div className="bg-white overflow-clip relative shrink-0 size-[24px]" data-name=".impact">
              <Frame34 />
            </div>
            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] max-w-[320px] min-w-px overflow-hidden relative text-[#414857] text-[14px] text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">Low</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInfoIcon4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="text+info icon">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5e6d81] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Labels</p>
      </div>
    </div>
  );
}

function TextIcons4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center justify-between min-w-px relative" data-name="text+icons">
      <TextInfoIcon4 />
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="content">
      <TextIcons4 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Service:myservice</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Service:service2</p>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Organization:myorg</p>
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Team:myteam</p>
      </div>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">AppGroup:mygroup</p>
      </div>
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Service:myservice</p>
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-[#eaeef5] content-stretch flex gap-[2px] items-center justify-center min-w-[32px] px-[8px] py-[2px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] max-w-[120px] overflow-hidden relative shrink-0 text-[#414857] text-[12px] text-center text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[16px] overflow-hidden text-ellipsis">Team:devops-prod</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="column">
      <div className="bg-[#f8fafb] h-[40px] min-w-[120px] relative shrink-0 w-full" data-name="table-column-header">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center min-w-[inherit] pl-[24px] relative size-full">
            <Content21 />
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <Tag2 />
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">+2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
              <Tag3 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
              <Tag4 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
              <Tag5 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
              <Tag6 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[24px] relative size-full">
            <Tag7 />
            <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#414857] text-[14px] text-ellipsis text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[22px] overflow-hidden text-ellipsis">+2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="table-cell">
        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[2px] shrink-0" data-name="tag">
              <Tag8 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="table">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[84px]" data-name="name">
          <Column />
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-[420px]" data-name="name">
          <Column1 />
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-[261px]" data-name="name">
          <Column2 />
        </div>
        <div className="content-stretch flex items-start justify-center relative shrink-0 w-[247px]" data-name="name">
          <Column3 />
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-w-px relative" data-name="name">
          <Column4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e9ebef] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Scroll() {
  return <div className="bg-[#eaeef5] h-full relative rounded-[8px] shrink-0 w-[6px]" data-name="scroll" />;
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

function DrawerFooter() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".drawer footer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[12px] relative size-full">
          <div className="content-stretch flex gap-[2px] h-[34px] items-center justify-center max-h-[34px] min-h-[34px] min-w-[80px] px-[16px] relative rounded-[4px] shrink-0 w-[80px]" data-name="button" />
          <Buttons />
        </div>
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
      <div className="-translate-x-1/2 absolute h-[900px] left-1/2 top-0 w-[1440px]" data-name="Overlay">
        <div className="absolute bg-[rgba(65,72,87,0.4)] inset-0" data-name="Overlay" />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch drop-shadow-[0px_4px_5px_rgba(112,140,178,0.15)] flex flex-col h-[796px] items-start justify-end left-[calc(50%+0.01px)] overflow-clip rounded-tl-[8px] rounded-tr-[8px] w-[1440px]" data-name="drawer_bottom">
        <div className="bg-white relative shrink-0 w-full" data-name=".drawer header">
          <div className="flex flex-row justify-center size-full">
            <div className="content-stretch flex items-start justify-between p-[24px] relative size-full">
              <Frame1 />
              <Frame2 />
            </div>
          </div>
        </div>
        <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name=".drawer_body">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pb-[24px] pt-[12px] px-[24px] relative size-full">
              <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name=".main screen slot">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
                    <Frame3 />
                    <Search />
                    <Resulets />
                    <Table />
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#eaeef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
              <div className="absolute content-stretch flex h-[200px] items-center justify-end pl-[4px] py-[24px] right-[4px] top-[230px]" data-name="scroll-bar">
                <Scroll />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".drawer_footer">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="divider">
            <div className="bg-[#eaeef5] h-px relative shrink-0 w-full" data-name="divider" />
          </div>
          <DrawerFooter />
        </div>
      </div>
    </div>
  );
}