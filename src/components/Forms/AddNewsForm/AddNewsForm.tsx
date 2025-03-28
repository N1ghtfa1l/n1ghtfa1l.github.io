import React, { Dispatch } from 'react';


interface IProps {
    title: string
    descriptiom: string

    addNews: (e: React.FormEvent) => void
    setTitle: Dispatch<string>
    setDescription: Dispatch<string>

}

const AddNewsForm = (props: IProps) => {
    return (
        <form onSubmit={props.addNews} className='flex flex-col gap-1 border-black border-1 p-[10px] rounded-2xl'>
            <span>Добавьте новость</span>
            <input
                type="text"
                placeholder='Заголовок'
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)} />
            <input
                type="text"
                placeholder='Описание'
                value={props.descriptiom}
                onChange={(e) => props.setDescription(e.target.value)} />
            <button disabled={!props.title || !props.descriptiom} type='submit'>Добавить</button>
        </form>
    );
};

export default AddNewsForm;