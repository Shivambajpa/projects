import React from "react";

const Jindex = () => {
  return (
    <form   className="border-2">
      <div  className="flex flex-col">jindex
      <input type="text" placeholder="ENter your name" className="p-4" />
      <input type="email" placeholder="ENter your email" className="p-4" />
      <input type="age" placeholder="ENter your age" className="p-4" />
      <input type="text" placeholder="ENter your password" className="p-4" />
      </div>
      
      <button  type="submit" className="p-2   text-yellow-400 bg-slate-500"/>Submit</form>
  );
};

export default Jindex;
