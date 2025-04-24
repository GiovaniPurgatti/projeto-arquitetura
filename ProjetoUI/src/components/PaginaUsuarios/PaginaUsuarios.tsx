import { Table } from "antd";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import TabelaAlunos from "./TabelaUsuarios";
import CreateModalGlobal from "../Modals/CreateModelGlobal";
import Loading from "../Loading/Loading";
import GenericButton from "../Botoes/BotãoNovoRegistro";
import { alunoServiceMongo } from "../../services/api";

const PaginaAlunos: React.FC = () => {

  const [isNewAlunoModalVisible, setIsNewAlunoModalVisible] = useState(false);

  const handleNewAluno = () => {
    setIsNewAlunoModalVisible(true);
  };

  const {
    data: alunosData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['alunos'],
    queryFn: alunoServiceMongo.getAll,
  });


  if (isLoading) {
    return <Loading />;
  }

  if (error instanceof Error) {
    return <p>Erro: {error.message}</p>;
  }


  const columns = TabelaAlunos();

  return (
    <div>
      <div
        style={{
          display: "flex", // Define o contêiner flexível
          flexWrap: "wrap", // Permite que os itens quebrem linha quando necessário
          justifyContent: "flex-end", // Alinha os itens ao final do contêiner
          gap: "12px", // Adiciona espaçamento consistente entre os itens
          paddingInlineEnd: "10px",
          marginBottom: "12px",
        }}
      >
        <p style={{ fontSize: "30px", width: "100%", marginBottom: "12px" }}>
          Gerenciamento de Usuarios
        </p>
        
        <GenericButton
          onClick={handleNewAluno}
          title="Cadastrar novo Aluno"
          icon={<PlusCircleOutlined style={{ fontSize: "20px" }} />}
          label="Cadastrar novo"

        />
      </div>
      <Table<Usuario>
        columns={columns}
        dataSource={alunosData}
        loading={isLoading}
        rowKey="id"
      />

      <CreateModalGlobal
        visible={isNewAlunoModalVisible}
        onClose={() => setIsNewAlunoModalVisible(false)}
        refetch={refetch}
        title="Cadastrar Aluno"
        message="Aluno cadastrado"
        fields={[
          {
            name: "nome",
            label: "Nome",
            rules: [
              { required: true, message: 'Por favor, insira o nome do aluno' },
              { min: 3, message: 'O nome deve ter pelo menos 3 caracteres' }
            ]
          },
          {
            name: "telefone",
            label: "Telefone",
            rules: [
              { required: true, message: 'Por favor, insira o telefone do aluno' },
            ]
          },
        ]}
      />
    </div>
  );
};

export default PaginaAlunos;
