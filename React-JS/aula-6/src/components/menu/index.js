import { SearchOutlined } from "@ant-design/icons";
import { Menu as AntdMenu} from 'antd'
import { BtnRound } from "./styles";

 export function Menu()  {
    return (
      <AntdMenu mode="horizontal">
        <AntdMenu.Item key="home">
          Home
        </AntdMenu.Item>
        <AntdMenu.Item key="team">
          Equipe
        </AntdMenu.Item>
        <AntdMenu.Item key="aboutus">
          Sobre nós
        </AntdMenu.Item>
        <AntdMenu.Item key="contact">
          Contato
        </AntdMenu.Item>
        <AntdMenu.Item key="search">
        <BtnRound icon={<SearchOutlined />} />
        </AntdMenu.Item>
      </AntdMenu>
    )
}