import { Target, TrendingUp, User } from "lucide-react";
import { Card } from "@/components/ui/card";

const GapSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          The Gap Between Intent and Impact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 bg-white border-none shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-terracotta/20 flex items-center justify-center mb-4">
              <Target className="text-terracotta" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-terracotta">The Challenge</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Africa's gender-lens opportunity is clear, but most strategies fall short in execution. 
              The issue isn't the plan—it's taking action. We bridge that gap by turning ambition into 
              achievable investments.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 bg-sage border-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                  <TrendingUp className="text-white" size={18} />
                </div>
                <p className="text-4xl font-bold text-white">$34B</p>
              </div>
              <p className="text-sm text-white/90">
                Assets Under Management mobilised globally by the 2X Challenge
              </p>
            </Card>
            
            <Card className="p-6 bg-terracotta border-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center">
                  <User className="text-white" size={18} />
                </div>
                <p className="text-4xl font-bold text-white">$300B</p>
              </div>
              <p className="text-sm text-white/90">
                GDP Gained by 2025 if the gender gap is closed in Sub-Saharan Africa
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GapSection;
