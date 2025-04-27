
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { ChevronLeft, Download, Maximize, Calendar } from "lucide-react";
import { PlatformMetricsCard } from "@/components/PlatformMetricsCard";

const getCompanyData = (id: string, timeFilter: string = "all") => {
  const platformAccountInfo = {
    google: {
      name: "Tech Mahindra Google Ads",
      email: "marketing-techmahindra@techmahindra.com"
    },
    facebook: {
      name: "Tech Mahindra Media",
      username: "techmahindra"
    },
    linkedin: {
      name: "IT Tech Mahindra",
      username: "tech-mahindra"
    },
    twitter: {
      name: "Tech Mahindra",
      username: "tech-mahindra"
    },
    instagram: {
      name: "EditX Social",
      username: "editx.create"
    }
  };

  const baseData = {
    id,
    name: id === "1" ? "Tech Mahindra" : id === "2" ? "EditX" : id === "3" ? "Stark Enterprises" : "Wayne Industries",
    industry: id === "1" || id === "2" ? "Technology" : id === "3" ? "Manufacturing" : "Finance",
    platforms: id === "1" ? ["google", "facebook", "linkedin"] : id === "2" ? ["instagram"] : id === "3" ? ["google", "linkedin"] : ["facebook", "linkedin"],
    platformAccountInfo,
    summary: {
      impressions: id === "1" ? 1243567 : id === "2" ? 0 : id === "3" ? 543211 : 345678,
      clicks: id === "1" ? 52341 : id === "2" ? 0 : id === "3" ? 23456 : 12345,
      conversions: id === "1" ? 2134 : id === "2" ? 0 : id === "3" ? 987 : 567,
      spend: id === "1" ? 8750.45 : id === "2" ? 0 : id === "3" ? 4320.78 : 3456.89,
      revenue: id === "1" ? 25230.50 : id === "2" ? 0 : id === "3" ? 12962.34 : 8642.23,
      ctr: id === "1" ? 4.21 : id === "2" ? 0 : id === "3" ? 4.32 : 3.57,
      cpc: id === "1" ? 0.17 : id === "2" ? 0 : id === "3" ? 0.18 : 0.28,
      convRate: id === "1" ? 4.08 : id === "2" ? 0 : id === "3" ? 4.21 : 4.59,
      cpa: id === "1" ? 4.10 : id === "2" ? 0 : id === "3" ? 4.38 : 6.10,
      roas: id === "1" ? 2.88 : id === "2" ? 0 : id === "3" ? 3.00 : 2.50,
    },
    platformData: {
      google: {
        impressions: id === "1" ? 743567 : id === "2" ? 0 : id === "3" ? 543211 : 0,
        clicks: id === "1" ? 32341 : id === "2" ? 0 : id === "3" ? 23456 : 0,
        conversions: id === "1" ? 1334 : id === "2" ? 0 : id === "3" ? 987 : 0,
        spend: id === "1" ? 5250.45 : id === "2" ? 0 : id === "3" ? 4320.78 : 0,
        revenue: id === "1" ? 15138.30 : id === "2" ? 0 : id === "3" ? 12962.34 : 0,
        ctr: id === "1" ? 4.35 : id === "2" ? 0 : id === "3" ? 4.32 : 0,
        cpc: id === "1" ? 0.16 : id === "2" ? 0 : id === "3" ? 0.18 : 0,
        cpa: id === "1" ? 3.94 : id === "2" ? 0 : id === "3" ? 4.38 : 0,
        roas: id === "1" ? 2.88 : id === "2" ? 0 : id === "3" ? 3.00 : 0,
      },
      facebook: {
        impressions: id === "1" ? 350000 : id === "2" ? 0 : id === "3" ? 0 : 195678,
        clicks: id === "1" ? 15000 : id === "2" ? 0 : id === "3" ? 0 : 8345,
        conversions: id === "1" ? 600 : id === "2" ? 0 : id === "3" ? 0 : 367,
        spend: id === "1" ? 2500 : id === "2" ? 0 : id === "3" ? 0 : 2456.89,
        revenue: id === "1" ? 7567.20 : id === "2" ? 0 : id === "3" ? 0 : 6185.53,
        ctr: id === "1" ? 4.29 : id === "2" ? 0 : id === "3" ? 0 : 4.26,
        cpc: id === "1" ? 0.17 : id === "2" ? 0 : id === "3" ? 0 : 0.29,
        cpa: id === "1" ? 4.17 : id === "2" ? 0 : id === "3" ? 0 : 6.69,
        roas: id === "1" ? 3.03 : id === "2" ? 0 : id === "3" ? 0 : 2.52,
      },
      linkedin: {
        impressions: id === "1" ? 150000 : id === "2" ? 0 : id === "3" ? 0 : 150000,
        clicks: id === "1" ? 5000 : id === "2" ? 0 : id === "3" ? 0 : 4000,
        conversions: id === "1" ? 200 : id === "2" ? 0 : id === "3" ? 0 : 200,
        spend: id === "1" ? 1000 : id === "2" ? 0 : id === "3" ? 0 : 1000,
        revenue: id === "1" ? 2525.00 : id === "2" ? 0 : id === "3" ? 0 : 2456.70,
        ctr: id === "1" ? 3.33 : id === "2" ? 0 : id === "3" ? 0 : 2.67,
        cpc: id === "1" ? 0.20 : id === "2" ? 0 : id === "3" ? 0 : 0.25,
        cpa: id === "1" ? 5.00 : id === "2" ? 0 : id === "3" ? 0 : 5.00,
        roas: id === "1" ? 2.53 : id === "2" ? 0 : id === "3" ? 0 : 2.46,
      },
      twitter: {
        impressions: id === "1" ? 0 : 0,
        clicks: id === "1" ? 0 : 0,
        conversions: id === "1" ? 0 : 0,
        spend: id === "1" ? 0 : 0,
        revenue: id === "1" ? 0 : 0,
        ctr: id === "1" ? 0 : 0,
        cpc: id === "1" ? 0 : 0,
        cpa: id === "1" ? 0 : 0,
        roas: id === "1" ? 0 : 0,
      },
      instagram: {
        impressions: id === "1" ? 0 : id === "2" ? 0 : 0,
        clicks: id === "1" ? 0 : id === "2" ? 0 : 0,
        conversions: id === "1" ? 0 : id === "2" ? 0 : 0,
        spend: id === "1" ? 0 : id === "2" ? 0 : 0,
        revenue: id === "1" ? 0 : id === "2" ? 0 : 0,
        ctr: id === "1" ? 0 : id === "2" ? 0 : 0,
        cpc: id === "1" ? 0 : id === "2" ? 0 : 0,
        cpa: id === "1" ? 0 : id === "2" ? 0 : 0,
        roas: id === "1" ? 0 : id === "2" ? 0 : 0,
      }
    },
    campaignData: [
      { name: "Brand Awareness", platform: "Google", impressions: 450000, clicks: 18000, conversions: 720, spend: 3000, revenue: 8640, ctr: 4.0, cpc: 0.17, roas: 2.88 },
      { name: "Product Launch", platform: "Facebook", impressions: 280000, clicks: 12000, conversions: 480, spend: 2000, revenue: 6000, ctr: 4.29, cpc: 0.17, roas: 3.00 },
      { name: "Lead Generation", platform: "LinkedIn", impressions: 120000, clicks: 4800, conversions: 240, spend: 1000, revenue: 2520, ctr: 4.0, cpc: 0.21, roas: 2.52 },
      { name: "Retargeting", platform: "Google", impressions: 180000, clicks: 9000, conversions: 450, spend: 1500, revenue: 4350, ctr: 5.0, cpc: 0.17, roas: 2.90 },
      { name: "Seasonal Promo", platform: "Facebook", impressions: 150000, clicks: 6000, conversions: 300, spend: 1000, revenue: 3200, ctr: 4.0, cpc: 0.17, roas: 3.20 },
      { name: "Social Engagement", platform: "Instagram", impressions: 190000, clicks: 8000, conversions: 350, spend: 1200, revenue: 3600, ctr: 4.2, cpc: 0.15, roas: 3.00 },
    ],
  };

  let performanceData = [];
  if (timeFilter === "1week") {
    performanceData = [
      { name: "Mon", impressions: 25000, clicks: 1000, conversions: 45, spend: 200, revenue: 600, ctr: 4.0, cpc: 0.20 },
      { name: "Tue", impressions: 28000, clicks: 1200, conversions: 50, spend: 220, revenue: 650, ctr: 4.3, cpc: 0.18 },
      { name: "Wed", impressions: 30000, clicks: 1250, conversions: 55, spend: 230, revenue: 700, ctr: 4.2, cpc: 0.18 },
      { name: "Thu", impressions: 27000, clicks: 1150, conversions: 48, spend: 210, revenue: 620, ctr: 4.3, cpc: 0.18 },
      { name: "Fri", impressions: 32000, clicks: 1400, conversions: 60, spend: 250, revenue: 750, ctr: 4.4, cpc: 0.18 },
      { name: "Sat", impressions: 20000, clicks: 900, conversions: 40, spend: 180, revenue: 500, ctr: 4.5, cpc: 0.20 },
      { name: "Sun", impressions: 18000, clicks: 800, conversions: 35, spend: 160, revenue: 450, ctr: 4.4, cpc: 0.20 },
    ];
  } else if (timeFilter === "1month") {
    performanceData = [
      { name: "Week 1", impressions: 150000, clicks: 6500, conversions: 270, spend: 1200, revenue: 3500, ctr: 4.33, cpc: 0.18 },
      { name: "Week 2", impressions: 165000, clicks: 7200, conversions: 315, spend: 1350, revenue: 3900, ctr: 4.36, cpc: 0.19 },
      { name: "Week 3", impressions: 180000, clicks: 7800, conversions: 345, spend: 1450, revenue: 4200, ctr: 4.33, cpc: 0.19 },
      { name: "Week 4", impressions: 175000, clicks: 7500, conversions: 330, spend: 1400, revenue: 4100, ctr: 4.29, cpc: 0.19 },
    ];
  } else if (timeFilter === "6months") {
    performanceData = [
      { name: "Jan", impressions: 150000, clicks: 6500, conversions: 270, spend: 1200, revenue: 3500, ctr: 4.33, cpc: 0.18 },
      { name: "Feb", impressions: 165000, clicks: 7200, conversions: 315, spend: 1350, revenue: 3900, ctr: 4.36, cpc: 0.19 },
      { name: "Mar", impressions: 180000, clicks: 7800, conversions: 345, spend: 1450, revenue: 4200, ctr: 4.33, cpc: 0.19 },
      { name: "Apr", impressions: 175000, clicks: 7500, conversions: 330, spend: 1400, revenue: 4100, ctr: 4.29, cpc: 0.19 },
      { name: "May", impressions: 195000, clicks: 8400, conversions: 375, spend: 1550, revenue: 4500, ctr: 4.31, cpc: 0.18 },
      { name: "Jun", impressions: 210000, clicks: 9100, conversions: 405, spend: 1650, revenue: 4800, ctr: 4.33, cpc: 0.18 },
    ];
  } else if (timeFilter === "1year") {
    performanceData = [
      { name: "Jan", impressions: 150000, clicks: 6500, conversions: 270, spend: 1200, revenue: 3500, ctr: 4.33, cpc: 0.18 },
      { name: "Feb", impressions: 165000, clicks: 7200, conversions: 315, spend: 1350, revenue: 3900, ctr: 4.36, cpc: 0.19 },
      { name: "Mar", impressions: 180000, clicks: 7800, conversions: 345, spend: 1450, revenue: 4200, ctr: 4.33, cpc: 0.19 },
      { name: "Apr", impressions: 175000, clicks: 7500, conversions: 330, spend: 1400, revenue: 4100, ctr: 4.29, cpc: 0.19 },
      { name: "May", impressions: 195000, clicks: 8400, conversions: 375, spend: 1550, revenue: 4500, ctr: 4.31, cpc: 0.18 },
      { name: "Jun", impressions: 210000, clicks: 9100, conversions: 405, spend: 1650, revenue: 4800, ctr: 4.33, cpc: 0.18 },
      { name: "Jul", impressions: 225000, clicks: 9800, conversions: 435, spend: 1750, revenue: 5100, ctr: 4.36, cpc: 0.18 },
      { name: "Aug", impressions: 235000, clicks: 10200, conversions: 460, spend: 1850, revenue: 5400, ctr: 4.34, cpc: 0.18 },
      { name: "Sep", impressions: 220000, clicks: 9600, conversions: 430, spend: 1700, revenue: 5000, ctr: 4.36, cpc: 0.18 },
      { name: "Oct", impressions: 240000, clicks: 10400, conversions: 470, spend: 1900, revenue: 5600, ctr: 4.33, cpc: 0.18 },
      { name: "Nov", impressions: 230000, clicks: 10000, conversions: 450, spend: 1800, revenue: 5300, ctr: 4.35, cpc: 0.18 },
      { name: "Dec", impressions: 250000, clicks: 10800, conversions: 490, spend: 2000, revenue: 5900, ctr: 4.32, cpc: 0.19 },
    ];
  } else {
    performanceData = [
      { name: "Jan", impressions: 150000, clicks: 6500, conversions: 270, spend: 1200, revenue: 3500, ctr: 4.33, cpc: 0.18 },
      { name: "Feb", impressions: 165000, clicks: 7200, conversions: 315, spend: 1350, revenue: 3900, ctr: 4.36, cpc: 0.19 },
      { name: "Mar", impressions: 180000, clicks: 7800, conversions: 345, spend: 1450, revenue: 4200, ctr: 4.33, cpc: 0.19 },
      { name: "Apr", impressions: 175000, clicks: 7500, conversions: 330, spend: 1400, revenue: 4100, ctr: 4.29, cpc: 0.19 },
      { name: "May", impressions: 195000, clicks: 8400, conversions: 375, spend: 1550, revenue: 4500, ctr: 4.31, cpc: 0.18 },
      { name: "Jun", impressions: 210000, clicks: 9100, conversions: 405, spend: 1650, revenue: 4800, ctr: 4.33, cpc: 0.18 },
      { name: "Jul", impressions: 225000, clicks: 9800, conversions: 435, spend: 1750, revenue: 5100, ctr: 4.36, cpc: 0.18 },
    ];
  }

  return {
    ...baseData,
    performanceData
  };
};

export default function CompanyPage() {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [fullscreenChart, setFullscreenChart] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (companyId) {
      const data = getCompanyData(companyId, timeFilter);
      setCompany(data);
      setLoading(false);
    }
  }, [companyId, timeFilter]);

  const handleTimeFilterChange = (value: string) => {
    setTimeFilter(value);
    toast({
      title: "Time filter updated",
      description: `Showing data for ${getTimeFilterLabel(value)}`,
    });
  };

  const getTimeFilterLabel = (filter: string) => {
    switch (filter) {
      case "1week":
        return "Last 7 days";
      case "1month":
        return "Last 30 days";
      case "6months":
        return "Last 6 months";
      case "1year":
        return "Last 12 months";
      default:
        return "All time";
    }
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const handleFullscreenChart = (chartId: string) => {
    setFullscreenChart(chartId);
  };

  const handleCloseFullscreen = () => {
    setFullscreenChart(null);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const getRevenuePieChartData = () => {
    if (!company) return [];
    
    return Object.keys(company.platformData)
      .filter(platform => company.platformData[platform].revenue > 0)
      .map(platform => ({
        name: platform.charAt(0).toUpperCase() + platform.slice(1),
        value: company.platformData[platform].revenue,
      }));
  };

  const COLORS = ["#0057FF", "#00C2CB", "#1B2138", "#F5F9FF"];

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Company not found</h2>
        <Button variant="link" onClick={handleBackToDashboard}>
          Back to Dashboard
        </Button>
      </div>
    );
  }

  const renderFullscreenChart = () => {
    if (!fullscreenChart) return null;

    let chartContent;

    switch (fullscreenChart) {
      case "performance":
        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={company.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" />
              <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#82ca9d" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#ff7300" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#0057FF" />
            </LineChart>
          </ResponsiveContainer>
        );
        break;
      case "platforms":
        const platformsData = Object.keys(company.platformData).map(platform => ({
          name: platform.charAt(0).toUpperCase() + platform.slice(1),
          impressions: company.platformData[platform].impressions,
          clicks: company.platformData[platform].clicks,
          conversions: company.platformData[platform].conversions,
          spend: company.platformData[platform].spend,
          revenue: company.platformData[platform].revenue
        })).filter(platform => platform.impressions > 0);

        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={platformsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="clicks" fill="#0057FF" />
              <Bar dataKey="conversions" fill="#00C2CB" />
              <Bar dataKey="revenue" fill="#1B2138" />
            </BarChart>
          </ResponsiveContainer>
        );
        break;
      case "revenue":
        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={getRevenuePieChartData()}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {getRevenuePieChartData().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
        break;
      case "campaigns":
        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={company.campaignData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="clicks" fill="#0057FF" />
              <Bar dataKey="conversions" fill="#00C2CB" />
              <Bar dataKey="revenue" fill="#1B2138" />
            </BarChart>
          </ResponsiveContainer>
        );
        break;
      default:
        chartContent = null;
    }

    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {fullscreenChart.charAt(0).toUpperCase() + fullscreenChart.slice(1)} Chart
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => toast({ title: "Download started", description: "Your chart data is being prepared for download." })}>
              <Download size={20} />
            </Button>
            <Button variant="outline" size="icon" onClick={handleCloseFullscreen}>
              <ChevronLeft size={20} />
            </Button>
          </div>
        </div>
        {chartContent}
      </div>
    );
  };

  return (
    <>
      {renderFullscreenChart()}
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handleBackToDashboard}>
              <ChevronLeft size={18} />
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">{company.name}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select value={timeFilter} onValueChange={handleTimeFilterChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">Last 7 days</SelectItem>
                  <SelectItem value="1month">Last 30 days</SelectItem>
                  <SelectItem value="6months">Last 6 months</SelectItem>
                  <SelectItem value="1year">Last 12 months</SelectItem>
                  <SelectItem value="all">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-1">
              {company.platforms.map((platform: string) => (
                <span
                  key={platform}
                  className={`platform-badge platform-badge-${platform}`}
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Impressions</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{formatNumber(company.summary.impressions)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Clicks</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{formatNumber(company.summary.clicks)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conversions</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{formatNumber(company.summary.conversions)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">${company.summary.revenue.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Spend</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">${company.summary.spend.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CTR</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{company.summary.ctr.toFixed(2)}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conv. Rate</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{company.summary.convRate.toFixed(2)}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">ROAS</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{company.summary.roas.toFixed(2)}x</p>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardHeader className="py-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-base">Platform Breakdown</CardTitle>
                    <CardDescription>Revenue distribution across platforms</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleFullscreenChart("revenue")}>
                    <Maximize size={16} />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={getRevenuePieChartData()}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {getRevenuePieChartData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-2">
                <CardHeader className="py-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-base">Performance</CardTitle>
                    <CardDescription>Monthly performance trends</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleFullscreenChart("performance")}>
                    <Maximize size={16} />
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={company.performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <defs>
                          <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0057FF" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0057FF" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorConv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00C2CB" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#00C2CB" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="clicks" stroke="#0057FF" fillOpacity={1} fill="url(#colorClicks)" />
                        <Area type="monotone" dataKey="conversions" stroke="#00C2CB" fillOpacity={1} fill="url(#colorConv)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {company.platforms.map((platform: string) => (
                <PlatformMetricsCard 
                  key={platform}
                  platform={platform}
                  metrics={company.platformData[platform]}
                  accountInfo={company.platformAccountInfo[platform]}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader className="py-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Detailed monthly performance</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => toast({ title: "Download started", description: "Your performance data is being prepared for download." })}>
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("performance")}>
                    <Maximize size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={company.performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" />
                      <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#0057FF" />
                      <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#00C2CB" />
                      <Line yAxisId="right" type="monotone" dataKey="spend" stroke="#1B2138" />
                      <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#00C2CB" strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CTR</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{company.summary.ctr.toFixed(2)}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CPC</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">${company.summary.cpc.toFixed(2)}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Conv. Rate</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">{company.summary.convRate.toFixed(2)}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">CPA</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">${company.summary.cpa.toFixed(2)}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <Card>
              <CardHeader className="py-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Metrics across advertising platforms</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => toast({ title: "Download started", description: "Your platform data is being prepared for download." })}>
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("platforms")}>
                    <Maximize size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={Object.keys(company.platformData).map(platform => ({
                        name: platform.charAt(0).toUpperCase() + platform.slice(1),
                        impressions: company.platformData[platform].impressions,
                        clicks: company.platformData[platform].clicks,
                        conversions: company.platformData[platform].conversions,
                        spend: company.platformData[platform].spend,
                        revenue: company.platformData[platform].revenue
                      })).filter(platform => platform.impressions > 0)}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clicks" fill="#0057FF" />
                      <Bar dataKey="conversions" fill="#00C2CB" />
                      <Bar dataKey="revenue" fill="#1B2138" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.keys(company.platformData).map(platform => 
                company.platformData[platform].impressions > 0 ? (
                  <Card key={platform}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle>{platform.charAt(0).toUpperCase() + platform.slice(1)}</CardTitle>
                        <span className={`platform-badge platform-badge-${platform}`}>
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-sm text-muted-foreground">Impressions</p>
                          <p className="font-medium">{formatNumber(company.platformData[platform].impressions)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Clicks</p>
                          <p className="font-medium">{formatNumber(company.platformData[platform].clicks)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Conversions</p>
                          <p className="font-medium">{formatNumber(company.platformData[platform].conversions)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Spend</p>
                          <p className="font-medium">${company.platformData[platform].spend.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Revenue</p>
                          <p className="font-medium">${company.platformData[platform].revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">ROAS</p>
                          <p className="font-medium">{company.platformData[platform].roas.toFixed(2)}x</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : null
              )}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card>
              <CardHeader className="py-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Campaign Performance</CardTitle>
                  <CardDescription>Metrics across active campaigns</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => toast({ title: "Download started", description: "Your campaign data is being prepared for download." })}>
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("campaigns")}>
                    <Maximize size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={company.campaignData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="clicks" fill="#0057FF" />
                      <Bar dataKey="conversions" fill="#00C2CB" />
                      <Bar dataKey="revenue" fill="#1B2138" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-medium p-3">Campaign</th>
                    <th className="text-left font-medium p-3">Platform</th>
                    <th className="text-right font-medium p-3">Impressions</th>
                    <th className="text-right font-medium p-3">Clicks</th>
                    <th className="text-right font-medium p-3">Conversions</th>
                    <th className="text-right font-medium p-3">Spend</th>
                    <th className="text-right font-medium p-3">Revenue</th>
                    <th className="text-right font-medium p-3">ROAS</th>
                    <th className="text-right font-medium p-3">CTR</th>
                    <th className="text-right font-medium p-3">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {company.campaignData.map((campaign: any, index: number) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3">{campaign.name}</td>
                      <td className="p-3">
                        <span className={`platform-badge platform-badge-${campaign.platform.toLowerCase()}`}>
                          {campaign.platform}
                        </span>
                      </td>
                      <td className="text-right p-3">{formatNumber(campaign.impressions)}</td>
                      <td className="text-right p-3">{formatNumber(campaign.clicks)}</td>
                      <td className="text-right p-3">{formatNumber(campaign.conversions)}</td>
                      <td className="text-right p-3">${campaign.spend.toLocaleString()}</td>
                      <td className="text-right p-3">${campaign.revenue.toLocaleString()}</td>
                      <td className="text-right p-3">{campaign.roas.toFixed(2)}x</td>
                      <td className="text-right p-3">{campaign.ctr.toFixed(2)}%</td>
                      <td className="text-right p-3">${campaign.cpc.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="py-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Revenue by Platform</CardTitle>
                    <CardDescription>Revenue distribution across platforms</CardDescription>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("revenue")}>
                    <Maximize size={18} />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={getRevenuePieChartData()}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {getRevenuePieChartData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Revenue Trends</CardTitle>
                    <CardDescription>Monthly revenue and spend</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={company.performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#0057FF" strokeWidth={2} />
                        <Line type="monotone" dataKey="spend" stroke="#00C2CB" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Metrics</CardTitle>
                <CardDescription>Key revenue and return on investment metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-sm text-muted-foreground">Total Revenue</h3>
                    <p className="text-2xl font-bold">${company.summary.revenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Total Spend</h3>
                    <p className="text-2xl font-bold">${company.summary.spend.toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Net Profit</h3>
                    <p className="text-2xl font-bold">${(company.summary.revenue - company.summary.spend).toLocaleString()}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Overall ROAS</h3>
                    <p className="text-2xl font-bold">{company.summary.roas.toFixed(2)}x</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Cost Per Conversion</h3>
                    <p className="text-2xl font-bold">${company.summary.cpa.toFixed(2)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Revenue Per Conversion</h3>
                    <p className="text-2xl font-bold">${(company.summary.revenue / company.summary.conversions).toFixed(2)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Profit Margin</h3>
                    <p className="text-2xl font-bold">{((company.summary.revenue - company.summary.spend) / company.summary.revenue * 100).toFixed(2)}%</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground">Cost per Click</h3>
                    <p className="text-2xl font-bold">${company.summary.cpc.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
