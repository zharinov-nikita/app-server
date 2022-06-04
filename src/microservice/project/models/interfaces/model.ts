export interface IProject {
    _id?: string
    title: string
    offer: string
    status: 'сео' | 'контент' | 'интеграции' | 'настройка' | 'продвижение'
}