import React from 'react'

const Dashboard = () => {
    return (
        <>
          
            <section
                className="container mt-4 mx-auto flex flex-col items-center px-8 py-5 sm:flex-row-reverse sm:px-12 bg-sky-700 rounded-md shadow-sm text-white"
            >
                <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:pl-4 md:pl-16 grid justify-items-center ">
                    <img
                        alt="Hanging out with friends"
                        className="rounded-lg sm:rounded-br-[80px] sm:rounded-tl-[120px] h-96 shadow-lg  "
                        src="https://images.pexels.com/photos/2307221/pexels-photo-2307221.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                </div>
                <div className="mr-4 w-full text-center sm:w-1/2 sm:text-left">
                    <h1
                        className="mb-6 text-3xl font-bold leading-tight dark:text-slate-50 md:text-4xl"
                    >
                        Hangout, work or just relax? Got it!
                    </h1>
                    <p className="mb-2 leading-relaxed  dark:text-slate-40">
                        We provide indoor &amp; outdoor space with delighted yet affordable foods
                        &amp; beverages.
                    </p>
                    <ul
                        className="mb-8 flex flex-col items-center space-y-1 dark:text-slate-400 sm:items-start"
                    >
                        <li className="flex items-end">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                                className="mr-2 text-orange-300"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    // stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 12l5 5L20 7"
                                ></path>
                            </svg>
                            <span>Various types of coffee beans</span>
                        </li>
                        <li className="flex items-end">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                                className="mr-2 text-orange-300"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    // stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 12l5 5L20 7"
                                ></path>
                            </svg>
                            <span>Coworking area</span>
                        </li>
                        <li className="flex items-end">
                            <svg
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                                width="1.2em"
                                height="1.2em"
                                className="mr-2 text-orange-300"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    // stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m5 12l5 5L20 7"
                                ></path>
                            </svg>
                            <span>Meeting room</span>
                        </li>
                    </ul>
                    {/* <div className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
                        <button
                            className="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2"
                        >
                            Open menu
                        </button>
                        <button
                            className="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2"
                        >
                            Explore services
                        </button>
                    </div> */}
                </div>
            </section>
            <section className="container mx-auto px-8 py-10 sm:px-12">
                <h1
                    className="sm:mb-7 mb-24 w-full text-center text-4xl font-bold dark:text-slate-50 sm:mx-auto sm:w-4/5"
                >
                    Your favorite cafe in town
                </h1>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                //  stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"
                                ></path>
                                <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></path>
                            </g>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">Working space</div>
                    </div>
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                //  stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"
                                ></path>
                                <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></path>
                            </g>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">Affordable price</div>
                    </div>
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                //  stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0"
                                ></path>
                                <path d="M3.515 9.515c4.686-4.687 12.284-4.687 17 0"></path>
                            </g>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">High speed internet</div>
                    </div>
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                //  stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 14a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5-1v4m8-12v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5"
                            ></path>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">Smoking area</div>
                    </div>
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM10 16h6"
                                ></path>
                                <path
                                    d="M11 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 8h3m-3 4h3m-3 4h3"
                                ></path>
                            </g>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">Meeting room</div>
                    </div>
                    <div
                        className="flex cursor-pointer flex-col items-center justify-start rounded-lg bg-slate-50 py-5 px-6 text-center text-slate-800 shadow-slate-200 transition hover:bg-white hover:shadow-lg hover:shadow-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-700 dark:hover:shadow-slate-800"
                    >
                        <svg
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            width="1.2em"
                            height="1.2em"
                            className="h-8 w-8"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path
                                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                                ></path>
                                <path d="M9 16V8h4a2 2 0 0 1 0 4H9"></path>
                            </g>
                        </svg>
                        <div className="mt-3 text-sm font-semibold">Huge parking lot</div>
                    </div>
                </div>
            </section>
          

        </>
    )
}

export default Dashboard