import { Menu as AntdMenu} from 'antd'
import { Link } from 'react-router-dom'
import routes from '../../defaults/routes'

 export default function Menu ()  {
    return (
      <AntdMenu mode="horizontal">
        {
          routes.map (
            route => (
              <AntdMenu.Item key={route.key }>
                <Link to={route.path}>
                  {route.label}
                </Link>
              </AntdMenu.Item>
            )
          )
        }
      </AntdMenu>
    )
}