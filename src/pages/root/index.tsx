import BodyLayoutFull from "@/components/layout/BodyLayoutFull";
import MainLayout from "@/components/layout/MainLayout";

const Root = (): React.ReactNode => {
  return (
    <MainLayout>
      <BodyLayoutFull>
        <h1>My React Component</h1>
      </BodyLayoutFull>
    </MainLayout>
  );
};

export default Root;
