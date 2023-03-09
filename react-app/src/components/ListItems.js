const ListItems = ({ arr }) => {
    return (
        arr.map(item => (
            <div key={item.id}>
                {item.name}
            </div>
        ))
    );
};

export default ListItems;