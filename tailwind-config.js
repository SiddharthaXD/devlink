// Tailwind CSS Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#FF7A00",
                "secondary": "#00C4B3",
                "background-light": "#f8f7f5",
                "background-dark": "#1A1A1A",
                "surface-dark": "#2C2C2C",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem", 
                "lg": "0.75rem", 
                "xl": "1rem", 
                "full": "9999px"
            },
        },
    },
}
