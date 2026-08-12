'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = []
  const maxVisiblePages = 5

  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}`}
          className="p-2 rounded hover:bg-muted transition-colors text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
      ) : (
        <button disabled className="p-2 text-muted-foreground opacity-50">
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* First Page */}
      {startPage > 1 && (
        <>
          <Link
            href={`${baseUrl}?page=1`}
            className="px-3 py-2 rounded hover:bg-muted transition-colors text-foreground"
          >
            1
          </Link>
          {startPage > 2 && <span className="text-muted-foreground">...</span>}
        </>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${baseUrl}?page=${page}`}
          className={`px-3 py-2 rounded transition-colors ${
            page === currentPage
              ? 'bg-primary text-primary-foreground font-bold'
              : 'hover:bg-muted text-foreground'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Last Page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-muted-foreground">...</span>}
          <Link
            href={`${baseUrl}?page=${totalPages}`}
            className="px-3 py-2 rounded hover:bg-muted transition-colors text-foreground"
          >
            {totalPages}
          </Link>
        </>
      )}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}`}
          className="p-2 rounded hover:bg-muted transition-colors text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      ) : (
        <button disabled className="p-2 text-muted-foreground opacity-50">
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
