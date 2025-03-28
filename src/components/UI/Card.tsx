import { INews } from '../../assets/interfaces/INews';

interface IProps {
    info: INews

    handleDelete: (id: number) => void
    handleUpdate: (value: INews) => void
}

const Card = (props: IProps) => {
    return (
        <div className='flex flex-col bg-cyan-200 rounded-2xl p-[20px] gap-1'>
            <input
                value={props.info.title}
                placeholder='title'
                onChange={(e) => props.handleUpdate({...props.info, title: e.target.value})}
            />
            <textarea
                value={props.info.description}
                placeholder='description'
                onChange={(e) => props.handleUpdate({...props.info, description: e.target.value})}
            />
            <button onClick={() => props.handleDelete(props.info.id)}>Удалить</button>
        </div>
    );
};

export default Card;