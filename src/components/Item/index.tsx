import { ItemWrapper } from './styled';

type ItemProps = {
  children: React.ReactNode;
};

export const Item = ({ children }: ItemProps) => {
  return <ItemWrapper>{children}</ItemWrapper>;
};
