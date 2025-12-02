const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
      <path d="M30 50 Q40 30, 50 50 T70 50" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
      <path d="M35 50 Q45 35, 55 50 T75 50" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none"/>
    </svg>
  );
};

export default Logo;
