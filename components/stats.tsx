export const Stats = ({ title, stats }: { title: string, stats: string}) => {
    return <div className="w-full rounded-lg p-6 bg-[#161617] my-10 flex  flex-col border border-[#444445]">
        <div className="text-xs my-2">{title.toUpperCase()}</div>
        <div className="font-bold text-3xl">{stats}</div>
    </div>
}