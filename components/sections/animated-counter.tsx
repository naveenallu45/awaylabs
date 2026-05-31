export function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}
