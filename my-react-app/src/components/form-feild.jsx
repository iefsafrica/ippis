"use client"

import { Input } from "./ui/input"
import { Label } from "../label"

export function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  type = "text",
  required = false,
  error,
}) {
  return (
    <div className="space-y-3 mt-4">
      <Label htmlFor={id} className="flex text-left text-[17px] font-medium text-gray-900">
        {label}
     
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className={`h-12 text-base  ${error ? "border-red-500 focus:border-red-500" : ""}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm flex text-left text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
