const Partners = () => {
  const partners = [
    { name: "AfricInvest", logo: "AfricInvest" },
    { name: "MEDA", logo: "MEDA" },
    { name: "GAFID", logo: "GAFID" },
    { name: "DABLEY", logo: "DABLEY" },
    { name: "COVA", logo: "COVA" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8">
          TRUSTED BY INNOVATIVE LEADERS AND INSTITUTIONS WORLDWIDE
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-muted-foreground/60 font-semibold text-xl hover:text-foreground smooth-transition"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
