
import './App.css'
import { useGetAllTodosQuery } from './apps/api/apiSlice'


type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {


  const {isLoading,data,error,isError,isSuccess} = useGetAllTodosQuery()

  // console.log(data)
  if(isLoading){ 
    return <h3>Loading . . .</h3>
  }
  if(isError){ 
    return <h3>{error}</h3>
  }

  return (
    <>
      <h2>Todos</h2>
      { 
        data?.map((todo:Todo,i:number)=> { 
          return <div key={todo.id}>
            <h3 style={{border:"1px solid purple",padding:"10px"}}>{todo.title}</h3>
          </div>
        })
      }
    </>
  )
}

export default App
