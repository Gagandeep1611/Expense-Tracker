import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6"

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>
            <div className="relative">
                <input
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    className="input-box pr-10" // Add right padding for icon space
                    value={value}
                    onChange={(e) => onChange(e)}
                />

                {type === 'password' && (
                    <span
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 cursor-pointer"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? (
                            <FaRegEye size={20} />
                        ) : (
                            <FaRegEyeSlash size={20} />
                        )}
                    </span>
                )}
            </div>
        </div>

    )
}

export default Input
