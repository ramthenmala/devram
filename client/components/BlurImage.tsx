"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { twCn } from "@/app/lib/Utils";

export const BlurImage = ({ src, className, alt, ...rest }: ImageProps) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            className={twCn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            alt={alt || "Image"}
            {...rest}
        />
    );
};
