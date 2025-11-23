export default function QiblaPage() {
    return (
        <div className="h-full flex flex-col">
            <div className="p-4 bg-white dark:bg-slate-900 z-10 shadow-sm">
                <h1 className="text-2xl font-bold text-primary">Qibla Finder</h1>
                <p className="text-sm text-muted-foreground">Locate the Qibla direction anywhere.</p>
            </div>
            <div className="flex-1 relative w-full h-full bg-slate-100 dark:bg-slate-950">
                <iframe
                    src="https://qiblafinder.withgoogle.com/"
                    className="w-full h-full border-0"
                    allow="geolocation"
                    title="Qibla Finder"
                />
            </div>
        </div>
    );
}
