export type Tasks = {
  _id?: string;
  titleTask: string;
  descriptionTask: string;
};

export interface INotes {
  _id?: string;
  title: string;
  date: string;
  description: string;
  tasks?: Tasks[];
}
