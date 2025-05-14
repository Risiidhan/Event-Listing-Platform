"use client"

import React, { useState } from 'react'
import Image from 'next/image';

const FallBackImgComponent = ({ src, alt, ...props }: any) => {
    const fallbackSrc = '/img/no-image.jpg'; // <-- Put this image in your public/ folder
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}

export default FallBackImgComponent