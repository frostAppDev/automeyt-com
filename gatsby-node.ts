import type { GatsbyNode } from "gatsby";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `.json`],
    },
  });
};
