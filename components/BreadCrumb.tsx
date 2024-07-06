import React from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextBreadCrumb: React.FC = (): JSX.Element => {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  let cumulativePath = "/";

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>
        <Link href="/">home</Link>
      </Breadcrumb.Item>
      {pathNames.map((path, index) => {
        
        cumulativePath += `${path}/`;
        const decodedPath = decodeURIComponent(path);
        const isLastItem = index === pathNames.length - 1;

        return (
          <Breadcrumb.Item key={cumulativePath}>
            {isLastItem ? (
              decodedPath
            ) : (
              <Link href={cumulativePath as __next_route_internal_types__.RouteImpl<string>}>
                {decodedPath}
              </Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default NextBreadCrumb;
