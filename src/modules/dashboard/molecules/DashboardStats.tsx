import {
  BarChart3,
  Home,
  Users,
  DollarSign,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Static data for demonstration
const statsData = {
  totalListings: 124,
  activeListings: 98,
  pendingListings: 12,
  draftListings: 14,
  totalInquiries: 342,
  newInquiriesThisWeek: 28,
  averageResponseTime: "2.4 hours",
  totalRevenue: "$48,294",
  revenueChange: 12.5,
  occupancyRate: 78,
  occupancyChange: -3.2,
  popularListings: [
    {
      id: "list-1",
      title: "Luxury Beachfront Villa",
      views: 1245,
      inquiries: 32,
    },
    {
      id: "list-2",
      title: "Downtown Modern Apartment",
      views: 987,
      inquiries: 24,
    },
    {
      id: "list-3",
      title: "Mountain Retreat Cabin",
      views: 876,
      inquiries: 18,
    },
  ],
  recentActivity: [
    {
      id: "act-1",
      type: "inquiry",
      listing: "Luxury Beachfront Villa",
      time: "2 hours ago",
      user: "john.doe@example.com",
    },
    {
      id: "act-2",
      type: "booking",
      listing: "Downtown Modern Apartment",
      time: "5 hours ago",
      user: "sarah.smith@example.com",
    },
    {
      id: "act-3",
      type: "review",
      listing: "Mountain Retreat Cabin",
      time: "1 day ago",
      user: "mike.johnson@example.com",
      rating: 4.5,
    },
    {
      id: "act-4",
      type: "inquiry",
      listing: "Seaside Cottage",
      time: "1 day ago",
      user: "emma.wilson@example.com",
    },
  ],
};

// Monthly revenue data for chart
const monthlyData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 3800 },
  { month: "Mar", revenue: 4100 },
  { month: "Apr", revenue: 4600 },
  { month: "May", revenue: 5200 },
  { month: "Jun", revenue: 5800 },
  { month: "Jul", revenue: 6100 },
  { month: "Aug", revenue: 5900 },
  { month: "Sep", revenue: 5400 },
  { month: "Oct", revenue: 4800 },
  { month: "Nov", revenue: 4200 },
  { month: "Dec", revenue: 3900 },
];

export function DashboardStats() {
  // Calculate max revenue for chart scaling
  const maxRevenue = Math.max(...monthlyData.map((item) => item.revenue));

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Listings
              </CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsData.totalListings}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="flex items-center text-emerald-500 font-medium">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  {statsData.activeListings} active
                </span>
                <span className="mx-2">•</span>
                <span>{statsData.pendingListings} pending</span>
                <span className="mx-2">•</span>
                <span>{statsData.draftListings} draft</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inquiries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsData.totalInquiries}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="flex items-center text-emerald-500 font-medium">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  {statsData.newInquiriesThisWeek} new this week
                </span>
                <span className="mx-2">•</span>
                <span>Avg. response: {statsData.averageResponseTime}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsData.totalRevenue}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span
                  className={`flex items-center font-medium ${
                    statsData.revenueChange >= 0
                      ? "text-emerald-500"
                      : "text-rose-500"
                  }`}
                >
                  {statsData.revenueChange >= 0 ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(statsData.revenueChange)}% from last month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Occupancy Rate
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsData.occupancyRate}%
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span
                  className={`flex items-center font-medium ${
                    statsData.occupancyChange >= 0
                      ? "text-emerald-500"
                      : "text-rose-500"
                  }`}
                >
                  {statsData.occupancyChange >= 0 ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(statsData.occupancyChange)}% from last month
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>
                Monthly revenue for the current year
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[200px] flex items-end gap-2">
                {monthlyData.map((month) => (
                  <div
                    key={month.month}
                    className="relative flex flex-col items-center"
                  >
                    <div
                      className="w-12 bg-primary/10 rounded-t-md hover:bg-primary/20 transition-colors"
                      style={{
                        height: `${(month.revenue / maxRevenue) * 170}px`,
                      }}
                    >
                      <div
                        className="absolute bottom-0 w-12 bg-primary rounded-t-md transition-all duration-500"
                        style={{
                          height: `${(month.revenue / maxRevenue) * 170}px`,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground">
                      {month.month}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions on your listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statsData.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 text-sm"
                  >
                    <div
                      className={`mt-0.5 rounded-full p-1.5 ${
                        activity.type === "inquiry"
                          ? "bg-blue-100 text-blue-600"
                          : activity.type === "booking"
                          ? "bg-green-100 text-green-600"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {activity.type === "inquiry" ? (
                        <Users className="h-3 w-3" />
                      ) : activity.type === "booking" ? (
                        <Calendar className="h-3 w-3" />
                      ) : (
                        <BarChart3 className="h-3 w-3" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium leading-none">
                        {activity.type === "inquiry"
                          ? "New inquiry"
                          : activity.type === "booking"
                          ? "New booking"
                          : `New ${activity.rating}★ review`}
                      </p>
                      <p className="text-muted-foreground">
                        {activity.listing}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{activity.time}</span>
                        <span className="mx-2">•</span>
                        <span>{activity.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent
        value="analytics"
        className="h-[400px] flex items-center justify-center text-muted-foreground"
      >
        Analytics content would appear here
      </TabsContent>

      <TabsContent
        value="reports"
        className="h-[400px] flex items-center justify-center text-muted-foreground"
      >
        Reports content would appear here
      </TabsContent>
    </Tabs>
  );
}
