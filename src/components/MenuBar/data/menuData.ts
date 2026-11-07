import type {Menu} from "../model/MenuBar.types.ts";
export const menus: Menu[] = [
    {
        id: 'file',
        title: 'Файл',
        items: [
            { id: 'file-new', label: 'Создать' },
            { id: 'file-open', label: 'Открыть'},
            { id: 'file-save', label: 'Сохранить'},
        ],
    },
    {

        id: 'editor',
        title: 'Редактировать',
        items: [
            { id: 'editor-back', label: 'Отменить'},
            { id: 'editor-cut', label: 'Вырезать'},
            { id: 'editor-copy', label: 'Скопировать' },
        ],
    },
    {
        id: 'about',
        title: 'Справка',
        items: [

            { id: 'about-docs', label: 'Документация'},
            { id: 'about-shortcuts', label: 'Горячие клавиши'},
            { id: 'about-info', label: 'О программе'},

        ]
    }


]