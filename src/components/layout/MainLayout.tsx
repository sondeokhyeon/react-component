import Navigation from "@/components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full">
      <Navigation />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
