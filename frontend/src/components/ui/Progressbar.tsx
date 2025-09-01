

export default function Progressbar() {
  const total = 10;
  const completed = 8;
  const percent = (completed / total) * 100;
//text-[#0F141B] bg-[#ebeff7] dark:text-white/40 dark:bg-[#0F141B]
  return (
    <div className="w-[240px] my-4">
      <div className="flex  justify-between mb-1 text-xs">
        {/* <span>{completed} / {total} completed</span> */}
        <p>Free plan</p>
        <span className="">{Math.round(percent)}%</span>
      </div>

      <div className="w-full dark:bg-[#1B2028] bg-[#e7eaf0] rounded-full h-2">
        <div
          className="dark:bg-[#252A31] bg-[#b6b8bb] h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-xs flex justify-between mt-2 flex-row-reverse">
        
        <p className="text-[#467ef7] cursor-pointer">Upgrade plan</p>

      </div>
    </div>
  );
}
