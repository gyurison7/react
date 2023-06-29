const User = ({ item, deleteButtonHandler }) => {
    return (
        <div key={item.id} className="squre-style">
            {item.age}-{item.name}
            <button onClick={() => deleteButtonHandler(item.id)}>삭제</button>
        </div>
    )
}

export default User;