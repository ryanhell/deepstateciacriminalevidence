import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ryanhellfacts.com'),

    title: {
        default: 'Ryan Hell Facts - Criminal Conspiracy To Murder Committed in Chelan By Rivercom 911, Wenatchee Fire, and Sally Bagshaw a former Chief Prosecutor and Harvard Leadership Fellow who was caught fleeing the scene',
        template: '%s | Ryan Hell Facts'
    },

    description: 'On July 4th 2024 Mmyself and a disabled passenger were stranded 25 miles from cell services amd roads while camping. 911 ultimately refused go send aid and instead sent two people to transport us to meet a ambulance. Instead we were raced away from the city to a rural isolated house without cell service while officials assaulted me, stole my truck, and extorted me. Sally Bagshaw had been ordered to leave in because the sheriffs would not enter the property with her there. Police dash cam provided has evidence of tampering.',

    keywords: ['kidnapping', 'AI video tampering', 'prosecutorial misconduct', 'chelan corruption', 'sally bagshaw'],

    authors: [{ name: 'Ryan Hell', url: 'https://ryanhellfacts.com' }],

    creator: 'Ryan Hell',
    publisher: 'Ryan Hell Facts',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ryanhellfacts.com',
        siteName: 'Ryan Hell Facts',
        title: 'Ryan Hell Facts - The Whole Truth and Nothing But The Truth!',
        description: 'Mega Corrupt Criminal Chelan County Superior Coiurt Judge has wiped and redacted evidence and the very stenogtrapher int the court room for the first 6 months was the same woman the alleged victim, RIVERCOM 011s OPERATION CENTER MANAGERs owm mother....yet Judge Jordan refuses to address. Prosecutors provided me video evidence nearly a year later and it was CLEARLY TAMPERED with amd they refuse to address.',
        images: [{
            url: '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Ryan Hell Facts',
            type: 'image/jpeg',
        }]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@yRyanHell',
        creator: '@yourhandle@yRyanHell',
        title: 'RyanHellFacts - Being Burried By Mega Corrupt Criminals',
        description: 'Desperate Legal Plead For Help',
        images: '/og-image.jpg',
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },

    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
        // Add other verification codes as needed
    },

    alternates: {
        canonical: 'https://ryanhellfacts.com',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}