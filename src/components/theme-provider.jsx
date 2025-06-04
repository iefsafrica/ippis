
"use client"

import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider,  } from "next-themes"





const defaultThemeOptions = {
  theme: "default",
  mode: "light",
  darkVariant: "subtle"
}

const ThemeContext = createContext({
  ...defaultThemeOptions,
  setTheme: () => null,
  setMode: () => null,
  setDarkVariant: () => null,
  themes: ["default", "purple", "orange", "pink", "emerald", "custom"],
  customColor: "240 100% 50%", // default HSL blue
  setCustomColor: () => null,
  applyCustomColor: () => null,
  darkVariants: ["subtle", "lights-out"],
  isAnimated: true,
  setIsAnimated: () => null
})

export function ThemeProvider({
  children,
  ...props
}) {
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState("default")
  const [mode, setModeState] = useState("system")
  const [customColor, setCustomColor] = useState("240 100% 50%") // default HSL blue
  const [darkVariant, setDarkVariantState] = useState("subtle")
  const [isAnimated, setIsAnimated] = useState(true)

  const themes = ["default", "purple", "orange", "pink", "emerald"]
  const darkVariants = ["subtle", "lights-out"]

  // const applyCustomColor = (hsl) => {
  //   const root = document.documentElement
  //   root.style.setProperty("--primary", hsl)
  //   root.style.setProperty("--primary-foreground", "0 0% 100%") // white text
  //   root.style.setProperty("--background", "0 0% 100%") // white background
  //   root.style.setProperty("--foreground", "240 10% 3.9%") // default foreground
  
  //   localStorage.setItem("custom-color", hsl)
  // }
  

  const applyCustomColor = (hsl) => {
    const root = document.documentElement
  
    // Light mode overrides
    root.style.setProperty("--primary", hsl)
    root.style.setProperty("--primary-foreground", "0 0% 100%")
  
    // Optional: Only override background/foreground if needed
    // root.style.setProperty("--background", "0 0% 100%")
    // root.style.setProperty("--foreground", "240 10% 3.9%")
    // root.style.setProperty("--accent", hsl)
    // root.style.setProperty("--accent-foreground", "0 0% 100%")
    // root.style.setProperty("--card", "0 0% 100%")
  
    // Dark mode overrides
    const darkRoot = document.querySelector("html.dark") 
    if (darkRoot) {
      darkRoot.style.setProperty("--primary", hsl)
      darkRoot.style.setProperty("--primary-foreground", "0 0% 100%")
      // darkRoot?.style.setProperty("--accent", hsl)
      // darkRoot?.style.setProperty("--accent-foreground", "0 0% 100%")
      // darkRoot?.style.setProperty("--card", "240 10% 3.9%")
    }
  
    localStorage.setItem("custom-color", hsl)
  }
  

  // const setTheme = (newTheme) => {
  //   if (!mounted) return
  //   setThemeState(newTheme)
  //   localStorage.setItem("theme-color", newTheme)
  //   document.documentElement.classList.remove(...themes.map(t => `theme-${t}`))
  //   if (newTheme !== "default") document.documentElement.classList.add(`theme-${newTheme}`)
  // }


  const setTheme = (newTheme) => {
    if (!mounted) return
    setThemeState(newTheme)
    localStorage.setItem("theme-color", newTheme)
    document.documentElement.classList.remove(...themes.map(t => `theme-${t}`))
  
    if (newTheme === "custom") {
      applyCustomColor(customColor)
    } else if (newTheme !== "default") {
      document.documentElement.classList.add(`theme-${newTheme}`)
    }
  }
  

  const setMode = (mode) => {
    if (!mounted) return
    setModeState(mode)
    localStorage.setItem("color-mode", mode)
  }

  const setDarkVariant = (variant) => {
    if (!mounted) return
    setDarkVariantState(variant)
    localStorage.setItem("dark-variant", variant)
    document.documentElement.classList.remove("lights-out", "subtle")
    document.documentElement.classList.add(variant === "lights-out" ? "lights-out" : "subtle")
  }

  const setAnimatedState = (value) => {
    setIsAnimated(value)
    localStorage.setItem("theme-animated", String(value))
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color")
    const savedDarkVariant = localStorage.getItem("dark-variant") 
    const savedMode = localStorage.getItem("color-mode") 
    const savedAnimated = localStorage.getItem("theme-animated")

    const savedCustomColor = localStorage.getItem("custom-color")
    if (savedCustomColor) {
      setCustomColor(savedCustomColor)
      if (savedTheme === "custom") {
        applyCustomColor(savedCustomColor)
      }
    }

    if (savedTheme && themes.includes(savedTheme)) {
      setThemeState(savedTheme)
      if (savedTheme !== "default") {
        document.documentElement.classList.add(`theme-${savedTheme}`)
      }
    }

    if (savedDarkVariant) {
      setDarkVariantState(savedDarkVariant)
      document.documentElement.classList.add(savedDarkVariant === "lights-out" ? "lights-out" : "subtle")
    }

    if (savedMode && ["light", "dark", "system"].includes(savedMode)) {
      setModeState(savedMode)
    }

    if (savedAnimated !== null) {
      setIsAnimated(savedAnimated === "true")
    }

    setMounted(true)
  }, [])

  const value = {
    theme,
    mode,
    darkVariant,
    setTheme,
    setMode,
    setDarkVariant,
    themes,
    darkVariants,
    isAnimated,
    customColor,
    setCustomColor,
    applyCustomColor,
    setIsAnimated: setAnimatedState
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={value}>
      <NextThemesProvider
        attribute="class"
        defaultTheme={mode}
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}









// "use client"

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// export function ThemeProvider({
//   children,
//   ...props
// }) {
//     const [mounted, setMounted] = React.useState(false)

//     React.useEffect(() => {
//         setMounted(true)
//     }, [])

//     if (!mounted) return null
    
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }
