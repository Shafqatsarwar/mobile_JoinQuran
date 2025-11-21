import Link from "next/link";
import Image from "next/image";

export default function LogoHeader() {
    return (
        <div className="fixed top-0 left-0 right-0 h-14 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-30 flex items-center justify-center border-b border-slate-100 dark:border-slate-800 px-4">
            <Link href="/" className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-sm">
                    <Image
                        src="/logo_JoinQuran.jpg"
                        alt="Join Quran Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="font-bold text-lg text-primary">Join Quran</span>
            </Link>
        </div>
    );
}
