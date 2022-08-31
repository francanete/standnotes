type Tasks = {
  titleTask: string;
  descriptionTask: string;
};

export interface INotes {
  title: string;
  date: Date;
  description: number;
  tasks: Tasks[];
}
