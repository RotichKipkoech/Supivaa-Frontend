import { DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const GapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          The Gap Between Intent and Impact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-muted/50 border-none">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
                <p className="text-muted-foreground text-sm">
                  Africa's climate tech and social enterprises face most struggles that result in execution failure. The issue is the open of a billion dollar opportunity for climate-aware investments
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-sage/20 border-sage">
              <p className="text-4xl font-bold text-sage mb-2">$34B</p>
              <p className="text-sm text-muted-foreground">
                Gender Climate Finance committed globally by IFI Channels
              </p>
            </Card>
            
            <Card className="p-6 bg-primary/20 border-primary">
              <p className="text-4xl font-bold text-primary mb-2">$300B</p>
              <p className="text-sm text-muted-foreground">
                Estimated gap in the gender gap in climate capital deployment
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
