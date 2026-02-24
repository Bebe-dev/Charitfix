import { BrandFacebook, BrandTwitter, BrandWhatsapp, Check, Link, X } from "tabler-icons-react";
import GreenReturn from "../assets/icons/GreenReturn";
import { DonationCardProps } from "../utils/types/donationCardProps";
import { useState } from "react";


interface ShareProps {
  isOpen: boolean;
  onClose: () => void;
  donation: DonationCardProps | null;
}

export default function Share({ isOpen, onClose, donation }: ShareProps) {
  const shareUrl = donation?.url || "https://charitfix.netlify.app/donation";
  const shareText = `Help us reach our goal! Support CharitFix's ${donation?.category || "Education"} campaign and make a difference today!`;
   const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      label: "WhatsApp",
      icon: <BrandWhatsapp/>,
      color: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200",
      iconBg: "bg-green-500",
      action: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`,
          "_blank",
        ),
    },
    {
      label: "Twitter / X",
      icon: <BrandTwitter />,
      color: "bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200",
      iconBg: "bg-black",
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
          "_blank",
        ),
    },
    {
      label: "Facebook",
      icon: <BrandFacebook />,
      color: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200",
      iconBg: "bg-blue-600",
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
          "_blank",
        ),
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!isOpen) return null;
  return (
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
          <div>
            <div className="bg-[#00715D] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <GreenReturn />
                </div>
                <div>
                  <p className="text-white font-bold text-base">
                    Share Campaign
                  </p>
                  <p className="text-green-100 text-xs">
                    {donation?.title || "Education Drive"}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <X />
              </button>
            </div>
          </div>
          <div className="px-6 py-6">
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {donation?.category || "Education"}
                </p>
                <span className="text-xs font-bold text-[#00715D]">
                  {donation?.progress || 70}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                <div
                  className="bg-[#00715D] h-1.5 rounded-full transition-all"
                  style={{ width: `${donation?.progress || 70}%` }}
                />
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <p className="font-bold text-gray-800">
                    {donation?.raised || "$15,000"}
                  </p>
                  <p className="text-[#00715D]">Raised</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {donation?.goal || "$15,000"}
                  </p>
                  <p className="text-[#505A59]">Goal</p>
                </div>
              </div>
            </div>

            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Share via
            </p>
            <div className="flex flex-col gap-2 mb-5">
              {shareOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={opt.action}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-150 ${opt.color}`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg ${opt.iconBg} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {opt.icon}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
             <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Or copy link</p>
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
              <Link />
              <p className="text-xs text-gray-500 truncate flex-1">{shareUrl}</p>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  copied
                    ? "bg-[#00715D] text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#00715D] hover:text-[#00715D]"
                }`}
              >
                {copied ? <><Check /> Copied!</> : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
