'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react'

interface FormData {
  points: string;
  notes: string;
}
interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<FormData>({points: '', notes: ''})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name] : e.target.value });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!data.points.trim() || !data.notes.trim()) {
      alert("Please fill in all fields"); // Validation feedback
      return;
    }
    onSubmit(data);
    setData({ points: '', notes: '' }); // Clear the forms
  }

  return (
    <div className='flex justify-center items-center '>
      <form 
        className='bg-slate-500 rounded shadow-lg p-4 m-4 flex flex-col space-y-4'
        onSubmit={handleSubmit}
      >
        <label htmlFor='points' className=''>LP Loss / Gain</label>
        <input 
          type='number'
          name='points'
          className='p-2 rounded text-black'
          value={data.points}
          onChange={handleChange}
        />
        <label htmlFor='notes'>Notes About Game</label>
        <textarea
          name="notes"
          className='p-2 rounded text-black'
          value={data.notes}
          onChange={handleChange}
        />
        <button 
          type='submit'
          className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
        >
          Add Game
        </button>
      </form>
    </div>
    
  )
}

export default Form;