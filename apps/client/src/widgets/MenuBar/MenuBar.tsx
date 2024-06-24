import { Layout } from '@consta/uikit/Layout';
import { CollapseGroup } from '@consta/uikit/CollapseGroup';
import { BlockSeparator } from 'features/BlockSeparator';
import styles from "./MenuBar.module.scss";

const items = [
  {
    label: 'Проекты и группы',
    content: 'Пусто',
  },
  {
    label: 'Задачи',
    content: 'Пусто',
  },
  {
    label: 'Почта',
    content: 'Пусто',
  },
  {
    label: 'Файлы',
    content: 'Пусто',
  },
  {
    label: 'Финансы',
    content: 'Пусто',
  },
  {
    label: 'Настройки',
    content: 'Пусто',
  },
]

export const MenuBar = () => {
	return(<Layout className={styles['menu-bar']}>
		<CollapseGroup divider view='primary' isAccordion items={items} className={styles['menu-bar__list']}/>
		<BlockSeparator />
	</Layout>)
}