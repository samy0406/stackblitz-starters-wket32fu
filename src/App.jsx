import campCoffee from "./assets/campcoffee.jpg";

function App(params) {
return (
  <>
    {/* Hero*/}
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

    {/* About */}
    <section id="about" className="w-full bg-white">
      <div className="container mx-auto py-36 max-w-4xl flex items-center">
        <div className="w-1/2">
          <img
            src={campCoffee}
            alt="CampCoffee"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2 pl-6 space-y-8">
          <h2 className="text-5xl font-bold text-stone-800">About</h2>
          <p className="text-stone-500 leading-relaxed text-xl">
            私は、プログラミングを始めて約1年半となる、ビギナーの開発者です。
            <br />
            現在は、React、TypeScript、Tailwind CSS などを使用した、
            フロントエンド 開発のスキルアップに、情熱を注いでいます。
          </p>
          <p className=""></p>

        </div>
      </div>
    </section>

    </>
)  
}

export default App