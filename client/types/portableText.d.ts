export interface PortableTextBlock {
    _type: 'block';
    children: PortableTextChild[];
}

export interface PortableTextChild {
    _type: 'span';
    text: string;
}

export type PortableTextContent = PortableTextBlock[];
