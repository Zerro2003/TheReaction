export default function Sim(props:any){
  
    return(
    <div className="w-64 border rounded-lg shadow-md overflow-hidden font-sans">
    <div className="h-24 bg-green-500"></div>
    <div className="p-4">
      <h2 className="text-xl font-semibold">{props.name}</h2>
      <p className="text-gray-600">{props.age}</p>
      <p className="text-gray-600">{props.email}</p>
      <p className="text-gray-600">{props.phone}</p>
    </div>
  </div>

    )
}