import { QuotePage } from '../data/quotes';
import { Check } from 'lucide-react';

interface SidebarProps {
  pages: QuotePage[];
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
  completedPages: Set<number>;
  onToggleComplete: (pageIndex: number) => void;
}

export function Sidebar({ pages, currentPage, onPageChange, completedPages, onToggleComplete }: SidebarProps) {
  return (
    <aside className="w-72 bg-gray-50 border-r-2 border-gray-200 overflow-y-auto shadow-sm">
      <div className="p-6">
        <div className="space-y-2">
          {pages.map((page, index) => (
            <div key={index} className="relative">
              <button onClick={() => onPageChange(index)}
              className={`w-full text-left p-4 pr-12 rounded-lg transition-all duration-300 border-2 ${
                currentPage === index 
                ? 'bg-emerald-100 border-emerald-600 shadow-lg scale-105'
                : 'bg-white border-gray-200 hover:bg-gray-100 hover:border-emerald-300'
              }`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
          currentPage === index
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        style={{ fontFamily: 'Cinzel, serif' }}
      >
        {page.id}
      </div>

      <div className="flex-1 min-w-0">
        <h3
          className={`text-xs font-medium break-words ${
            currentPage === index ? 'text-emerald-900' : 'text-gray-700'
          }`}
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {page.theme}
        </h3>
      </div>
    </div>
  </button>

  <button
    onClick={(e) => {
      e.stopPropagation();
      onToggleComplete(index);
    }}
    className={`absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
      completedPages.has(index)
        ? 'bg-emerald-500 border-emerald-400 shadow-lg'
        : 'bg-white border-gray-300 hover:border-emerald-400'
    }`}
    title={completedPages.has(index) ? 'Mark as unread' : 'Mark as completed'}
  >
    {completedPages.has(index) && (
      <Check className="w-4 h-4 text-white" strokeWidth={3} />
    )}
  </button>

</div>
          ))}
        </div>
      </div>
    </aside>
  );
}
