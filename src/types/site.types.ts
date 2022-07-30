import { ReactNode } from 'react';

export interface ISiteMeta {
  title: string;
  url: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export interface ISiteMetaProps {
  children?: ReactNode;
  meta: ISiteMeta;
}

export interface IHaveChildren {
  children: ReactNode;
}
