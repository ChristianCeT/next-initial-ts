import { ReactElement } from "react";
import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayout";

import type { NextPageWithLayout } from "./_app";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <p>Get started by editing</p>
      </div>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
