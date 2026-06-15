import { useEffect, useRef, useState } from 'react';

/**
 * Drop-in <img> replacement that fades in once loaded, so large photography
 * never pops in abruptly. The section/card background shows through as a
 * placeholder while the image is opacity-0.
 */
export default function FadeImage({ className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-700 ease-editorial ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  );
}
