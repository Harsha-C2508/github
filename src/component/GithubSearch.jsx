import React from 'react'
import { fetchUsers } from '../reducer/action'
import { useEffect  } from 'react';


const GithubSearch = () => {
    const [query, setQuery] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const [page,setPage] = React.useState(1)
    useEffect(() => {
      setIsLoading(true);
      setIsError(false);
      fetchUsers("")
        .then((res) => {
          setUsers(res.data.items);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
  
    const handleSearch = () => {
      setIsLoading(true);
      setIsError(false);
      fetchUsers(query)
        .then((res) => {
          setUsers(res.data.items);
        })
        .catch((err) => {
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  return (
    <>
      <h1> Github </h1>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button disabled={isLoading} onClick={handleSearch}>
          {isLoading ? "loading" : "SEARCH"}
        </button>
      </div>
      {isError ? "please fill in text" : null}
      <div>
        {users?.map((item) => (
          <div key={item.id}> {item.login} </div>
        ))}
      </div>
      <button disabled={page<=1}  onClick={()=>{
             if(page>1){
                  setPage(page-1)
                }}
        }>Prev</button>
      <button onClick={()=>
            setPage(page+1)
         }>next</button>
    </>
  )
}

export default GithubSearch;