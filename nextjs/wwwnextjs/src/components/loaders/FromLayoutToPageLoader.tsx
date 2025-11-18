import { ContentPageTypeType, DataExtended, PageMenuItem } from "@/types/types";
import { SlugProvider } from "../providers/ProviderSlug";
import { ProviderData } from "../providers/ProviderData";
import { ProviderMenuLinks } from "../providers/ProviderMenuLinks";
import { PageTypeProvider } from "../providers/ProviderContentPageType";

type ex = {
  children: React.ReactNode;
};
export type FromLayoutToPageLoaderType = {
  slug: string;
  generalData: DataExtended;
  menu: PageMenuItem[];
  contentPageType: ContentPageTypeType;
};

export const FromLayoutToPageLoader = ({
  children,
  slug,
  generalData,
  menu,
  contentPageType,
}: ex & FromLayoutToPageLoaderType) => {
  return (
    <>
      <SlugProvider slug={slug}>
        <PageTypeProvider contentPageType={contentPageType}>
          <ProviderData pckg={generalData}>
            <ProviderMenuLinks initialLinks={menu}>
              {children}
            </ProviderMenuLinks>
          </ProviderData>
        </PageTypeProvider>
      </SlugProvider>
    </>
  );
};
