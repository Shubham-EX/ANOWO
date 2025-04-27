
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Info, Linkedin, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for companies - in a real app, this would come from an API
const companiesData = [
  { id: "1", name: "Acme Corporation" },
  { id: "2", name: "Globex Industries" },
  { id: "3", name: "Stark Enterprises" },
  { id: "4", name: "Wayne Industries" },
];

export default function AddPlatformPage() {
  const [activeTab, setActiveTab] = useState("google");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [companies, setCompanies] = useState(companiesData);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, fetch companies from API
    // For now, we use the mock data
  }, []);

  const handleConnectPlatform = () => {
    if (!selectedCompany) {
      toast({
        title: "Please select a company",
        description: "You need to select a company to connect this platform to.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate connection process
    setTimeout(() => {
      toast({
        title: "Platform connected",
        description: `Your ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Ads account has been successfully connected to ${companies.find(c => c.id === selectedCompany)?.name}.`,
      });
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Add Platform</h1>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Connect Ad Platform</CardTitle>
          <CardDescription>
            Link your advertising platforms to see all your data in one dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Label htmlFor="company-select" className="mb-2 block">Select Company</Label>
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger id="company-select">
                <SelectValue placeholder="Select a company" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="google" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Google Ads</span>
              </TabsTrigger>
              <TabsTrigger value="facebook" className="flex items-center gap-2">
                <Facebook className="h-4 w-4" />
                <span>Meta Ads</span>
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Ads</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="google" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="google-client-id">Client ID</Label>
                  <Input id="google-client-id" placeholder="Enter your Google Ads Client ID" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="google-client-secret">Client Secret</Label>
                  <Input id="google-client-secret" type="password" placeholder="Enter your Google Ads Client Secret" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="google-refresh-token">Refresh Token</Label>
                  <Input id="google-refresh-token" type="password" placeholder="Enter your Google Ads Refresh Token" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="google-developer-token">Developer Token</Label>
                  <Input id="google-developer-token" type="password" placeholder="Enter your Google Ads Developer Token" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="google-manager-id">Manager Account ID (Optional)</Label>
                  <Input id="google-manager-id" placeholder="Enter your Google Ads Manager Account ID" />
                </div>
              </div>
              <div className="flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-md">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  To find these credentials, you need to create a project in the Google Developers Console and set up OAuth for your Google Ads account.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="facebook" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="facebook-app-id">App ID</Label>
                  <Input id="facebook-app-id" placeholder="Enter your Meta App ID" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="facebook-app-secret">App Secret</Label>
                  <Input id="facebook-app-secret" type="password" placeholder="Enter your Meta App Secret" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="facebook-access-token">Access Token</Label>
                  <Input id="facebook-access-token" type="password" placeholder="Enter your Meta Marketing API Access Token" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="facebook-ad-account-id">Ad Account ID</Label>
                  <Input id="facebook-ad-account-id" placeholder="Enter your Meta Ad Account ID" />
                </div>
              </div>
              <div className="flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-md">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  To find these credentials, you need to create an app in the Meta for Developers portal and set up permissions for the Marketing API.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="linkedin" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="linkedin-client-id">Client ID</Label>
                  <Input id="linkedin-client-id" placeholder="Enter your LinkedIn Client ID" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="linkedin-client-secret">Client Secret</Label>
                  <Input id="linkedin-client-secret" type="password" placeholder="Enter your LinkedIn Client Secret" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="linkedin-access-token">Access Token</Label>
                  <Input id="linkedin-access-token" type="password" placeholder="Enter your LinkedIn Access Token" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="linkedin-account-id">Account ID</Label>
                  <Input id="linkedin-account-id" placeholder="Enter your LinkedIn Ad Account ID" />
                </div>
              </div>
              <div className="flex items-start gap-2 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-md">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  To find these credentials, you need to create an app in the LinkedIn Developer portal and set up permissions for the Marketing API.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Cancel
          </Button>
          <Button onClick={handleConnectPlatform} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                Connecting...
              </>
            ) : (
              "Connect Platform"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>About Connecting Platforms</CardTitle>
          <CardDescription>
            How AdBoard Analytics works with advertising platforms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Secure Authentication</h3>
            <p className="text-sm text-muted-foreground">
              All your API keys and tokens are encrypted and stored securely. We use OAuth 2.0 for authentication whenever possible.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Data Refresh</h3>
            <p className="text-sm text-muted-foreground">
              Once connected, AdBoard Analytics will automatically refresh your data every 24 hours. You can also trigger a manual refresh at any time.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Data Access</h3>
            <p className="text-sm text-muted-foreground">
              AdBoard Analytics only requests read-only access to your advertising data. We never make changes to your campaigns or ad accounts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
