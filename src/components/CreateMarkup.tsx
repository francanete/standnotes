import DOMPurify from "dompurify";

interface ICreateMarkup {
  content: string;
  className?: string;
}

const createMarkup = (html: string) => {
  return {
    __html: DOMPurify.sanitize(html),
  };
};

export const CreateMarkup = ({ content, className }: ICreateMarkup) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  );
};
