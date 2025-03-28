import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import { INews } from './assets/interfaces/INews'
import AddNewsForm from './components/Forms/AddNewsForm/AddNewsForm'
import NewsList from './components/UI/NewsList'

function App() {
  const [news, setNews] = useState<INews[]>(() => {
    const savedNews = localStorage.getItem('news')
    return savedNews ? JSON.parse(savedNews) : [{ id: 1, title: 'Заголовок', description: 'Описание' }]
  })
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news))
  }, [news])

  const handleAddNews = (e: FormEvent) => {
    e.preventDefault()

    const newNews: INews = {
      id: Date.now(),
      title,
      description
    }
    setNews(prev => [...prev, newNews])
    setTitle('')
    setDescription('')
  }

  const handleDelete = (id: number) => {
    setNews(prev => prev.filter((el) => el.id !== id))
  }

  const handleUpdate = (input: INews) => {
    setNews(prev => prev.map((el) => {
      if (el.id === input.id) {
        return input
      }
      return el
    }))
  }

  return (
    <div className='flex flex-col gap-2'>
      <AddNewsForm
        addNews={handleAddNews}
        descriptiom={description}
        setDescription={setDescription}
        setTitle={setTitle}
        title={title}
      />
      <NewsList
        news={news}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}

export default App
