type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#c86e3f]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-[-0.04em] text-[#2f4b34] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-[#68604f] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
