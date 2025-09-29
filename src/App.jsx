function App(params) {
return (
  <>
    {/* Hello*/}
    <section className="pt-36 pb-24 bg-stone-50">
      <div className="container mx-auto flex flex-col items-center text-center space-y-8">
        <div className="h-16 w-16 bg-amber-100 border border-stone-200 rounded-full flex justify-center items-center text-3xl">
          👋
        </div>
        <h1 className="text-7x1 font-bold text-stone-800">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-stone-500">
          React と Tailwind CSS が好きな、初心者プログラマです！
        </p>
        <a 
          className="bg-emerald-600 py-3 px-6 text-white flex item-center rounded-lg hover:bg-emerald-700" 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
    </>
)  
}

export default App