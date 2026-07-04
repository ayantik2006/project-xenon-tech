interface DiagonalPatternProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function DiagonalPattern({
  width = "100%",
  height = "100%",
  className = "",
}: DiagonalPatternProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 8px,
            rgba(255,255,255,0.06) 8px,
            rgba(255,255,255,0.06) 10px
          )
        `,
      }}
    />
  );
}