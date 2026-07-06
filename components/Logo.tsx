const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type LogoImageProps = {
  className?: string;
  alt?: string;
};

export function LogoImage({
  className = "h-full w-full object-contain",
  alt = "Логотип зоомагазина Любимчик"
}: LogoImageProps) {
  return (
    <img
      src={`${basePath}/logo.png`}
      alt={alt}
      className={className}
      loading="eager"
    />
  );
}
