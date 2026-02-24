export const Pages = {
  medical: {
    id: "medical",
    label: "Medical & Blood",
    number: "01",
    bgCircle: "bg-yellow-100",
    tagBg: "bg-yellow-100",
    tagText: "text-yellow-700",
    icon: "/images/help-card.svg",
    headline: "Medical & Blood Donation",
    tagline: "Give blood. Save lives.",
    description:
      "Blood donation is one of the most direct ways to save a human life. A single donation can help up to three people — from accident victims to cancer patients and newborns in critical care. CharitFix coordinates donation drives, donor registration, and hospital partnerships to make giving as easy as possible.",
    highlights: [
      {
        title: "Who Can Donate?",
        body: "Healthy adults aged 17–65, weighing at least 50kg, who haven't donated in the past 56 days. A quick screening is done on the day to keep donors and recipients safe.",
      },
      {
        title: "When & Where",
        body: "We host monthly blood drives across Lagos, Abuja, and Port Harcourt — at universities, churches, and corporate offices. Walk-ins are welcome and the process takes under 30 minutes.",
      },
      {
        title: "Where It Goes",
        body: "All donated blood is screened, typed, and distributed to vetted partner hospitals. It supports surgeries, trauma care, sickle cell treatment, and life-threatening childbirths.",
      },
      {
        title: "Our Impact",
        body: "Since 2019, CharitFix has registered over 4,500 donors and supported 38 blood drives — contributing to over 12,000 life-saving transfusions across Nigeria.",
      },
    ],
    cta: "Register as a Donor",
  },
  social: {
    id: "social",
    label: "Social Service",
    number: "02",
    bgCircle: "bg-green-100",
    tagBg: "bg-green-100",
    tagText: "text-green-700",
    icon: "/images/social-card.svg",
    headline: "Social Service Programs",
    tagline: "Community support, around the clock.",
    description:
      "Our social service arm works 24/7 to reach the most vulnerable people in our communities — from the elderly and homeless to single mothers and displaced families. We believe true charity goes beyond money; it means showing up, listening, and building sustainable support systems.",
    highlights: [
      {
        title: "Food Distribution",
        body: "Every week, we distribute food packages to over 2,000 households across underserved communities. We partner with local farms and businesses to reduce waste while fighting hunger.",
      },
      {
        title: "Mental Health Outreach",
        body: "Free counselling sessions and group wellness workshops are held regularly in schools, prisons, and shelters — reaching people who would otherwise have no access to mental health support.",
      },
      {
        title: "Emergency Shelter",
        body: "Through partnerships with local authorities, we help families facing eviction or homelessness find emergency housing. Over 300 families have been re-housed since 2021.",
      },
      {
        title: "Volunteer Network",
        body: "Our 200+ active volunteers are the heart of our social service work. They are trained, supported, and deployed across communities to ensure consistent care every week.",
      },
    ],
    cta: "Become a Volunteer",
    ctaLink: "/donation?type=education",
  },
  charitable: {
    id: "charitable",
    label: "Send a Charitable",
    number: "03",
    bgCircle: "bg-cyan-100",
    tagBg: "bg-cyan-100",
    tagText: "text-cyan-700",
    icon: "/images/charitable-card.svg",
    headline: "Send a Charitable Gift",
    tagline: "Transparent giving. Real impact.",
    description:
      "Sending a charitable gift through CharitFix means your money goes exactly where it is needed — not into overheads. We are committed to full financial transparency, publishing quarterly reports that show exactly how every naira is spent across our programs.",
    highlights: [
      {
        title: "Where Your Money Goes",
        body: "96% of every donation funds our programs directly. Only 4% covers essential admin costs. You will always receive a detailed breakdown with your donation receipt.",
      },
      {
        title: "Giving Options",
        body: "Give once or set up a monthly donation. Amounts range from ₦500 (Seed Gift) to ₦100,000+ (Champion Partner). Every contribution is acknowledged and celebrated.",
      },
      {
        title: "Recurring Donations",
        body: "Monthly donors give us the ability to plan long-term, hire full-time community workers, and maintain uninterrupted support for the families we serve.",
      },
      {
        title: "Receipts & Tax",
        body: "All donors receive an official tax-deductible receipt within 24 hours of their gift. Our organisation is registered and compliant with Nigerian charity law.",
      },
    ],
    cta: "Donate Now",
    ctaLink: "/donation",
    showTiers: true,
  },
  education: {
    id: "education",
    label: "Education",
    number: "04",
    bgCircle: "bg-orange-100",
    tagBg: "bg-orange-100",
    tagText: "text-orange-600",
    icon: "/images/education-card.svg",
    headline: "Education Support",
    tagline: "Every child deserves a future.",
    description:
      "Education is the most powerful tool we have to break the cycle of poverty. CharitFix supports children and young adults from low-income backgrounds through scholarships, school infrastructure, and mentorship — because a classroom can change a life.",
    highlights: [
      {
        title: "Scholarship Program",
        body: "We award scholarships twice a year to primary, secondary, and university students. Recipients get tuition, books, uniforms, and access to a mentor throughout their academic journey.",
      },
      {
        title: "School Infrastructure",
        body: "We have completed 47 construction and renovation projects since 2019 — building classrooms, toilets, and libraries in schools that had been neglected for years.",
      },
      {
        title: "Sponsor a Child",
        body: "For ₦10,000/month you can fully sponsor a child's education including tuition, meals, and supplies. You will receive termly updates and a personal message from the child you support.",
      },
      {
        title: "Literacy Programs",
        body: "Beyond formal schooling, we run after-school literacy and numeracy clubs in 40+ communities — helping children who have fallen behind catch up and stay in school.",
      },
    ],
    cta: "Sponsor a Child",
    ctaLink: "/donation?type=education",
  },
};
