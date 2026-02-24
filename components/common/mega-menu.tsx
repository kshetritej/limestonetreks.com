import { LucideChevronDown } from "lucide-react";
import Link from "next/link";

// This is a Server Component (no 'use client' at the top)
export function MegaMenu({ items }: { items: any }) {
  return (
    <nav className="items-center space-x-6 hidden md:flex">
      <ul className="flex gap-6">
        {items?.map((item: any) => (
          <li key={item.id} className="group relative py-4">
            {/* Main Link / Trigger */}
            <Link
              href={item.url || "#"}
              className="flex items-center gap-1 font-medium text-sm hover:text-primary transition-colors"
            >
              {item.label}
              {item.children.length > 0 && <LucideChevronDown size={12} />}
            </Link>

            {/* Dropdown Content - Controlled by CSS hover */}
            {item.children && (
              <div className="absolute z-999 left-0 top-full hidden group-hover:block w-[500px] pt-2">
                <div className="bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-8">
                  {item.children.map((child: any) => (
                    <div key={child.id} className="space-y-3">
                      {/* Sub-heading (e.g., Everest Region) */}
                      <Link
                        href={child.url}
                        className="font-bold  hover:text-primary pb-1"
                      >
                        {child.label}
                      </Link>

                      {/* Nested Links */}
                      {child.subChildren && (
                        <ul className="space-y-2">
                          {child.subChildren.map((subChild: any) => (
                            <li key={subChild.id}>
                              <Link
                                href={subChild.url}
                                className="text-sm text-gray-600 hover:text-blue-500 transition-colors block"
                              >
                                {subChild.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
