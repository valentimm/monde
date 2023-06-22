export function Navbar () {
  return (
    <div className="bg-primary-100 h-28 w-screen p-2">
      <div className="container mx-2 h-full flex justify-between items-center">
        <img src="/monde.svg" className="w-48"/>
         <div className="flex items-center">
          <div className="text-primary-500 mr-4">Home</div>
          <div className="text-primary-500 mr-4">About</div>
          <div className="text-primary-500 mr-4">Contact</div>
        </div>
      </div>
    </div>
  )
}