import { QuotePage } from '../data/quotes';

interface SidebarProps {
  pages: QuotePage[];
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

export function Sidebar({ pages, currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-50 border-r-2 border-gray-200 overflow-y-auto shadow-sm">

      <div className="p-4">

        <div className="space-y-2">
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index)}
              className={`w-full text-left p-3 rounded-lg transition-all duration-300 border-2 ${
                currentPage === index
                  ? 'bg-emerald-100 border-emerald-600 shadow-lg scale-105'
                  : 'bg-white border-gray-200 hover:bg-gray-100 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-start gap-2">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentPage === index ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {page.id}
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xs mb-1 font-medium ${
                      currentPage === index ? 'text-emerald-900' : 'text-gray-700'
                    }`}
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {page.theme}
                  </h3>
                  {/* <p
                    className={`text-[11px] line-clamp-2 ${
                      currentPage === index ? 'text-teal-100' : 'text-teal-300'
                    }`}
                    style={{ fontFamily: 'Amiri, serif' }}
                  >
                    {page.highlight}
                  </p> */}
                </div>
              </div>

              {/* Color indicator */}
              {/* <div className="mt-2 flex gap-1">
                {page.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div> */}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
