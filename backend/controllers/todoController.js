import {supabase} from '../config/supabase.js'

export const getTodos = async (req, res) => {
  try{
      const {data, error} = await supabase.from('todos').select('*')
    
    if(error) return res.status(500).json({error: error.message})

    return  res.status(200).json({
            success: true,
            message:'Todos Fetched  Successfully',
            data,
        })
  }catch(e){
    return res.status(500).json({error: e.message})
  }
}

export const addTodo = async (req, res) => {
  try{
     const { title } = req.body;
        
      if (!title) {
        return res.status(400).json({ 
            error: 'Title is required'
        });
      }
      const { data, error } = await supabase.from('todos').insert([{ title, completed: false }]);
      if (error) {
        res.status(500).json({
            error: error.message
        });
      } else {
        res.status(200).json({
                success: true,
                message:'Todo Added  Successfully',
                data,
            })
      }

  }catch(e){
    return res.status(500).json({error: e.message})
  }
}


export const updateTodo = async (req, res) => {
  try{
    const { id } = req.params;
    const { title, completed } = req.body;

    const updates = {};
    if (title !== undefined) updates.title = title;
    if (completed !== undefined) updates.completed = completed;
    const { data, error } = await supabase.from('todos').update(updates).eq('id', id);
    if (error) {
      res.status(500).json({
          error: error.message 
      });
    } else {
      res.status(200).json({
              success: true,
              message:'Todo Updated  Successfully',
              data,
      })
    }
  }catch(e){
    return res.status(500).json({error: e.message})
  }
}

export const deleteTodo = async (req, res) => {
  try{
    const {id} = req.params
    
    const {data, error} = await supabase.from('todos').delete().eq('id', id)
    if(error)
         return res.status(500).json({
        error: error.message
        })
    return  res.status(200).json({
            success: true,
            message:'Todo Deleted  Successfully',
            data,
          })  
  }catch(e){
    return res.status(500).json({error: e.message})
  }
}
