import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#F5F5F5]">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
