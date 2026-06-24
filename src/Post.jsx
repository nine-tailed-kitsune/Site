function Post() {
    return(
        <div>
            <div className="gruppa">
            <img src="/icon.png" width="30" height="30"/>
            <span>Картинки природы</span></div>
            <img src="/forest.jpg" width="600" height="300"/>
            <div className="post">Лес - это сложная экологическая система и природное сообщество, <br />
            основу которого составляют деревья. Он объединяет на одной территории <br />
            взаимодействующие живые организмы (растения, грибы, животных, <br />
            микроорганизмы) и факторы неживой природы (почву, воздух, воду).</div>
            <br />
            <div className="comment"><textarea type="text" name="comment" className="comment1"/>
            <button>Отправить</button></div>
            <br />

            <div className="gruppa">
            <img src="/icon.png" width="30" height="30"/>
            <span>Картинки природы</span></div>
            <img src="/sea.jpg" width="600" height="300"/>
            <div className="post">Море - это часть Мирового океана, обособленная сушей или подводными <br />
            возвышениями. Оно отличается от открытого океана особым климатом, <br />
            температурой, солёностью воды, а также уникальной флорой и фауной.</div>
            <br />
            <div className="comment"><textarea type="text" name="comment" className="comment1"/>
            <button>Отправить</button></div>
            <br />
        </div>
        
    )
}
export default Post;