export interface BookEntry {
  title: string;
  author: string;
  quote: string;
  content: string;
}

export interface BookMap {
  [key: string]: BookEntry;
}
