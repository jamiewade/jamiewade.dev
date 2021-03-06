import React from "react"
import gitHub from '../images/github.svg'

const today = new Date();

export default function Footer() {
    return (
        <footer className={"pt-8 text-gray-400 text-center text-sm"}
                data-aos={"fade-zoom-in"}
                data-aos-easing={"ease-in-back"}
                data-aos-delay={"3000"}
                data-aos-duration={"750"}
                data-aos-offset={"0"}>
            <div className={"container"}>
                <div className={"grid gap-3 border-t border-gray-100 py-6 md:flex md:justify-between"}>
                    <div className={"md:order-2"}>
                        <p>Built with &hearts; using Gatsby & Tailwind</p>
                    </div>

                    <div className={"md:order-1"}>
                        <p>&copy; {today.getFullYear()} Jamie Wade. All rights reserved</p>
                    </div>

                    <div className={"md:order-3"}>
                        <a href={"https://github.com/jamiewade"}
                           rel={"noreferrer"}
                           target={"_blank"}>
                            <img src={gitHub}
                                 alt={"Follow me on GitHub"}
                                 className={"block mx-auto w-6"}
                                 title={"Follow me on GitHub"}
                                 loading={"lazy"} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
