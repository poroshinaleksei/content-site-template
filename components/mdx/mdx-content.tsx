import { MDXRemote } from "next-mdx-remote/rsc";

import { mdxComponents } from "./mdx-components";

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
