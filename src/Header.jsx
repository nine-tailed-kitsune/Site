function Header() {
    const menu = {
    news: "Новости",
    photos: "Фото",
    videos: "Видео",
    login: "Вход в аккаунт"
};
    return(
        <div id="header">
            <a href="#news">Новости</a>
            <a href="#photos">Фото</a>
            <a href="#videos">Видео</a>
            <a href="#login">Вход в аккаунт</a>
        </div>
    )
}
export default Header;