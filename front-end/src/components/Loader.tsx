import React from 'react'

const Loader = () => {
    return (
        <div className="flex items-center justify-center space-x-2 my-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-black-500"></div>
            <p className="text-sm font-medium text-gray-500">Loading more posts...</p>
        </div>
    )
}

export default Loader;