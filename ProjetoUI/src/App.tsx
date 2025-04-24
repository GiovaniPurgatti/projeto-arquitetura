import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout, Switch } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import PaginaAlunos from './components/PaginaUsuarios/PaginaUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Content } = Layout;

const queryClient = new QueryClient();

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      checkedChildren={<BulbFilled />}
      unCheckedChildren={<BulbOutlined />}
      style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}
    />
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <ThemeSwitch />
          <Content style={{ padding: '24px' }}>
            <PaginaAlunos />
          </Content>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App; 