
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  BarChart, 
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { ChevronLeft, Download, Maximize } from "lucide-react";

// Mock data
const performanceData = [
  { name: "Jan", impressions: 550000, clicks: 24500, conversions: 1070, spend: 4200, ctr: 4.45, cpc: 0.17 },
  { name: "Feb", impressions: 565000, clicks: 25200, conversions: 1115, spend: 4350, ctr: 4.46, cpc: 0.17 },
  { name: "Mar", impressions: 580000, clicks: 25800, conversions: 1145, spend: 4450, ctr: 4.45, cpc: 0.17 },
  { name: "Apr", impressions: 575000, clicks: 25500, conversions: 1130, spend: 4400, ctr: 4.43, cpc: 0.17 },
  { name: "May", impressions: 595000, clicks: 26400, conversions: 1175, spend: 4550, ctr: 4.44, cpc: 0.17 },
  { name: "Jun", impressions: 610000, clicks: 27100, conversions: 1205, spend: 4650, ctr: 4.44, cpc: 0.17 },
  { name: "Jul", impressions: 625000, clicks: 27800, conversions: 1235, spend: 4750, ctr: 4.45, cpc: 0.17 },
];

const platformData = [
  { name: "Google", value: 14560.23, percent: 55 },
  { name: "Facebook", value: 7500, percent: 28 },
  { name: "LinkedIn", value: 3000, percent: 12 },
  { name: "Other", value: 1200, percent: 5 },
];

const COLORS = ["#0057FF", "#00C2CB", "#1B2138", "#F5F9FF"];

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [fullscreenChart, setFullscreenChart] = useState<string | null>(null);
  const { toast } = useToast();

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

  const renderFullscreenChart = () => {
    if (!fullscreenChart) return null;

    let chartContent;

    switch (fullscreenChart) {
      case "performance":
        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#8884d8" />
              <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#82ca9d" />
              <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        );
        break;
      case "spending":
        chartContent = (
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
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
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="spending">Spending</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Impressions</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">4.1M</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Clicks</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">182.3K</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Conversions</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">8.1K</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Spend</CardTitle>
                </CardHeader>
                <CardContent className="py-0">
                  <p className="text-2xl font-bold">$31,350</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="py-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>All Platforms Performance</CardTitle>
                  <CardDescription>Monthly performance across all platforms</CardDescription>
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
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="clicks" stroke="#0057FF" />
                      <Line type="monotone" dataKey="conversions" stroke="#00C2CB" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="py-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Spending Distribution</CardTitle>
                    <CardDescription>Budget allocation across platforms</CardDescription>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("spending")}>
                    <Maximize size={18} />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={platformData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {platformData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="py-4">
                  <CardTitle>Platform Performance</CardTitle>
                  <CardDescription>Key metrics by platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: "Google", clicks: 120000, conversions: 5200 },
                          { name: "Facebook", clicks: 45000, conversions: 2100 },
                          { name: "LinkedIn", clicks: 15000, conversions: 750 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="clicks" fill="#0057FF" />
                        <Bar dataKey="conversions" fill="#00C2CB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
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
                    <LineChart data={performanceData}>
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
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-medium p-3">Month</th>
                    <th className="text-right font-medium p-3">Impressions</th>
                    <th className="text-right font-medium p-3">Clicks</th>
                    <th className="text-right font-medium p-3">Conversions</th>
                    <th className="text-right font-medium p-3">Spend</th>
                    <th className="text-right font-medium p-3">CTR</th>
                    <th className="text-right font-medium p-3">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((month, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3">{month.name}</td>
                      <td className="text-right p-3">{formatNumber(month.impressions)}</td>
                      <td className="text-right p-3">{formatNumber(month.clicks)}</td>
                      <td className="text-right p-3">{formatNumber(month.conversions)}</td>
                      <td className="text-right p-3">${month.spend.toLocaleString()}</td>
                      <td className="text-right p-3">{month.ctr.toFixed(2)}%</td>
                      <td className="text-right p-3">${month.cpc.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="spending" className="space-y-6">
            <Card>
              <CardHeader className="py-4 flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Spending Analysis</CardTitle>
                  <CardDescription>Budget allocation across platforms</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => toast({ title: "Download started", description: "Your spending data is being prepared for download." })}>
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => handleFullscreenChart("spending")}>
                    <Maximize size={18} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={160}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left font-medium p-3">Platform</th>
                    <th className="text-right font-medium p-3">Spend</th>
                    <th className="text-right font-medium p-3">Percentage</th>
                    <th className="text-right font-medium p-3">Clicks</th>
                    <th className="text-right font-medium p-3">Conversions</th>
                    <th className="text-right font-medium p-3">Cost per Click</th>
                    <th className="text-right font-medium p-3">Cost per Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <span className="platform-badge platform-badge-google">Google</span>
                    </td>
                    <td className="text-right p-3">$14,560.23</td>
                    <td className="text-right p-3">55%</td>
                    <td className="text-right p-3">120.0K</td>
                    <td className="text-right p-3">5.2K</td>
                    <td className="text-right p-3">$0.12</td>
                    <td className="text-right p-3">$2.80</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <span className="platform-badge platform-badge-facebook">Facebook</span>
                    </td>
                    <td className="text-right p-3">$7,500.00</td>
                    <td className="text-right p-3">28%</td>
                    <td className="text-right p-3">45.0K</td>
                    <td className="text-right p-3">2.1K</td>
                    <td className="text-right p-3">$0.17</td>
                    <td className="text-right p-3">$3.57</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <span className="platform-badge platform-badge-linkedin">LinkedIn</span>
                    </td>
                    <td className="text-right p-3">$3,000.00</td>
                    <td className="text-right p-3">12%</td>
                    <td className="text-right p-3">15.0K</td>
                    <td className="text-right p-3">750</td>
                    <td className="text-right p-3">$0.20</td>
                    <td className="text-right p-3">$4.00</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">Other</td>
                    <td className="text-right p-3">$1,200.00</td>
                    <td className="text-right p-3">5%</td>
                    <td className="text-right p-3">4.3K</td>
                    <td className="text-right p-3">110</td>
                    <td className="text-right p-3">$0.28</td>
                    <td className="text-right p-3">$10.91</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-muted/30">
                    <td className="p-3 font-medium">Total</td>
                    <td className="text-right p-3 font-medium">$26,260.23</td>
                    <td className="text-right p-3 font-medium">100%</td>
                    <td className="text-right p-3 font-medium">184.3K</td>
                    <td className="text-right p-3 font-medium">8.2K</td>
                    <td className="text-right p-3 font-medium">$0.14</td>
                    <td className="text-right p-3 font-medium">$3.21</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
