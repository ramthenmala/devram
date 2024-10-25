import React from 'react'

const NoMorePosts = () => {
    return (
        <div className="flex items-center justify-center space-x-2 my-8 text-gray-500 dark:text-gray-400">
            <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5h6M4 8h16M4 12h16m-7 4h7"
                ></path>
            </svg>
            <p className="text-sm font-medium">No more posts to display</p>
        </div>
    )
}

export default NoMorePosts