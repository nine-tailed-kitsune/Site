function Category() {
const categorii = ["Новости", "Рекомендации", "Поиск", "Реакции", "Обновления", "Комментарии"];

return(
    <div className="category">
        <h3>Категории</h3>
        <ul>
            {categorii.map((item, index) => (
                <li key={index}>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
    </div>
)}

export default Category;