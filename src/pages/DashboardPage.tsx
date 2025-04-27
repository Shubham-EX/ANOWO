import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Area, AreaChart } from "recharts";
import { AddCompanyDialog } from "@/components/AddCompanyDialog";

// Mock data for companies
const companiesData = [
  {
    id: "1",
    name: "Tech Mahindra",
    industry: "Technology",
    platforms: ["google", "facebook", "linkedin"],
    stats: {
      impressions: 1243567,
      clicks: 52341,
      conversions: 2134,
      spend: 8750.45,
    },
    chartData: [
      { name: "Jan", value: 4000 },
      { name: "Feb", value: 3000 },
      { name: "Mar", value: 5000 },
      { name: "Apr", value: 4000 },
      { name: "May", value: 7000 },
      { name: "Jun", value: 6000 },
      { name: "Jul", value: 8000 },
    ],
  },
  {
    id: "2",
    name: "EditX",
    industry: "Technology",
    platforms: ["instagram" ],
    stats: {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      spend: 0,
    },
    chartData: [
      { name: "Jan", value: 0 },
      { name: "Feb", value: 0 },
      { name: "Mar", value: 0 },
      { name: "Apr", value: 0 },
      { name: "May", value: 0 },
      { name: "Jun", value: 0 },
      { name: "Jul", value: 0 },
    ],
  }
];

export default function DashboardPage() {
  const [companies, setCompanies] = useState(companiesData);
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  const filteredCompanies =
    selectedIndustry === "all"
      ? companies
      : companies.filter((company) => company.industry === selectedIndustry);

  const industries = [
    "all",
    ...Array.from(new Set(companies.map((company) => company.industry))),
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const handleCompanyClick = (companyId: string) => {
    navigate(`/company/${companyId}`);
  };

  const handleAddCompany = (newCompany: { name: string; industry: string }) => {
    // Generate a unique ID (in a real app, this would come from the backend)
    const newId = (Math.max(...companies.map(c => Number(c.id))) + 1).toString();
    
    // Create a new company object with default values
    const companyToAdd = {
      id: newId,
      name: newCompany.name,
      industry: newCompany.industry,
      platforms: [],
      stats: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
        spend: 0,
      },
      chartData: [
        { name: "Jan", value: 0 },
        { name: "Feb", value: 0 },
        { name: "Mar", value: 0 },
        { name: "Apr", value: 0 },
        { name: "May", value: 0 },
        { name: "Jun", value: 0 },
        { name: "Jul", value: 0 },
      ],
    };
    
    // Add the new company to the state
    setCompanies([...companies, companyToAdd]);
    
    // Show success toast
    toast({
      title: "Company Added",
      description: `${newCompany.name} has been added successfully.`,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-brand-darkpurple">Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList className="border border-brand-purple/20">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry}
                  value={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className="data-[state=active]:bg-brand-purple/10 data-[state=active]:text-brand-darkpurple"
                >
                  {industry.charAt(0).toUpperCase() + industry.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <AddCompanyDialog onAddCompany={handleAddCompany} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <Card
              key={company.id}
              className="dashboard-card cursor-pointer overflow-hidden border-border hover:border-brand-purple/30 transition-all duration-300"
              onClick={() => handleCompanyClick(company.id)}
            >
              <CardHeader className="pb-2 border-b border-border/20">
                <CardTitle className="text-lg text-brand-darkpurple">{company.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{company.industry}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {company.platforms.map((platform) => (
                    <span
                      key={platform}
                      className={`platform-badge platform-badge-${platform}`}
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pb-4 pt-3">
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="p-1.5 rounded-md bg-muted/20">
                    <p className="text-muted-foreground text-xs">Impressions</p>
                    <p className="font-medium text-brand-darkpurple">
                      {formatNumber(company.stats.impressions)}
                    </p>
                  </div>
                  <div className="p-1.5 rounded-md bg-muted/20">
                    <p className="text-muted-foreground text-xs">Clicks</p>
                    <p className="font-medium text-brand-teal">
                      {formatNumber(company.stats.clicks)}
                    </p>
                  </div>
                  <div className="p-1.5 rounded-md bg-muted/20">
                    <p className="text-muted-foreground text-xs">Conversions</p>
                    <p className="font-medium text-brand-purple">
                      {formatNumber(company.stats.conversions)}
                    </p>
                  </div>
                  <div className="p-1.5 rounded-md bg-muted/20">
                    <p className="text-muted-foreground text-xs">Spend</p>
                    <p className="font-medium text-brand-darkpurple">
                      ${company.stats.spend.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="h-[60px] w-full">
                  <AreaChart
                    width={240}
                    height={60}
                    data={company.chartData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id={`color${company.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7E69AB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="value"
                      stroke="#7E69AB"
                      fillOpacity={1}
                      fill={`url(#color${company.id})`}
                    />
                  </AreaChart>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12 bg-muted/10 rounded-lg border border-dashed">
            <p className="text-muted-foreground mb-2">No companies found in this category.</p>
            <AddCompanyDialog onAddCompany={handleAddCompany} />
          </div>
        )}
      </div>
    </div>
  );
}
