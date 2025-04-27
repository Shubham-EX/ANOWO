
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  ChevronLeft,
  Home,
  LogOut,
  Menu,
  Moon,
  PlusCircle,
  Settings,
  Sun,
  HelpCircle,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of ANOWO Analytics.",
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed ? (
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/558d107c-e093-46e6-8779-b8feb0f0edbe.png" 
                alt="ANOWO Logo" 
                className="h-8 w-8 mr-2" 
              />
              <div className="font-bold text-lg text-primary">ANOWO</div>
            </div>
          ) : (
            <img 
              src="/lovable-uploads/558d107c-e093-46e6-8779-b8feb0f0edbe.png" 
              alt="ANOWO Logo" 
              className="h-8 w-8" 
            />
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-full"
          >
            {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        {!collapsed && (
          <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="overflow-hidden">
              <p className="font-medium truncate">{user?.name}</p>
              <p className="text-xs text-sidebar-foreground/70 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        )}

        <nav className="flex-1 p-2 space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <Home size={20} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <BarChart3 size={20} />
            {!collapsed && <span>Analytics</span>}
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <Settings size={20} />
            {!collapsed && <span>Settings</span>}
          </NavLink>

          <NavLink
            to="/platforms/add"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <PlusCircle size={20} />
            {!collapsed && <span>Add Platform</span>}
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <HelpCircle size={20} />
            {!collapsed && <span>Help</span>}
          </NavLink>
        </nav>

        <div className="p-2 border-t border-sidebar-border space-y-1">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors hover:bg-sidebar-accent/50 w-full ${
              collapsed ? "justify-center" : ""
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            {!collapsed && (
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            )}
          </button>

          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-red-500 hover:bg-red-500/10 w-full ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <LogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
