import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../services/actions/TodoAction';

function Todos() {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    // Call the action function and dispatch the result
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h2>Todos App</h2>
      {isLoading && <p>Loading...</p>}
      {error && <h3>{error.message}</h3>}

      <section>
        {todos &&
          todos.map((todo) => {
           const {id, title} = todo;
          return (
            <article key={id}>
              <h4>{id}</h4>
              <h4>{title}</h4>
            </article>
          
          )
            }  )}
        
      </section>
    </div>
  );
}

export default Todos;
