import Image from "next/image"
function Banner() {
  return (
    <div className=" relative h-[300px] sm: [400px] lg:[500px] xl:[600px] 2xl:[700px]">
        <Image 
        src="https://links.papareact.com/0fm" objectFit="cover" layout="fill" />
        <div className="absolute top-1/2 text-center w-full">
          <p className="text-sm sm:text-lg">bitch hoe nigga im from brinx</p>
          <button className="text-purple-500 bg-white px-10 py-4  hover:shadow-xl shadow-md rounded-full font-bold my-3 active:scale-90 transition duration-150">iam flexible</button>

        </div>
    </div>
  )
}

export default Banner