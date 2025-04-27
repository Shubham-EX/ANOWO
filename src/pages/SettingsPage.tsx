import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Search, Facebook, Linkedin } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("account");
  
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [performanceAlerts, setPerformanceAlerts] = useState(false);

  const handleSaveAccount = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account updated",
        description: "Your account settings have been updated successfully."
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSaveNotifications = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Notification preferences updated",
        description: "Your notification preferences have been updated successfully."
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    toast({
      title: "Request received",
      description: "We've received your account deletion request. Our team will contact you shortly.",
      variant: "destructive"
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-primary">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{user?.name}</h3>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
                <Button variant="outline" size="sm">
                  Change Avatar
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user?.email} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="Marketing Agency" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Marketing Manager" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSaveAccount} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Update your password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Permanently delete your account and all associated data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Once you delete your account, there is no going back. All information associated with your account will be permanently deleted.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive" onClick={handleDeleteAccount}>
                Delete Account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>
                Manage your email notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">All Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable or disable all email notifications
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Weekly Performance Reports</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive weekly performance reports for all connected platforms
                  </p>
                </div>
                <Switch
                  checked={weeklyReports}
                  onCheckedChange={setWeeklyReports}
                  disabled={!emailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Performance Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when there are significant changes in your metrics
                  </p>
                </div>
                <Switch
                  checked={performanceAlerts}
                  onCheckedChange={setPerformanceAlerts}
                  disabled={!emailNotifications}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveNotifications} disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Preferences"}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-App Notifications</CardTitle>
              <CardDescription>
                Manage your in-app notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Campaign Performance Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications when campaign performance changes significantly
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Platform Connection Status</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified about platform connection issues
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">New Features & Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with new features and platform updates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
              <CardDescription>
                Customize the appearance of the dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="border-2 border-primary rounded-md overflow-hidden cursor-pointer">
                    <div className="bg-white dark:bg-slate-950 w-full h-24 p-4">
                      <div className="bg-blue-500 w-1/2 h-4 rounded"></div>
                      <div className="bg-gray-200 dark:bg-gray-800 w-3/4 h-3 mt-2 rounded"></div>
                      <div className="bg-gray-200 dark:bg-gray-800 w-1/2 h-3 mt-2 rounded"></div>
                    </div>
                  </div>
                  <Label className="text-sm">System Default</Label>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="border-2 border-muted rounded-md overflow-hidden cursor-pointer">
                    <div className="bg-white w-full h-24 p-4">
                      <div className="bg-blue-500 w-1/2 h-4 rounded"></div>
                      <div className="bg-gray-200 w-3/4 h-3 mt-2 rounded"></div>
                      <div className="bg-gray-200 w-1/2 h-3 mt-2 rounded"></div>
                    </div>
                  </div>
                  <Label className="text-sm">Light Mode</Label>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="border-2 border-muted rounded-md overflow-hidden cursor-pointer">
                    <div className="bg-slate-950 w-full h-24 p-4">
                      <div className="bg-blue-500 w-1/2 h-4 rounded"></div>
                      <div className="bg-gray-800 w-3/4 h-3 mt-2 rounded"></div>
                      <div className="bg-gray-800 w-1/2 h-3 mt-2 rounded"></div>
                    </div>
                  </div>
                  <Label className="text-sm">Dark Mode</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chart Preferences</CardTitle>
              <CardDescription>
                Set your default chart display options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Show Sparklines</Label>
                  <p className="text-sm text-muted-foreground">
                    Display small trend lines in dashboard cards
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Simplified Charts</Label>
                  <p className="text-sm text-muted-foreground">
                    Show simplified versions of charts for better performance
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Show Data Labels</Label>
                  <p className="text-sm text-muted-foreground">
                    Display value labels directly on charts
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>
                Manage API keys for integrating with other tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-base">API Key</Label>
                <div className="flex">
                  <Input value="••••••••••••••••••••••••••••••" readOnly className="rounded-r-none" />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Copy
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use this API key to integrate AdBoard Analytics with your other tools
                </p>
              </div>
              <div className="pt-4">
                <Button variant="outline">Regenerate API Key</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Platforms</CardTitle>
              <CardDescription>
                Manage your connections to advertising platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">Google Ads</p>
                    <p className="text-sm text-muted-foreground">Connected on Apr 2, 2025</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-3">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Meta Ads</p>
                    <p className="text-sm text-muted-foreground">Connected on Apr 2, 2025</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Disconnect</Button>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                  <div>
                    <p className="font-medium">LinkedIn Ads</p>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Add New Platform</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
