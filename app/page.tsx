

 export default function Home(){
  return(
    <div>
      <nav className="flex bg-black text-white w-full h-8">
        <div>Logo</div>
      
         <div className="flex justify-end space-x-4 w-3/5">
          <div>Home</div>
          <div>About</div>
          <div>Content</div>
         </div>
      </nav>
     <br/>
      <ul className=" flex h-40 px-6 space-x-4">
        <li className="w-1/3 bg-green-400">card1</li>   
        <li className="w-1/3 bg-red-600">card2</li>
        <li className="w-1/3 bg-yellow-500">card3</li>
      </ul>
     <br/> 
      <ul className=" flex h-60 px-6 space-x-4">
        <li className="w-1/2 bg-blue-700">card4</li>
        <li className="w-1/2 bg-pink-500">card5</li>
      </ul>
    </div>
  )
}
