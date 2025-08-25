import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ProfileCards = () => {
  const [openModal, setOpenModal] = useState(null);

  const profiles = [
    {
      id: 1,
      name: "সম্মানিত চেয়ারম্যান",
      img: "https://storage.googleapis.com/a1aa/image/2a49764f-9cb9-4f7d-1577-437d6baa7a6f.jpg",
      short:
        "বাংলাদেশ জাতীয় কারিগরি প্রশিক্ষণ এর মানসম্পন্ন প্রশিক্ষণ গ্রহণ করে অনেক...",
      details: `আমাদের প্রতিষ্ঠানের সম্মানিত চেয়ারম্যান উন্নত প্রশিক্ষণব্যবস্থা প্রতিষ্ঠায় অগ্রণী ভূমিকা রাখছেন। 
কোয়ালিটি কন্ট্রোল, ইন্ডাস্ট্রি ইন্টারফেস, এবং স্কিল ডেভেলপমেন্ট—এই তিনটি স্তম্ভকে কেন্দ্র করে তিনি 
একটি টেকসই শিক্ষাব্যবস্থা গড়ে তুলছেন, যাতে শিক্ষার্থীরা বাস্তবমুখী দক্ষতা অর্জন করতে পারে।`,
    },
    {
      id: 2,
      name: "নোবেল জয়ী ড. মোহাম্মদ ইউনুস",
      img: "https://storage.googleapis.com/a1aa/image/071bc302-cd92-436c-ac74-e46429990882.jpg",
      short: "গ্রামীণ ব্যাংকের প্রবর্তক ও নোবেল বিজয়ী সমাজ উদ্যোক্তা...",
      details: `নো‌বেল জয়ী ড.মোহাম্মদ ইউনুস

ড.ইউনুস! বাংলার ইতিহাসে গত ৯০ বছরে জন্ম নেয়া একমাত্র গ্লোবাল সেলিব্রেটি হলেন প্রফেসর মোহাম্মদ ইউনুস। শতকরা ৮৩% লোকই জানেন না কে ড.মোহাম্মদ ইউনুস! পৃথিবীতে সবচেয়ে সম্মানজনক পুরস্কার নোবেল, সেটা নিশ্চয়ই জানেন? সম্মানসূচক হিসেবে নোবেলের পরে কোন পুরস্কারের অবস্থান তা কি জানেন? সম্মানসূচকে, 
১. নোবেল 
২. অ্যামেরিকার প্রসিডেন্সিয়াল এওয়ার্ড 
৩. মার্কিন কংগ্রেশনাল এওয়ার্ড 

পৃথিবীর ইতিহাসে উপরের ৩ টা পুরস্কারই জিতেছেন এমন মানুষ আছে বা ছিলেন ১২ জন! বুঝতেই পারছেন পরের লাইনটা কি হবে, হ্যা, সেই ১২ জনের একজন প্রফেসর ড.মোহাম্মদ ইউনুস 🧡
মেসিকে নিশ্চয়ই চিনেন! যদি বলি এই লিওনেল মেসি লাইনে দাড়িয়ে ছিলেন প্রফেসর ডা ইউনুসের জন্য, বিশ্বাস হয়, না হলেও সত্য! 'অলিম্পিক গেমস' পৃথিবীর সম্মানজনক প্রতিযোগিতার একটি। আর অলিম্পিকে সবচেয়ে সম্মানিত মেহমান হলেন মশাল বাহক, জাপানে অনুষ্ঠিত ২০২০ অলিম্পিকে মশাল বাহক ছিলেন প্রফেসর ড. মোহাম্মদ ইউনুস💖 
বর্তমানে বিশ্বের লিডিং ইন্টালেকচুয়ালের যেকোনো তালিকায় টপ ১০ এর ভিতরে থাকেন ডা.ইউনুস। মুসলিম বিশ্বে নোবেল বিজয়ী ইউনুসের বিকল্প খুজে পাওয়া খুবই কঠিন, কিন্তু তিনি আমাদের বাংলাদেশের! 
এদেশে আর এমন ইউনুস জন্মাবে কিনা আজও সন্দেহ! আসুন যোগ্য ব্যক্তিকে সম্মান করতে শিখি।`,
    },
    {
      id: 3,
      name: "মাননীয় পরিচালক",
      img: "https://storage.googleapis.com/a1aa/image/5d74e234-8ae1-4a96-88eb-19b252b18902.jpg",
      short: "প্রশাসনিক উন্নয়ন ও শিক্ষাক্রম আধুনিকায়নে নেতৃত্ব দিচ্ছেন...",
      details: `মাননীয় পরিচালক শিক্ষার্থী-কেন্দ্রিক কারিকুলাম, প্রজেক্ট-ভিত্তিক শেখানো, 
এবং ইন্ডাস্ট্রি প্লেসমেন্ট নিশ্চিত করার জন্য কাজ করছেন। তাঁর লক্ষ্য—প্রতিটি শিক্ষার্থীকে 
চাকরির জন্য প্রস্তুত করা এবং উদ্যোক্তা হিসেবে গড়ে তোলা।`,
    },
    {
      id: 4,
      name: "সম্মানিত শিক্ষক",
      img: "https://storage.googleapis.com/a1aa/image/jdXVzZS-workplace-4155023-1280.jpg",
      short: "হাতে-কলমে প্র্যাকটিক্যাল শেখানোর মাধ্যমে স্কিল ডেভেলপ করেন...",
      details: `সম্মানিত শিক্ষক নিয়মিত অ্যাসাইনমেন্ট, ল্যাব, ওয়ার্কশপ এবং কোড রিভিউয়ের মাধ্যমে 
শিক্ষার্থীদের দক্ষতা বাড়ান। জব ইন্টারভিউ প্রস্তুতি থেকে শুরু করে রিয়েল-লাইফ সমস্যা সমাধান—সবকিছুতেই 
তারা পাশে থাকেন।`,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br ">
      {/* 4 equal cards in a grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((p, index) => (
          <div
            key={p.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="border border-gray-700 rounded-md bg-gray-800 bg-opacity-80 backdrop-blur-sm shadow-xl flex flex-col"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-52 object-cover rounded-t-md"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-100 font-semibold text-xl mb-2 leading-tight">
                {p.name}
              </h3>
              <p className="text-gray-300 text-base mb-4 leading-relaxed flex-grow">
                {p.short}
              </p>
              <button
                onClick={() => setOpenModal(p)}
                className="text-indigo-400 text-sm border border-indigo-500 rounded px-4 py-2 hover:bg-indigo-600 hover:text-gray-100 transition self-start"
              >
                বিস্তারিত
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: text only */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-md shadow-xl max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto border border-indigo-500">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-100 transition"
            >
              ✖
            </button>
            <h2 className="font-bold text-xl mb-3 text-center text-gray-100">
              {openModal.name}
            </h2>
            <p className="text-base text-gray-300 whitespace-pre-line leading-relaxed">
              {openModal.details}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCards;