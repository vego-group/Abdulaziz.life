interface OutlineNumeralsProps {
  className?: string;
}

// Decorative outlined "20 / 30" (Vision 2030) used in About and Vision. Figma box: 356×415, lines 165px apart by 12px.
export default function OutlineNumerals({ className = '' }: OutlineNumeralsProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-[415px] w-[356px] flex-col items-center justify-center gap-3 font-display text-200 leading-[0.825] font-semibold select-none text-stroke ${className}`}
    >
      <span>20</span>
      <span>30</span>
    </div>
  );
}
