

export default function Progressbar() {
  const total = 10;
  const completed = 8;
  const percent = (completed / total) * 100;

  return (
    <div className="w-[240px] my-4">
      <div className="flex  justify-between mb-1 text-xs">
        {/* <span>{completed} / {total} completed</span> */}
        <p>Free plan</p>
        <span className="">{Math.round(percent)}%</span>
      </div>

      <div className="w-full bg-[#1B2028] rounded-full h-2">
        <div
          className="bg-[#252A31] h-2 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-xs flex justify-between mt-2 flex-row-reverse">
        
        <p className="text-[#467ef7] cursor-pointer">Upgrade plan</p>

      </div>
    </div>
  );
}
