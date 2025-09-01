import Link from 'next/link';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
        <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 p-2 rounded-lg">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Wup<span className="text-primary-600">.chat</span>
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
          AI Communication
        </span>
      </div>
    </Link>
  );
}
