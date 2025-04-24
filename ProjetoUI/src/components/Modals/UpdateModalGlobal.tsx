import React, { useEffect } from "react";
import { Modal, Form, Input} from "antd";
import axios from "axios";
import Notify from "../Notifys/Notify";
import { alunoServiceMongo, alunoServiceMysql } from "../../services/api";
import InputMask from "react-input-mask";

const UpdateModalGlobal: React.FC<UpdateModalProps> = ({
  visible,
  onClose,
  refetch,
  title = "Atualizar Registro",
  okText = "Atualizar",
  cancelText = "Cancelar",
  fields,
  message: successMessage,
  initialValues,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [visible]);

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();

      await alunoServiceMysql.update(initialValues.id, values)
      await alunoServiceMongo.update(initialValues.id, values)
      Notify.open("success", `${successMessage} com sucesso!`);
      refetch();
      form.resetFields();
      onClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;
        if (response?.status === 400 && response.data?.message) {
          Notify.open("error", response.data.message);
        } else if (response && response.status === 422) {
          if (response.data && response.data.errors) {
            const errorMessages = response.data.errors
              .map((error: { message: string }) => error.message)
              .join(", ");
            Notify.open("error", `${errorMessages}`);
          } else {
            Notify.open(
              "error",
              "Erro ao processar a validação do formulário."
            );
          }
        } else {
          Notify.open("error", "Erro ao atualizar registro.");
        }
      } else {
        Notify.open("error", "Por favor, preencha o formulário corretamente!");
      }
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={title}
      open={visible}
      onOk={handleUpdate}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Form form={form} layout="vertical">
        {fields.map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            {field.name === "telefone" ? (
            <InputMask mask="(99) 99999-9999" maskChar={"_"}>
              {(inputProps) => <Input {...inputProps} />}
            </InputMask>
            ) :
            field.component ? field.component : <Input />}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
};

export default UpdateModalGlobal;
