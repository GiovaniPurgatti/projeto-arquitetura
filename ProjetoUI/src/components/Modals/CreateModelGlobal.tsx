import React, { useEffect } from "react";
import { Modal, Form, Input } from "antd";
import axios from "axios";
import Notify from "../Notifys/Notify";
import { alunoServiceMongo, alunoServiceMysql } from "../../services/api";
import InputMask from "react-input-mask";

const CreateModalGlobal: React.FC<CreateModalProps> = ({
  visible,
  onClose,
  refetch,
  title = "Criar Registro",
  okText = "Cadastrar",
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

  const handleCreate = async () => {
    try {
      const values = await form.validateFields();

      await alunoServiceMysql.create(values);
      await alunoServiceMongo.create(values);
      Notify.open("success", `${successMessage} com sucesso!`);
      refetch();
      form.resetFields();
      onClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { response } = err;

        if (response?.status === 400 || response?.status === 422) {
          let errorMessages = "";

          if (Array.isArray(response.data?.errors)) {
            // Se `errors` for um array direto, acessamos corretamente
            errorMessages = response.data.errors
              .map((error: { message: string }) => error.message)
              .join(", ");
          } else if (Array.isArray(response.data?.errors?.errors)) {
            // Caso `errors` esteja aninhado dentro de `errors.errors`
            errorMessages = response.data.errors.errors
              .map((error: { message: string }) => error.message)
              .join(", ");
          } else {
            errorMessages = response.data?.message || "Erro desconhecido.";
          }

          Notify.open("error", errorMessages);
        } else {
          Notify.open("error", "Erro ao criar registro.");
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
      onOk={handleCreate}
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

export default CreateModalGlobal;
