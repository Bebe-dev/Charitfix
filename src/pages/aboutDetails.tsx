import { Link, useNavigate, useParams } from "react-router-dom";

import { Pages } from "../utils/data/data";

export default function AboutDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const page = Pages[id as keyof typeof Pages];

  if (!page) return <div>Page not found</div>;
  return (
    <div className="py-10 px-[40px] md:px-[100px]">
      <div>
        <img onClick={() => navigate(-1)} src="/images/back-icon.png" alt="back-icon" className="w-8 h-8 mb-6 cursor-pointer hover:opacity-50" />
      </div>
      <div className="mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 ${page.tagBg} ${page.tagText}`}
            >
              {page.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 text-gray-800">
              {page.headline}
            </h1>
            <p className="text-[#00715D] font-bold mb-4">{page.tagline}</p>
            <p className="text-[#505A59] leading-relaxed max-w-xl">
              {page.description}
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="px-7 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-150 bg-[#00715D] hover:bg-white hover:text-[#00715D] hover:border hover:border-[#00715D]">
                {page.cta}
              </button>
              <Link to="/contact" className="px-7 py-2.5 rounded-full text-white font-medium text-sm transition-all duration-150 bg-black hover:bg-white hover:text-[#00715D] hover:border hover:border-[#00715D]">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-1">
            <div
              className={`w-32 h-32 rounded-full ${page.bgCircle} flex items-center justify-center`}
            >
              <img src={page.icon} alt={page.label} className="w-28 h-28" />
            </div>
            <span className="text-8xl font-black select-none text-gray-100 leading-none">
              {page.number}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      <div className="mx-auto px-6 py-12">
        <p className="text-[#00715D] font-bold text-sm mb-2">Details</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          What You Should Know
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {page.highlights.map((h, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <h3 className="font-bold text-gray-800 mb-2">{h.title}</h3>
              <p className="text-[#636B6A] text-sm leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
