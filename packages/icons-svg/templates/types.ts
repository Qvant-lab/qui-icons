export interface AbstractNode {
  tag: string;
  attrs: Record<string, string>;
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon: AbstractNode;
}

export type ThemeType = 'filled' | 'outlined';
export type CapitalizedThemeType = Capitalize<ThemeType>;
