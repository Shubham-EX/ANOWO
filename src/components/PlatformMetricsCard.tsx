
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Search, Linkedin, Twitter, Instagram } from "lucide-react";

interface PlatformMetricsCardProps {
  platform: string;
  metrics: {
    clicks: number;
    conversions: number;
    impressions: number;
    spend: number;
    revenue?: number;
    ctr: number;
    cpa: number;
    roas?: number;
  };
  accountInfo?: {
    name?: string;
    username?: string;
    email?: string;
  };
}

export function PlatformMetricsCard({ platform, metrics, accountInfo }: PlatformMetricsCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'google':
        return <Search className="h-6 w-6 text-brand-teal" />;
      case 'facebook':
        return <Facebook className="h-6 w-6 text-brand-purple" />;
      case 'linkedin':
        return <Linkedin className="h-6 w-6 text-brand-darkpurple" />;
      case 'twitter':
        return <Twitter className="h-6 w-6 text-blue-400" />;
      case 'instagram':
        return <Instagram className="h-6 w-6 text-pink-500" />;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:border-brand-purple/30 transition-all duration-300 shadow-sm hover:shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          {getPlatformIcon(platform)}
          {platform.charAt(0).toUpperCase() + platform.slice(1)} Performance
        </CardTitle>
        {accountInfo && (
          <div className="text-sm text-muted-foreground mt-1 border-t pt-2 border-border/30">
            {accountInfo.name && <p className="font-medium">{accountInfo.name}</p>}
            {accountInfo.username && <p className="text-xs opacity-80">@{accountInfo.username}</p>}
            {accountInfo.email && <p className="text-xs opacity-80">{accountInfo.email}</p>}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
            <p className="text-muted-foreground">Clicks</p>
            <p className="font-medium text-brand-darkpurple">{formatNumber(metrics.clicks)}</p>
          </div>
          <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
            <p className="text-muted-foreground">Conversions</p>
            <p className="font-medium text-brand-darkpurple">{formatNumber(metrics.conversions)}</p>
          </div>
          <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
            <p className="text-muted-foreground">CTR</p>
            <p className="font-medium text-brand-teal">{metrics.ctr.toFixed(2)}%</p>
          </div>
          <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
            <p className="text-muted-foreground">CPA</p>
            <p className="font-medium text-brand-teal">${metrics.cpa.toFixed(2)}</p>
          </div>
          <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
            <p className="text-muted-foreground">Spend</p>
            <p className="font-medium text-brand-purple">${metrics.spend.toLocaleString()}</p>
          </div>
          {metrics.revenue !== undefined && (
            <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
              <p className="text-muted-foreground">Revenue</p>
              <p className="font-medium text-brand-purple">${metrics.revenue.toLocaleString()}</p>
            </div>
          )}
          {metrics.roas !== undefined && (
            <div className="p-2 rounded-md bg-muted/30 transition-colors hover:bg-muted/50">
              <p className="text-muted-foreground">ROAS</p>
              <p className="font-medium text-brand-teal">{metrics.roas.toFixed(2)}x</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
