import localFont from 'next/font/local'

export const IBMPlex = localFont({
    src: '../fonts/ibm-plex-sans-var.woff2',
    display: 'swap',
})

export const IBMPlexSansItalic = localFont({
    src: '../fonts/ibm-plex-sans-var-italic.woff2',
    display: 'swap',
    style: 'italic',
    variable: '--font-ibm-plex-sans-italic',
});