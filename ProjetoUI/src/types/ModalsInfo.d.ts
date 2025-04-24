declare type CreateModalProps = {
  password?: string,
  order_id?:number,
  visible: boolean,
  onClose: () => void,
  refetch: () => void,
  title?: string,
  okText?: string,
  cancelText?: string,
  message?: string,
  fields: {
    name: string,
    label: string,
    rules?: object[],
    value?: string,
    component?: React.ReactNode,
  }[],
  apiEndpoint?: string,
  onSubmit?: (values: any) => Promise<void>,
  initialValues?: any,
};

declare type UpdateModalProps = {
  visible: boolean,
  onClose: () => void,
  refetch: () => void,
  title?: string,
  okText?: string,
  cancelText?: string,
  fields: {
    name: string,
    label: string,
    rules?: object[],
    component?: React.ReactNode,
  }[],
  apiEndpoint?: string,
  message: string,
  initialValues?: any,
};

declare type DeleteModalProps = {
  visible: boolean,
  onClose: () => void,
  refetch: () => void,
  title?: string,
  okText?: string,
  cancelText?: string,
  apiEndpoint?: string,
  message: string,
  itemId: string,
};

declare type DetailsModalProps = {
  visible: boolean,
  onClose: () => void,
  title?: string,
  fields: {
    name: string,
    label: string,
    rules?: object[],
    component?: React.ReactNode,
  }[],
  initialValues: any,
};

