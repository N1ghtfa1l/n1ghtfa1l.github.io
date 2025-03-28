import { INews } from '../../assets/interfaces/INews';
import Card from './Card';

interface IProps {
    news: INews[]

    handleDelete: (id: number) => void
    handleUpdate: (value: INews) => void
}

const NewsList = (props: IProps) => {
    return (
        <div className='flex flex-col gap-4'>
            {props.news.map((el) =>
                <Card handleDelete={props.handleDelete}
                    key={el.id}
                    info={el}
                    handleUpdate={props.handleUpdate}
                />
            )}
        </div>
    );
};

export default NewsList;