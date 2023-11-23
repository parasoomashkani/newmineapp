
const sideItem=[
  {
      id:"0",
      labele:"home",
      children:[ {  id:"1",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"2",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"3",
      labele:"ccl1",
      children:[],
      icon:null},
  ]
      ,
      icon:null
  },

  {
      id:"1",
      labele:"ccl1",
      children:[
          {  id:"1",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"2",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"3",
      labele:"ccl1",
      children:[],
      icon:null},
      ],
      icon:null
  },
  {
      id:"2",
      labele:"cool",
      children:[
          {  id:"1",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"2",
      labele:"ccl1",
      children:[],
      icon:null},
      {  id:"3",
      labele:"ccl1",
      children:[],
      icon:null},
      ],
      icon:null
  },
]


const Sidebar = () => {
  return (
    
    <main>
       <ul>
      {sideItem.map((playlist) => (
        <li key={playlist.id}>{playlist.labele}</li>
      ))}
    </ul>
    <div className=" flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 absolute inset-y-0 right-0 top-28  ">
       <div className="mb-2 p-4">
       </div> 
       <div className="mb-2 p-4">
       <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Material Tailwind</h5>
     </div>
     
       <div role="button" tabIndex={0} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
         {sideItem.map((item,id) => (
     
          
            <h4 >{item.labele} {item.icon}</h4>
  
        ))}
       </div>
</div>
     </main>
  )
}

export default Sidebar