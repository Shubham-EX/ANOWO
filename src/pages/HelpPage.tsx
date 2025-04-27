import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  Settings, 
  Users, 
  Building, 
  PlusCircle,
  HelpCircle,
  BarChart3
} from "lucide-react";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground mt-2">
          Learn how to use the ANOWO Digital Marketing Analytics platform effectively.
        </p>
      </div>

      <Tabs defaultValue="charts">
        <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex">
          <TabsTrigger value="charts">Charts & Graphs</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="platform">Platform Integration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="charts" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-brand-purple" />
                Chart Types
              </CardTitle>
              <CardDescription>
                Understanding the different charts used in ANOWO Analytics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-brand-purple" />
                  <h3 className="font-semibold">Bar Charts</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  Bar charts display comparative data across different categories. In ANOWO, we use them to compare metrics like clicks, conversions, and revenue across different platforms or time periods.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-brand-teal" />
                  <h3 className="font-semibold">Line Charts</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  Line charts show trends over time. They're used to visualize how metrics like CTR, CPA, and spend change over days, weeks, or months, helping you identify patterns and trends.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-brand-darkpurple" />
                  <h3 className="font-semibold">Pie Charts</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  Pie charts show proportions of a whole. In ANOWO, they're used to visualize how metrics like spend or conversions are distributed across different platforms.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading Performance Metrics</CardTitle>
              <CardDescription>
                Understanding key performance indicators in your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">CTR (Click-Through Rate)</h3>
                  <p className="text-sm text-muted-foreground">
                    The percentage of impressions that resulted in a click. Higher is better, indicating your ads are relevant to the audience.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">CPA (Cost Per Acquisition)</h3>
                  <p className="text-sm text-muted-foreground">
                    The average cost to acquire one conversion. Lower is better, indicating efficient spend.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">ROAS (Return on Ad Spend)</h3>
                  <p className="text-sm text-muted-foreground">
                    For every dollar spent on ads, how many dollars in revenue were generated. Higher is better, indicating profitable campaigns.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">Conversion Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    The percentage of clicks that resulted in a conversion. Higher is better, indicating effective landing pages and offers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="features" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-brand-purple" />
                Key Features
              </CardTitle>
              <CardDescription>
                Overview of ANOWO Analytics core capabilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-brand-purple" />
                  <h3 className="font-semibold">Company Management</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  Add and manage multiple companies within your dashboard. Each company can have its own set of connected platforms and campaigns.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <PlusCircle className="h-5 w-5 text-brand-teal" />
                  <h3 className="font-semibold">Platform Integration</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  Connect multiple advertising platforms like Google Ads, Meta Ads, and more to centralize your marketing data in one dashboard.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-brand-darkpurple" />
                  <h3 className="font-semibold">Analytics Dashboard</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-7">
                  View comprehensive analytics across all your connected platforms, including performance metrics, trend analysis, and ROI calculations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigation & User Interface</CardTitle>
              <CardDescription>
                Understanding the ANOWO interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Sidebar Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Use the sidebar to navigate between different sections of the application, including Dashboard, Analytics, Company views, and Settings.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Company Selector</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between different companies by clicking on company cards on the dashboard or selecting from dropdown menus.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Theme Toggle</h3>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark mode using the toggle in the sidebar for your preferred viewing experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="platform" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connecting Ad Platforms</CardTitle>
              <CardDescription>
                How to integrate your advertising accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Google Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Connect your Google Ads account by navigating to the "Add Platform" page, selecting Google Ads, and following the authentication process. Make sure to select which company you want to connect this account to.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Meta Ads (Facebook/Instagram)</h3>
                <p className="text-sm text-muted-foreground">
                  Link your Meta Ads account by going to "Add Platform," selecting Meta Ads, and completing the OAuth flow. You'll need to have admin access to the ad accounts you wish to connect.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">LinkedIn Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Integrate LinkedIn Ads by navigating to "Add Platform," choosing LinkedIn, and authenticating with your LinkedIn credentials. Ensure you have the necessary permissions to access ad data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Platform Data</CardTitle>
              <CardDescription>
                Working with data from connected platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Data Sync Frequency</h3>
                <p className="text-sm text-muted-foreground">
                  Platform data is automatically synced every 24 hours. You can also manually trigger a sync from the platform settings page.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Historical Data</h3>
                <p className="text-sm text-muted-foreground">
                  When you first connect a platform, we import up to 90 days of historical data, depending on the platform's API limitations.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Data Discrepancies</h3>
                <p className="text-sm text-muted-foreground">
                  If you notice differences between ANOWO analytics and platform data, check the last sync time and consider timezone differences and attribution models.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
