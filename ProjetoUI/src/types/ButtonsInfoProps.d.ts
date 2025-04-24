declare type GenericButtonProps =  {
    onClick: () => void;
    title: string;
    icon: React.ReactNode;
    label?: string;
    style?: React.CSSProperties;
  }