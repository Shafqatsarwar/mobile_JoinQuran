export default function Watermark() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.03] overflow-hidden">
            <div className="transform -rotate-12 select-none">
                <h1 className="text-[20vw] font-bold text-primary whitespace-nowrap">Join Quran</h1>
            </div>
        </div>
    );
}
