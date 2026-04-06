// components/Pagination.js
export default function Pagination() {
  return (
    <div className="flex items-center justify-between mt-8 text-sm text-gray-500 border-t pt-6">
      <div className="font-bold text-[#000000]">6 rows</div>
      <div className="flex items-center gap-8">
        <div className="flex items-center font-bold gap-2 ">
          <span className="text-[#000000]">Rows per page:</span> 
          <select className="border rounded px-1 py-0.5">
            <option>10</option>
          </select>
        </div>
        <div className="font-bold text-[#000000]">page 1 of 1</div>
        <div className="flex gap-1">
          <button className="p-1 border rounded disabled:opacity-30">{"<<"}</button>
          <button className="p-1 border rounded disabled:opacity-30">{"<"}</button>
          <button className="p-1 border rounded disabled:opacity-30">{">"}</button>
          <button className="p-1 border rounded disabled:opacity-30">{">>"}</button>
        </div>
      </div>
    </div>
  );
}