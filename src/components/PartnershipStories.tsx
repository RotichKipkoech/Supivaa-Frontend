import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PartnershipStories = () => {
  const stories = [
    {
      title: "Dandy",
      description: "We partnered on a demand-side investment readiness strengthening. Now, impact-designed financial education with women-led businesses as a gender-smart enterprise.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500",
    },
    {
      title: "Chandaria COVA",
      description: "A gender-lens in funding climate solutions that raises social ROI, unlocking an outcome-based investment framework among farmers, smallholder and MSMEs.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500",
    },
    {
      title: "MEDA",
      description: "We built their approach to gender-responsive financing/investments for social employment that boost local development from an engagement-conforming to REEEF finance stakeholders and opportunities.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
    },
  ];

  return (
    <section className="py-20 bg-sage/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-sage font-medium mb-2">OUR PARTNERSHIP IMPACT</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Partnership Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {stories.map((story) => (
            <Card key={story.title} className="overflow-hidden hover:shadow-xl smooth-transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-105 smooth-transition"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-3">{story.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{story.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-sage text-sage hover:bg-sage hover:text-white">
            View All Partnership Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipStories;
