
'use client';

type Theme = {
    '--background': string;
    '--foreground': string;
    '--card': string;
    '--card-foreground': string;
    '--popover': string;
    '--popover-foreground': string;
    '--primary': string;
    '--primary-foreground': string;
    '--secondary': string;
    '--secondary-foreground': string;
    '--muted': string;
    '--muted-foreground': string;
    '--accent': string;
    '--accent-foreground': string;
    '--destructive': string;
    '--destructive-foreground': string;
    '--border': string;
    '--input': string;
    '--ring': string;
    '--chart-1': string;
    '--chart-2': string;
    '--chart-3': string;
    '--chart-4': string;
    '--chart-5': string;
    '--radius': string;
};

const themes: Theme[] = [
    // Default Theme (Blue/Orange)
    {
        '--background': '210 40% 98%',
        '--foreground': '215 28% 18%',
        '--card': '0 0% 100%',
        '--card-foreground': '215 28% 18%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '215 28% 18%',
        '--primary': '205 90% 45%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '210 40% 90%',
        '--secondary-foreground': '205 90% 45%',
        '--muted': '210 40% 94%',
        '--muted-foreground': '215 20% 45%',
        '--accent': '30 95% 55%',
        '--accent-foreground': '0 0% 100%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '210 40% 90%',
        '--input': '210 40% 92%',
        '--ring': '205 90% 45%',
        '--chart-1': '205 90% 45%',
        '--chart-2': '30 95% 55%',
        '--chart-3': '205 50% 60%',
        '--chart-4': '30 95% 75%',
        '--chart-5': '205 90% 80%',
        '--radius': '0.75rem',
    },
    // Emerald/Teal Theme
    {
        '--background': '200 20% 98%',
        '--foreground': '180 30% 20%',
        '--card': '0 0% 100%',
        '--card-foreground': '180 30% 20%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '180 30% 20%',
        '--primary': '160 80% 40%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '170 30% 92%',
        '--secondary-foreground': '160 80% 40%',
        '--muted': '170 30% 96%',
        '--muted-foreground': '180 20% 45%',
        '--accent': '40 90% 55%',
        '--accent-foreground': '0 0% 100%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '170 30% 92%',
        '--input': '170 30% 94%',
        '--ring': '160 80% 40%',
        '--chart-1': '160 80% 40%',
        '--chart-2': '40 90% 55%',
        '--chart-3': '160 60% 60%',
        '--chart-4': '40 90% 75%',
        '--chart-5': '160 80% 80%',
        '--radius': '0.75rem',
    },
    // Rose/Purple Theme
    {
        '--background': '340 30% 98%',
        '--foreground': '330 40% 25%',
        '--card': '0 0% 100%',
        '--card-foreground': '330 40% 25%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '330 40% 25%',
        '--primary': '320 70% 50%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '330 50% 94%',
        '--secondary-foreground': '320 70% 50%',
        '--muted': '330 50% 97%',
        '--muted-foreground': '330 30% 50%',
        '--accent': '270 80% 60%',
        '--accent-foreground': '0 0% 100%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '330 50% 94%',
        '--input': '330 50% 96%',
        '--ring': '320 70% 50%',
        '--chart-1': '320 70% 50%',
        '--chart-2': '270 80% 60%',
        '--chart-3': '320 50% 70%',
        '--chart-4': '270 80% 80%',
        '--chart-5': '320 70% 90%',
        '--radius': '0.75rem',
    },
    // Forest/Amber Theme
    {
        '--background': '120 15% 98%',
        '--foreground': '100 40% 20%',
        '--card': '0 0% 100%',
        '--card-foreground': '100 40% 20%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '100 40% 20%',
        '--primary': '100 60% 35%',
        '--primary-foreground': '0 0% 100%',
        '--secondary': '110 20% 93%',
        '--secondary-foreground': '100 60% 35%',
        '--muted': '110 20% 96%',
        '--muted-foreground': '100 25% 45%',
        '--accent': '45 90% 50%',
        '--accent-foreground': '0 0% 0%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '110 20% 93%',
        '--input': '110 20% 95%',
        '--ring': '100 60% 35%',
        '--chart-1': '100 60% 35%',
        '--chart-2': '45 90% 50%',
        '--chart-3': '100 40% 55%',
        '--chart-4': '45 90% 70%',
        '--chart-5': '100 60% 75%',
        '--radius': '0.75rem',
    },
];

export function applyTheme(themeIndex: number) {
    if (typeof window === 'undefined') return;

    const theme = themes[themeIndex % themes.length];
    const root = document.documentElement;

    if (!theme) return;

    Object.keys(theme).forEach(key => {
        const cssVar = key as keyof Theme;
        root.style.setProperty(cssVar, theme[cssVar]);
    });
}
