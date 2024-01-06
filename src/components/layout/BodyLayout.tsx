export const BodyLayoutFull = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      {children}
    </div>
  );
};
