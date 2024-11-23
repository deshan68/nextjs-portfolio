import React from "react";

const TableSkeleton = ({ heads }) => {
  return (
    <table className="w-full font-leagueLight text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-white border-b border-b-gray-500/30">
        <tr>
          {heads.map((head) => (
            <th key={head} scope="col" className="px-6 py-3">
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: heads.length }).map((_, index) => (
          <tr
            key={index}
            className="border-b border-b-gray-500/30 font-leagueExtraThin last:border-none"
          >
            {Array.from({ length: heads.length }).map((_, index) => (
              <td key={index} className="px-6 py-4">
                <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
