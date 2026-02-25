const AuthImagePattern = ({ title, subtitle }) => {
  return (
   <div className="hidden lg:flex items-center justify-center bg-base-100 p-12 relative overflow-hidden">
  {/* Abstract Background Glow */}
  <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
  <div className="absolute bottom-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

  <div className="max-w-md text-center z-10">
    <div className="relative h-64 mb-8 flex items-center justify-center">
      {/* The Floating Logic */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-md border border-white/10 shadow-2xl animate-float"
          style={{
            width: `${Math.random() * 40 + 60}px`,
            height: `${Math.random() * 40 + 60}px`,
            left: `${15 + (i * 12)}%`,
            top: `${Math.random() * 40}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${6 + i}s`
          }}
        />
      ))}
      {/* Central Hero Icon/Graphic */}
      <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-pulse">
         <div className="w-16 h-16 rounded-full bg-primary animate-ping opacity-20" />
      </div>
    </div>

    <h2 className="text-3xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
      {title}
    </h2>
    <p className="text-base-content/70 leading-relaxed font-medium">
      {subtitle}
    </p>
  </div>
</div>
  );
};

export default AuthImagePattern;
