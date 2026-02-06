import logo from "../../tab-logo.png"

const Footer = () => {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-16 bg-black/40 backdrop-blur-2xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand + mission - Takes 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-black-600 flex items-center justify-center shadow-lg shadow-emerald-500/40 ring-2 ring-emerald-400/20">
                <img src={logo} alt="logo" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  ReMat
                </h3>
                <p className="text-xs text-emerald-300/90 uppercase tracking-widest font-medium">
                  Smart E-Waste Recycling
                </p>
              </div>
            </div>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
              ReMat helps citizens discover certified e-waste bins, identify items in seconds with AI,
              and earn verified impact points for every responsible drop-off.
            </p>

            <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
              Built for smarter cities and sustainability programs that want transparent, measurable impact.
            </p>

            {/* Social or contact icons (optional) */}
            <div className="flex items-center gap-3 mt-6">
              <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                  Detect · Deposit · Earn
                </p>
              </div>
            </div>
          </div>

          {/* Links columns - Takes 7 columns on large screens */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Get Started */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></span>
                Get Started
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/user/dashboard"
                    className="group flex items-center gap-2.5 text-white/60 hover:text-white transition-all duration-200"
                  >
                    <span className="h-px w-3 bg-emerald-400 group-hover:w-5 transition-all duration-200" />
                    <span className="text-sm">User Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/user/recycle"
                    className="group flex items-center gap-2.5 text-white/60 hover:text-white transition-all duration-200"
                  >
                    <span className="h-px w-3 bg-emerald-400 group-hover:w-5 transition-all duration-200" />
                    <span className="text-sm">Recycle an Item</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/user/rewards"
                    className="group flex items-center gap-2.5 text-white/60 hover:text-white transition-all duration-200"
                  >
                    <span className="h-px w-3 bg-emerald-400 group-hover:w-5 transition-all duration-200" />
                    <span className="text-sm">Rewards & Points</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Learn About E-Waste */}
            <div>
              <h4 className="text-white text-sm font-bold tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></span>
                Learn About E-Waste
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)"
                    target="_blank"
                    rel="noreferrer"
                    className="group text-white/60 hover:text-white transition-all duration-200 text-sm flex items-start gap-2"
                  >
                    <svg className="w-4 h-4 mt-0.5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="flex-1">What Is E-Waste? (WHO)</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kaggle.com/code/saiswaroop8656/remat"
                    target="_blank"
                    rel="noreferrer"
                    className="group text-white/60 hover:text-white transition-all duration-200 text-sm flex items-start gap-2"
                  >
                    <svg className="w-4 h-4 mt-0.5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="flex-1">AI Detection Model</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.genevaenvironmentnetwork.org/resources/updates/the-growing-environmental-risks-of-e-waste/"
                    target="_blank"
                    rel="noreferrer"
                    className="group text-white/60 hover:text-white transition-all duration-200 text-sm flex items-start gap-2"
                  >
                    <svg className="w-4 h-4 mt-0.5 opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="flex-1">Environmental Risks</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Impact Summary */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white text-sm font-bold tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
                Why It Matters
              </h4>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-4">
                Every scanned item helps divert hazardous materials from landfills and keeps
                reusable metals in circulation.
              </p>
              
              {/* Impact badges */}
              {/* <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-3 hover:bg-emerald-500/10 transition-colors duration-200">
                  <p className="text-xs text-emerald-300 font-bold uppercase tracking-wide mb-1">
                    CO₂
                  </p>
                  <p className="text-[0.65rem] text-white/60 leading-tight">Emissions Avoided</p>
                </div>
                <div className="rounded-lg border border-sky-500/30 bg-sky-500/5 p-3 hover:bg-sky-500/10 transition-colors duration-200">
                  <p className="text-xs text-sky-300 font-bold uppercase tracking-wide mb-1">
                    Metals
                  </p>
                  <p className="text-[0.65rem] text-white/60 leading-tight">Recovered</p>
                </div>
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 hover:bg-amber-500/10 transition-colors duration-200">
                  <p className="text-xs text-amber-300 font-bold uppercase tracking-wide mb-1">
                    Devices
                  </p>
                  <p className="text-[0.65rem] text-white/60 leading-tight">Tracked</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/40 text-xs sm:text-sm order-2 sm:order-1">
            © 2026 Smart E-Waste Bin System · ReMat · Built for Haxplore
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/40 order-1 sm:order-2">
            <span className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10">CO₂ Saved</span>
            <span className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Resources Recovered</span>
            <span className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Waste Reduced</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;