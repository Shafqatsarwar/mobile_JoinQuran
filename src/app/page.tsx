import Link from "next/link";
import Image from "next/image";
import { BookOpen, Compass, Clock, MessageCircle, ChevronRight, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-6 pb-24">
      <header className="pt-2 pb-2 space-y-3">
        <div className="flex items-center justify-between gap-2 px-1">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 flex-shrink-0">
            <Image
              src="/logo_JoinQuran.jpg"
              alt="Join Quran Logo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg p-1.5 text-center border border-emerald-100 dark:border-emerald-800/30 backdrop-blur-sm flex flex-col justify-center min-h-[2.5rem]">
            <p className="text-[10px] font-serif italic text-emerald-800 dark:text-emerald-200 leading-tight line-clamp-2">"Indeed, with hardship [will be] ease."</p>
            <p className="text-[8px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">- Surah Ash-Sharh [94:6]</p>
          </div>

          <h1 className="text-sm font-bold text-gradient whitespace-nowrap flex-shrink-0">Join Quran</h1>
        </div>
      </header>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Link href="/quran" className="group relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
              <BookOpen size={32} />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200">Read Quran 📚</span>
          </div>
        </Link>

        <Link href="/qibla" className="group relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-sm">
              <Compass size={32} />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200">Qibla Finder 🧭</span>
          </div>
        </Link>

        <Link href="/prayer-times" className="group relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Clock size={32} />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200">Prayer Times 🕌</span>
          </div>
        </Link>

        <Link href="/contact" className="group relative overflow-hidden bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-bl-full -mr-2 -mt-2 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10 flex flex-col items-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-sm">
              <MessageCircle size={32} />
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-200">Contact Us 💬</span>
          </div>
        </Link>
      </div>

      {/* Promo Card */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-5 border border-amber-200 dark:border-amber-800/30">
        <div className="flex items-start space-x-4">
          <div className="bg-white dark:bg-slate-800 p-3 rounded-xl text-2xl shadow-sm">
            🚀
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-amber-900 dark:text-amber-100">Start Your Journey</h3>
              <Link href="/reviews" className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full hover:bg-white/80 transition-colors">
                <Star size={14} className="mr-1" /> Reviews
              </Link>
            </div>
            <p className="text-sm text-amber-800 dark:text-amber-200 mt-1 leading-relaxed">
              Join our online classes today and learn from qualified tutors.
            </p>
            <div className="flex gap-3 mt-3">
              <a
                href="https://first-join-quran.vercel.app/"
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg shadow-md hover:bg-amber-700 transition-colors"
              >
                Visit Website <ChevronRight size={14} className="ml-1" />
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP?.replace('+', '')}`}
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-lg shadow-md hover:bg-green-700 transition-colors"
              >
                WhatsApp <MessageCircle size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
