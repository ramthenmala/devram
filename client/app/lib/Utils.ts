import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function twCn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export const portableTextToPlainText = (blocks: any): string => {
    return blocks
        .map((block: any) => {
            if (block._type === 'block' && block.children) {
                return block.children
                    .map((child: any) => child.text || '')
                    .join(' ');
            }
            return '';
        })
        .join('\n');
};

export const calculateReadingTime = (text: any, wordsPerMinute = 200): number => {
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
