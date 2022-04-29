export interface DefinitionProp {
  type: string;
  description: string;
  items?: DefinitionProp;
}

export interface Definition {
  type: string;
  required: string[];
  properties: {
    [key: string]: DefinitionProp;
  };
  title: string;
}
