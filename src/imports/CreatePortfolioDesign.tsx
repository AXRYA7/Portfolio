import svgPaths from "./svg-84sept7ldt";
import imgImage2Png1 from "figma:asset/b2b60b79756a4be6158c0125873df7d36cb29cf0.png";

function Portfolio() {
  return (
    <div className="absolute h-[150px] left-[48px] top-[48px] w-[375.6px]" data-name="Portfolio">
      <p className="absolute font-['Bebas_Neue:Regular',sans-serif] leading-[75px] left-[0.2px] not-italic text-[85px] text-white top-[36.6px] w-[383px]">{`Hey, I'm Aarya`}</p>
    </div>
  );
}

function Portfolio1() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[214px] w-[375.6px]" data-name="Portfolio">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[0.2px] not-italic text-[#99a1af] text-[20px] text-nowrap top-[-54.4px]">Freelance UI UX Designer</p>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[290px] left-0 opacity-0 rounded-[16px] top-0 w-[471.6px]" data-name="Container" />;
}

function HoverCard() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[291.6px] left-0 rounded-[16px] top-0 w-[473.2px]" data-name="HoverCard">
      <Portfolio />
      <Portfolio1 />
      <Container />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[290px] left-0 opacity-0 rounded-[16px] top-0 w-[471.6px]" data-name="Container" />;
}

function HoverCard1() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[291.6px] left-[489.2px] rounded-[16px] top-0 w-[473.2px]" data-name="HoverCard">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[291.6px] relative shrink-0 w-full" data-name="Container">
      <HoverCard />
      <HoverCard1 />
      <div className="absolute h-[305px] left-[536px] top-[-14.6px] w-[399px]" data-name="image 2.png 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2Png1} />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[97.5px] size-[32px] top-[97.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p232ebe00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M8 12H2.66667V28H8V12Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p25573100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-0 rounded-[16px] size-[227px] top-0" data-name="Container" />;
}

function HoverCard2() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid left-0 rounded-[16px] size-[228.6px] top-0" data-name="HoverCard">
      <Icon />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[97.5px] size-[32px] top-[97.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p772c70} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p37698600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-0 rounded-[16px] size-[227px] top-0" data-name="Container" />;
}

function HoverCard3() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid left-[244.6px] rounded-[16px] size-[228.6px] top-0" data-name="HoverCard">
      <Icon1 />
      <Container4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[97.5px] size-[32px] top-[97.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1eb47e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p18f89e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M23.3333 8.66667H23.3467" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-0 rounded-[16px] size-[227px] top-0" data-name="Container" />;
}

function HoverCard4() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid left-[489.2px] rounded-[16px] size-[228.6px] top-0" data-name="HoverCard">
      <Icon2 />
      <Container5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[97.5px] size-[32px] top-[97.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p1ab0d480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p36597400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p4480870} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(0,0,0,0)] left-0 opacity-0 rounded-[16px] size-[227px] top-0" data-name="Container" />;
}

function HoverCard5() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid left-[733.8px] rounded-[16px] size-[228.6px] top-0" data-name="HoverCard">
      <Icon3 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[228.6px] relative shrink-0 w-full" data-name="Container">
      <HoverCard2 />
      <HoverCard3 />
      <HoverCard4 />
      <HoverCard5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[120.113px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#99a1af] text-[20px] text-nowrap top-[-2.2px]">Recent Works</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.6000 0.6314 0.6863)", strokeOpacity: "1" }} />
          <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.6000 0.6314 0.6863)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function RecentWorks() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-center justify-between left-[48px] top-[48px] w-[375.6px]" data-name="RecentWorks">
      <Heading1 />
      <Icon4 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[506px] left-0 opacity-0 rounded-[16px] top-0 w-[471.6px]" data-name="Container" />;
}

function Icon5() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[10%] left-[10%] right-1/4 top-[20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 35">
          <path d={svgPaths.p5e33400} fill="url(#paint0_linear_0_193)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_193" x1="0" x2="2922.02" y1="0" y2="5426.61">
              <stop stopColor="#A855F7" style={{ stopColor: "color(display-p3 0.6588 0.3333 0.9686)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#6B21A8" style={{ stopColor: "color(display-p3 0.4196 0.1294 0.6588)", stopOpacity: "1" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cloud() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[285.65px] opacity-30 top-[51.2px] w-[100px]" data-name="Cloud">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[10%] left-[10%] right-1/4 top-[20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 35">
          <path d={svgPaths.p5e33400} fill="url(#paint0_linear_0_193)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_193" x1="0" x2="2922.02" y1="0" y2="5426.61">
              <stop stopColor="#A855F7" style={{ stopColor: "color(display-p3 0.6588 0.3333 0.9686)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#6B21A8" style={{ stopColor: "color(display-p3 0.4196 0.1294 0.6588)", stopOpacity: "1" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cloud1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[211.19px] opacity-30 top-[128px] w-[100px]" data-name="Cloud">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[10%] left-[10%] right-1/4 top-[20%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 35">
          <path d={svgPaths.p5e33400} fill="url(#paint0_linear_0_193)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_193" x1="0" x2="2922.02" y1="0" y2="5426.61">
              <stop stopColor="#A855F7" style={{ stopColor: "color(display-p3 0.6588 0.3333 0.9686)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#6B21A8" style={{ stopColor: "color(display-p3 0.4196 0.1294 0.6588)", stopOpacity: "1" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Cloud2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[161.47px] opacity-30 top-[192px] w-[100px]" data-name="Cloud">
      <Icon7 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[272px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-[136.5px] not-italic text-[36px] text-center text-nowrap text-white top-[-3px] tracking-[1.8px] translate-x-[-50%]">COMING SOON</p>
    </div>
  );
}

function Container9() {
  return <div className="bg-[#ad46ff] opacity-[0.883] rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container10() {
  return <div className="bg-[#ad46ff] opacity-[0.982] rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container11() {
  return <div className="bg-[#ad46ff] opacity-[0.995] rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[8px] items-start justify-center left-0 top-[48px] w-[272px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56px] left-[51.8px] top-[97.2px] w-[272px]" data-name="Container">
      <Paragraph />
      <Container12 />
    </div>
  );
}

function RecentWorks1() {
  return (
    <div className="absolute h-[256px] left-[48px] top-[100px] w-[375.6px]" data-name="RecentWorks">
      <Cloud />
      <Cloud1 />
      <Cloud2 />
      <Container13 />
    </div>
  );
}

function HoverCard6() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[507.6px] left-0 overflow-clip rounded-[16px] top-0 w-[473.2px]" data-name="HoverCard">
      <RecentWorks />
      <Container8 />
      <RecentWorks1 />
    </div>
  );
}

function Services() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[48px] w-[375.6px]" data-name="Services">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#99a1af] text-[20px] text-nowrap top-[-2.2px]">Services</p>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[506px] left-0 opacity-0 rounded-[16px] top-0 w-[471.6px]" data-name="Container" />;
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-0 rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[0.4px] w-[94.675px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[10.6px]">UI UX</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-[132px] rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[0.4px] w-[104.988px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[10.6px]">Framer</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-[271px] rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[0.4px] w-[104.988px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[51.2px] not-italic text-[18px] text-center text-nowrap text-white top-[12.2px] translate-x-[-50%]">React</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-[180px] rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[71.4px] w-[104.988px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[51.7px] not-italic text-[18px] text-center text-nowrap text-white top-[12.2px] translate-x-[-50%]">Figma</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-[430.99px] rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[73.2px] w-[98.013px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[10.6px]">Figma</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-0 rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[71.4px] w-[167.262px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[10.6px]">Motion Design</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-0 rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[213.4px] w-[167.262px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[39.2px] not-italic text-[18px] text-nowrap text-white top-[12.2px]">Photoshop</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-[184px] rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[213.4px] w-[167.262px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[39.2px] not-italic text-[18px] text-nowrap text-white top-[12.2px]">Adobe XD</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.8)] border-[0.8px] border-[rgba(63,63,70,0.5)] border-solid h-[53.6px] left-0 rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[142.4px] w-[276.462px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[24px] not-italic text-[18px] text-nowrap text-white top-[10.6px]">Full Stack Web Development</p>
    </div>
  );
}

function Services1() {
  return (
    <div className="absolute h-[350px] left-[48px] overflow-clip top-[108px] w-[375.6px]" data-name="Services">
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function HoverCard7() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[507.6px] left-[489.2px] rounded-[16px] top-0 w-[473.2px]" data-name="HoverCard">
      <Services />
      <Container14 />
      <Services1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[507.6px] relative shrink-0 w-full" data-name="Container">
      <HoverCard6 />
      <HoverCard7 />
    </div>
  );
}

function ToolsSection() {
  return (
    <div className="absolute h-[28px] left-[48px] top-[48px] w-[277.75px]" data-name="ToolsSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#99a1af] text-[20px] text-nowrap top-[-2.2px]">Tools I use</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 24">
        <g id="Group 1">
          <path d={svgPaths.p2dbee600} fill="var(--fill-0, #0ACF83)" id="Vector" style={{ fill: "color(display-p3 0.0392 0.8118 0.5137)", fillOpacity: "1" }} />
          <path d={svgPaths.p3c1cbec0} fill="var(--fill-0, #A259FF)" id="Vector_2" style={{ fill: "color(display-p3 0.6353 0.3490 1.0000)", fillOpacity: "1" }} />
          <path d={svgPaths.p3080980} fill="var(--fill-0, #F24E1E)" id="Vector_3" style={{ fill: "color(display-p3 0.9490 0.3059 0.1176)", fillOpacity: "1" }} />
          <path d={svgPaths.p20322400} fill="var(--fill-0, #FF7262)" id="Vector_4" style={{ fill: "color(display-p3 1.0000 0.4471 0.3843)", fillOpacity: "1" }} />
          <path d={svgPaths.p264e2600} fill="var(--fill-0, #1ABCFE)" id="Vector_5" style={{ fill: "color(display-p3 0.1020 0.7373 0.9961)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-0 p-[0.8px] rounded-[14px] size-[84.575px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3f3f46] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Group />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute left-[96.57px] size-[84.588px] top-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.5875 84.5875">
        <g id="Container">
          <mask fill="white" id="path-1-inside-1_0_222">
            <path d={svgPaths.p666a00} />
          </mask>
          <path d={svgPaths.p666a00} fill="var(--fill-0, #155DFC)" style={{ fill: "color(display-p3 0.0824 0.3647 0.9882)", fillOpacity: "1" }} />
          <path d={svgPaths.p3a2060e0} fill="var(--stroke-0, #3F3F46)" mask="url(#path-1-inside-1_0_222)" style={{ fill: "color(display-p3 0.2465 0.2464 0.2765)", fillOpacity: "1" }} />
          <path d={svgPaths.p194ac600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-[193.16px] size-[84.575px] top-0" data-name="Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.575 84.575">
        <g id="Container">
          <mask fill="white" id="path-1-inside-1_0_214">
            <path d={svgPaths.p3c2e1600} />
          </mask>
          <path d={svgPaths.p3c2e1600} fill="var(--fill-0, white)" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p1d5af200} fill="var(--stroke-0, #3F3F46)" mask="url(#path-1-inside-1_0_214)" style={{ fill: "color(display-p3 0.2465 0.2464 0.2765)", fillOpacity: "1" }} />
          <path d={svgPaths.p1f4ccf00} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[31.85px] relative shrink-0 w-[32.666px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.6664 31.8498">
        <g id="Group 2">
          <path d={svgPaths.p22191940} fill="var(--fill-0, #001E36)" id="Vector" style={{ fill: "color(display-p3 0.0000 0.1176 0.2118)", fillOpacity: "1" }} />
          <path d={svgPaths.p15e26f80} fill="var(--fill-0, #31A8FF)" id="Vector_2" style={{ fill: "color(display-p3 0.1922 0.6588 1.0000)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#9810fa] content-stretch flex items-center justify-center left-0 pl-[0.8px] pr-[0.813px] py-[0.8px] rounded-[14px] size-[84.575px] top-[96.59px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#3f3f46] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Group1 />
    </div>
  );
}

function ToolsSection1() {
  return (
    <div className="absolute h-[181.175px] left-[48px] top-[108px] w-[277.75px]" data-name="ToolsSection">
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[337.175px] left-0 opacity-0 rounded-[16px] top-0 w-[373.75px]" data-name="Container" />;
}

function HoverCard8() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[338.775px] left-0 rounded-[16px] top-0 w-[375.35px]" data-name="HoverCard">
      <ToolsSection />
      <ToolsSection1 />
      <Container29 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[60px] left-0 not-italic text-[48px] text-nowrap text-white top-[-5.4px]">{`Let's collab!`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[65px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[#99a1af] text-[20px] top-[-2.6px] w-[409px]">{`Let's turn your idea into reality with my design experience!`}</p>
    </div>
  );
}

function Portfolio2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[173px] items-start left-[48px] top-[48px] w-[473.45px]" data-name="Portfolio">
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[337.175px] left-0 opacity-0 rounded-[16px] top-0 w-[569.45px]" data-name="Container" />;
}

function Container31() {
  return <div className="absolute bg-gradient-to-r from-[#9810fa] h-[60px] left-0 opacity-0 to-[#000000] top-0 w-[473.45px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start left-[140.52px] top-[17.6px] w-[192.4px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap">Send a message now! →</p>
    </div>
  );
}

function Portfolio3() {
  return (
    <div className="absolute bg-white h-[60px] left-[48px] overflow-clip rounded-[10px] top-[229.18px] w-[473.45px]" data-name="Portfolio">
      <Container31 />
      <Text />
    </div>
  );
}

function HoverCard9() {
  return (
    <div className="absolute bg-[rgba(24,24,27,0.5)] border-[#27272a] border-[0.8px] border-solid h-[338.775px] left-[391.35px] rounded-[16px] top-0 w-[571.05px]" data-name="HoverCard">
      <Portfolio2 />
      <Container30 />
      <Portfolio3 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[338.775px] relative shrink-0 w-full" data-name="Container">
      <HoverCard8 />
      <HoverCard9 />
    </div>
  );
}

function Portfolio4() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[16px] h-[1478.575px] items-start left-0 pb-0 pt-[32px] px-[32px] top-0 w-[1026.4px]" data-name="Portfolio">
      <Container2 />
      <Container7 />
      <Container24 />
      <Container32 />
    </div>
  );
}

export default function CreatePortfolioDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Create Portfolio Design">
      <Portfolio4 />
    </div>
  );
}