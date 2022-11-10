import img from "../../assets/images/other/chef.jpg";

const About = () => {
  return (
    <section className="bg-gray-50 my-10">
	<div className="container flex flex-col-reverse lg:flex-row mx-auto max-w-screen-xl px-4 md:px-6 ">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-sky-200 text-gray-900">
			<h3 className="font-serif font-bold text-4xl text-yellow-600 leading-snug">What Is A Personal Chef ?</h3>
            <p className="text-gray-600">A personal chef will prepare meals for private clients in home kitchens or commercial kitchens depending on their client's needs or preferences. This can be done daily or the meals can be cooked, frozen and reheated weekly.</p>
            <p className="text-gray-600">During this time, the chef will prepare meal(s) specified by the client’s dietary requirements or desired menu selection. Each meal will be stored with instructions so that the client will be able to heat the food or it can be served fresh. Most personal chefs prepare food to be reheated unless they are hired for an event or group.</p>
		</div>
		<div className="lg:w-1/2 xl:w-3/5">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={img} alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
  );
};

export default About;
