
const SubscribeBtn = () => {

    return (
        <div>
            <div className="mt-12 flex justify-center">  
          <div className=" p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Subscribe to our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"   
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button  className="ml-2 px-4 py-2 bg-blue-600 hover:bg-transparent hover:text-blue-600 border hover:border-blue-600 transition-all text-white font-semibold">
                Subscribe 
              </button>
            </form>
            <p className="md:mt-10 mt-5">Stay updated for upcoming offers and courses !</p>
          </div>
        </div>
        </div>
    )
}

export default SubscribeBtn