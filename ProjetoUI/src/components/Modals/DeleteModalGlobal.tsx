import React from "react";
import { Modal } from "antd";
import axios from "axios";
import Notify from "../Notifys/Notify";
import { alunoServiceMongo, alunoServiceMysql } from "../../services/api";

const DeleteModalGlobal: React.FC<DeleteModalProps> = ({
  visible,
  onClose,
  refetch,
  title = "Excluir Registro",
  okText = "Excluir",
  cancelText = "Cancelar",
  message,
  itemId,
}) => {
  const handleDelete = async () => {
    try {

      await alunoServiceMongo.delete(itemId); 
      await alunoServiceMysql.delete(itemId); 
      console.log("Exclusão no MySQL bem-sucedida");
  
      
      console.log("Exclusão no MongoDB bem-sucedida");
      Notify.open("success", `${message} com sucesso!`);
      refetch();
      onClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 400) {
          Notify.open(
            "error",
            "Não é possível excluir o registro porque ele está em uso."
          );
        } else {
          Notify.open("error", "Erro ao excluir o registro.");
        }
      } else {
        Notify.open("error", "Erro ao processar a exclusão.");
      }
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title={title}
      open={visible}
      onOk={handleDelete}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <p>Tem certeza que deseja excluir este registro?</p>
    </Modal>
  );
};

export default DeleteModalGlobal;
