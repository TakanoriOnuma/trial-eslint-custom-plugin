import type { Rule } from "eslint";

export const suffixIconImport: Rule.RuleModule = {
  meta: {
    type: "problem",
    fixable: "code",
  },
  create(context) {
    return {
      ImportDeclaration: (node) => {
        const importLabel = node.source.value;
        if (typeof importLabel !== "string") {
          return;
        }

        const expectImportLabel = "@mui/icons-material";
        if (!importLabel.startsWith(expectImportLabel)) {
          return;
        }
        // @mui/icons-material/ArrowLeft みたいなimportをしている場合
        if (importLabel !== expectImportLabel) {
          context.report({
            node,
            message: `ファイル指定によるimportは禁止しています。'@mui/icons-material'からimportしてください。`,
          });
          return;
        }

        for (const specifier of node.specifiers) {
          if (specifier.type !== "ImportSpecifier") {
            continue;
          }
          const localName = specifier.local.name;
          const importedName = specifier.imported.name;
          const expectedLocalName = `${importedName}Icon`;
          if (localName !== expectedLocalName && specifier.loc != null) {
            context.report({
              loc: specifier.loc,
              message: "~Iconという名前で使用してください",
              fix(fixer) {
                return fixer.replaceText(
                  specifier,
                  `${importedName} as ${expectedLocalName}`
                );
              },
            });
          }
        }
      },
    };
  },
};
