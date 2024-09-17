import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PortableTextBlock, PortableTextChild } from '@portabletext/types';
import { PortableTextContent } from '../../types/portableText'; 

export function twCn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export const portableTextToPlainText = (blocks: PortableTextContent): string => {
    return blocks
        .map((block) => {
            if (block._type === 'block' && block.children) {
                return block.children
                    .map((child) => child.text || '')
                    .join(' ');
            }
            return '';
        })
        .join('\n');
};

export const calculateReadingTime = (text: string | PortableTextBlock[], wordsPerMinute = 200): number => {
    let plainText: string;

    if (typeof text === 'string') {
        plainText = text;
    } else {
        plainText = portableTextToPlainText(text);
    }

    const words = plainText.split(/\s+/).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
};
