const translations = {
    en: {
        about_header: "About HarvestGuard",
        nav_about: "About Us",
        nav_team: "Our Team",
        nav_research: "Research",
        nav_stories: "Farmer Stories",

        mission_title: "Our Mission",
        mission_text: "HarvestGuard is a technology-driven solution designed to fight food loss in Bangladesh. Every year, more than 4.5 million metric tonnes of food grains are lost due to poor storage, weather risks, and mismanagement. Our platform uses weather forecasting, crop monitoring, and early-warning alerts to help farmers protect their harvests.",

        why_title: "Why We Built This",
        why_text: "Food loss affects farmer incomes, national food security, and long-term sustainability. Our goal is to empower farmers with simple, mobile-friendly digital tools so they can make better decisions, reduce waste, and improve their livelihoods.",

        offer_title: "What HarvestGuard Offers",
        offer_1: "Real-time storage risk prediction",
        offer_2: "Hyper-local weather insights in Bangla",
        offer_3: "Farmer-friendly advisories",
        offer_4: "Offline support + data sync",
        offer_5: "AI-based crop scan (fresh vs rotten)"
    },

    bn: {
        about_header: "হারভেস্টগার্ড সম্পর্কে",
        nav_about: "আমাদের সম্পর্কে",
        nav_team: "আমাদের টিম",
        nav_research: "গবেষণা",
        nav_stories: "কৃষকের গল্প",

        mission_title: "আমাদের লক্ষ্য",
        mission_text: "হারভেস্টগার্ড বাংলাদেশে খাদ্য অপচয় রোধের একটি প্রযুক্তি-চালিত সমাধান। প্রতি বছর ৪.৫ মিলিয়ন মেট্রিক টনের বেশি খাদ্য শস্য নষ্ট হয় — খারাপ সংরক্ষণ, আবহাওয়ার ঝুঁকি, ও ব্যবস্থাপনার অভাবে। আমাদের প্ল্যাটফর্ম আবহাওয়া পূর্বাভাস, ফসল মনিটরিং, এবং আগাম সতর্কতা দিয়ে কৃষকদের ফসল রক্ষা করতে সাহায্য করে।",

        why_title: "আমরা এটি কেন তৈরি করেছি",
        why_text: "খাদ্য অপচয় কৃষকের আয়, জাতীয় খাদ্য নিরাপত্তা ও দীর্ঘমেয়াদী স্থায়িত্বকে প্রভাবিত করে। আমাদের লক্ষ্য হলো কৃষকদের সহজ, মোবাইল-ফ্রেন্ডলি ডিজিটাল টুল দিয়ে আরও ভালো সিদ্ধান্ত নিতে সাহায্য করা।",

        offer_title: "হারভেস্টগার্ড কী অফার করে?",
        offer_1: "রিয়েল-টাইম সংরক্ষণ ঝুঁকি পূর্বাভাস",
        offer_2: "হাইপার-লোকাল আবহাওয়া তথ্য (বাংলায়)",
        offer_3: "কৃষক-বান্ধব পরামর্শ",
        offer_4: "অফলাইন সাপোর্ট + ডেটা সিঙ্ক",
        offer_5: "এআই ভিত্তিক ফসল স্ক্যান (তাজা/পচা)"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        el.innerHTML = translations[lang][key];
    });
}
