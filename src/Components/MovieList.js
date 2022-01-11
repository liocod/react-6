import MovieCard from "./MovieCard";
import { Datas } from "../Assets/Datas";


const MoviList = () =>  {
    return(
        <div>
          {Datas.map((data)=>(
              <MovieCard title = {data.title}
                        poster = {data.posterURL}
                        description = {data.description}
                        url= {data.url}
                />
          ))}
        </div>
    )
}

export default MoviList;