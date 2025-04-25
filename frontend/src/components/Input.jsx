import React from 'react'

function Input({ fieldType, fieldName, fieldPlaceholder, fieldLabel }) {
    return (
        <div className='relative w-full mt-4'>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                placeholder={fieldPlaceholder}
                className="border-2 border-gray-400 rounded-md w-full h-10 p-2"
            />
            <label
                htmlFor="email"
                className="absolute left-3 top-2 -translate-y-full text-sm font-semibold text-violet-500 bg-gray-100 px-1"
            >
                {fieldLabel}
            </label>
        </div>
    )
}

export default Input