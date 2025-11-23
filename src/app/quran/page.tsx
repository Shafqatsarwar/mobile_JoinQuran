export default function QuranPage() {
    return (
        <div className="p-4 h-full flex flex-col">
            <h1 className="text-2xl font-bold text-primary mb-4">Quran Reader</h1>
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-4 flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-muted-foreground">
                    Read the Holy Quran with English Translation.
                </p>
                <a
                    href="/Latest_Quran_English_Translation.pdf"
                    target="_blank"
                    className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-primary/90 transition-colors"
                >
                    Open PDF Reader
                </a>
            </div>
        </div>
    );
}
