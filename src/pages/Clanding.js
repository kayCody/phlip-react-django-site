import React from "react";
import burger from '../images/burger.jpg';
import Fd from '../images/Fd.jpg';
import waves from '../images/waves.jpg';
import fd2 from '../images/fd2.jpg';
import wave from '../images/wave.png';
import Jollof from '../images/Jollof.jpg';
import Pizzaman from '../images/pizzaman.png';

const Clanding = ({color}) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div>
        <section> 
          <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <img src={burger} class="block w-full" style={{ height:"700px" }} alt="Motorbike Smoke"/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
                <img src={wave} className="w-full absolute z-10 h-32" alt="wave" />
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src={fd2} class="block   w-full" style={{ height:"700px" }}alt="Mountaintop"/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item relative float-left w-full">
                <img src={Fd} class="block w-full" style={{ height:"700px" }} alt="Woman Reading a Book"/>
                <div class="carousel-caption hidden md:block absolute text-center">
                  <h5 class="text-xl">Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 h-96">
              <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 1"></button>
              <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 1"></button>
            </div>
            <button class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="prev">
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselDarkVariant" data-bs-slide="next">
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section class="bg-gray-200 p-5 bg-gradient-to-r from-black to-red-800">
          <div>
            <div class="p-2">
              <h1 className="font-bold text-3xl text-brand-accent text-red-500 text-center lg:text-4xl">Our Categories</h1>
            </div>
            <div class="sm:container sm:mx-auto">
              <div class="p-10 justify-content-center">
                <div class="flex flex-wrap" id="tabs-id">
                  <div class="w-full">
                    <div class="flex flex-row gap-10 uppercase text-xl font-backslash justify-center">
                      <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                          role="tablist">
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg hover:text-red-700 rounded block leading-normal " +
                                (openTab === 1
                                  ? "text-red-600 bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                              }}
                              data-toggle="tab"
                              href="#breakfast"
                              role="tablist">
                              Breakfast
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg hover:text-red-700 rounded block leading-normal " +
                                (openTab === 2
                                  ? "text-red-600 bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                              }}
                              data-toggle="tab"
                              href="#lunch"
                              role="tablist"
                            >
                              Lunch
                            </a>
                          </li>
                          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                              className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg hover:text-red-700 rounded block leading-normal " +
                                (openTab === 3
                                  ? "text-red-600 bg-" + color + "-600"
                                  : "text-" + color + "-600 bg-white")
                              }
                              onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                              }}
                              data-toggle="tab"
                              href="#dinner"
                              role="tablist"
                            >
                              Dinner
                            </a>
                          </li>
                        </ul>
                    </div>

                    <div className={openTab === 1 ? "block" : "hidden"} id="breakfast">
                      <div class="grid grid-cols-5 p-2 gap-6">
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Banku with Tilapia</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 25.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={openTab === 2 ? "block" : "hidden"} id="lunch">
                      <div class="grid grid-cols-5 p-2 gap-5">
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    

                    <div className={openTab === 3 ? "block" : "hidden"} id="dinner">
                      <div class="grid grid-cols-5 p-2 gap-5">
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-500 text-md font-italic">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                        <div class="p-5 bg-white w-64 rounded-lg shadow-xl">
                          <img src={Jollof} class="w-40 h-40 ml-7 rounded-full shadow-lg"/> 
                          <strong class="text-red-600 text-xl mt-5">Jollof Rice</strong>
                          <p class="text-gray-700">amazingly and suprizingly delicious</p>
                          <div class="flex flex-row gap-10 mt-2">
                            <p class="text-red-700 text-md font-impact">$ 5.00</p>
                            <button type="submit" class="shadow-lg rounded-lg bg-red-500 text-white  w-32 hover:bg-red-700">Add Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
       
        
        <section class="p-2">
          <div>
            <h1 className="font-bold text-3xl text-brand-accent text-red-500 text-center lg:text-4xl mt-5">Our Food Vendors & Partners</h1>

            <div class="flex flex-row gap-6 p-5  shadow-lg rounded-xl justify-content-center">
                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class="">
                    <img src={Pizzaman} alt="ima"/>
                  </div>
                </div>

                <div class="justify-center p-2">
                  <div class=" content-center">
                    <img src={Pizzaman} alt="ima"/>
                    <p class="text-md text-center">Pizzaman Ghana</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        <section class="">
          <div class="mt-5">
            <h3 class="form-check-label inline-block text-red-800 text-3xl text-center" for="feedback">Send us a feedback</h3>
            <div class="p-5 w-full flex align-content-center container mx-auto">
              <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
                <form class="w-full">
                  <div class="form-group mb-6">
                    <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Name" name="name" placeholder="Full Name"/>
                  </div>
                  <div class="form-group mb-6">
                    <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" name="email" placeholder="Email address"/>
                  </div>
                  <div class="form-group mb-6">
                    <textarea class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                  </div>
                  <div class="form-group form-check text-center mb-6">
                    <input type="checkbox" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" id="exampleCheck87"/>
                    <label class="form-check-label inline-block text-gray-800" for="feedback">Send us a feedback</label>
                  </div>
                  <button type="submit" class="w-40 px-6 py-2.5 bg-gradient-to-r from-black to-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Send Feedback</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r  from-black to-red-700">
          <div>
            <div>
              <h3 class="text-white text-3xl shadow-xl text-center">Customers Feedback</h3>
              <div class="w-full">
                <div class="p-3 flex flex-row gap-6">
                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022 </small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                  </div>
                  
                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                  </div>

                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                  </div>

                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                  </div>
                  
                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                  </div>

                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                  </div>

                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star "></span>
                    <span class="fa fa-star "></span>
                  </div>

                  <div class="bg-white shadow-xl  w-64 p-2 rounded-xl">
                    <h6 class="text-xl font-poppins text-gradiant-to-r from-black to-red-500">Ernest</h6>
                    <small>Date Posted: 12 Dec, 2022</small>
                    <hr/>
                    <article class="">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </article>
                    <strong class="">Customer Rating...</strong>
                    <br/>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star text-orange-600"></span>
                    <span class="fa fa-star"></span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Clanding;


