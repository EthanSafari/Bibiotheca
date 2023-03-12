const ListItems = ({ arr }) => {
    return (
        arr.map(item => (
            <div key={item.id} className='associated-list-items'>
                {item.name}
            </div>
        ))
    );
};

export default ListItems;
