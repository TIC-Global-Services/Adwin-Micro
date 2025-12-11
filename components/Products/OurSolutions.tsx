import Image from "next/image";
import Link from "next/link";

const OurSolutions = () => {
  const solutions = [
    {
      image:
        "https://ik.imagekit.io/adwinpower/Adwin%20Digital%20Assets/Products/solar_micro.jpg",
      title: "Solar Solution",
      link: "/products/solar",
    },
    {
      image:
        "https://ik.imagekit.io/adwinpower/Adwin%20Digital%20Assets/Products/automotive_micro.jpg",
      title: "Automotive Solutions",
      link: "/products/automotive",
    },
    {
      image:
        "https://ik.imagekit.io/adwinpower/Adwin%20Digital%20Assets/Products/ess_micro.jpg",
      title: "Energy Storage Solutions",
      link: "/products/ess",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-10">
      <div>
        <h1 className=" text-3xl md:text-5xl font-medium">Our <span className=" text-primary">Products & Solutions</span></h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 px-10 py-10 gap-10">
        {solutions.map((solution, idx) => (
          <div
            key={idx}
            className="bg-[#FFFFFF] border-2 border-[#F0F0F0] w-full rounded-[20px] p-4 flex flex-col gap-4 items-start hover:shadow-[2px_-7px_37.5px_0px_#82978E80] transition-shadow duration-300"
          >
            <Image
              src={solution.image}
              alt=""
              width={400}
              height={400}
              className="w-full h-[220px] sm:h-[260px] md:h-[273px] rounded-[10px] object-cover"
            />
            <h1 className=" text-lg sm:text-xl font-medium py-1">
              {solution.title}
            </h1>
            <Link
              href={solution.link}
              className=" bg-transparent border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolutions;
