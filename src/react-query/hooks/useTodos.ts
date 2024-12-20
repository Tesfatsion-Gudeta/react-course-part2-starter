import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constansts";
import { Todo } from "../services/todoService";
import todoService from "../services/todoService";


const useTodos = () => {

  return useQuery<Todo[], Error>({
    queryKey:CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
  });
}

export default useTodos