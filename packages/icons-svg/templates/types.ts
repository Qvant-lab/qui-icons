export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon: AbstractNode;
}

export type ThemeType = 'filled' | 'outlined';
export type ThemeTypeUpperCase = 'Filled' | 'Outlined';
