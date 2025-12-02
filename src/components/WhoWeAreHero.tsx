import Logo from "./Logo";

const WhoWeAreHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-warm-beige/40 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Large Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="w-48 h-48 md:w-64 md:h-64 opacity-30" />
            <div className="mt-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
                Supivaa
              </h1>
              <p className="text-xl text-muted-foreground">Advisory Group Ltd</p>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <span className="text-primary font-medium tracking-widest text-sm uppercase">
              Who We Are
            </span>
            <p className="text-lg text-charcoal leading-relaxed">
              <span className="font-semibold">Supivaa Advisory Group</span> is a Canadian-African impact and gender-lens advisory firm 
              bridging strategy and execution at the nexus of gender-lens investing and 
              climate change solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We guide Ventures, Fund Managers, and Programmatic Partners to 
              unlock resources that enable them to become more impact-driven.
            </p>
            <p className="text-muted-foreground italic">
              Our name 'Supivaa' stems from{" "}
              <span className="text-primary font-semibold">SUP</span>porting the
              <span className="text-primary font-semibold">DIV</span>
              <span className="text-primary font-semibold">A</span>s in{" "}
              <span className="text-primary font-semibold">A</span>frica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
