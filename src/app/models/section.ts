import { AppImage } from 'src/app/models/gallery';

export interface Action {
  text: string,
  url: string
}

export interface Component {
  title: string,
  body: (string | string[])[],
  link: string,
  type: string,
  action: string
}

export interface ImagedSection {
  title: string,
  subtitle: string,
  images: AppImage[],
  action: Action
}

export interface ComponentSection extends ImagedSection {
  components: Component[]
}

export type Section = ComponentSection;

export type Sections = Section[];