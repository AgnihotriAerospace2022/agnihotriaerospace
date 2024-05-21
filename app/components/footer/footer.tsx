import "./footer.css"  ;
import logo from "@/public/images/logo_white.png"
import Input from "./FooterInput";
import Items from "./FooterItems";
import Icons from "./FooterICons";
import Image from "next/image";

const width ='100%';
const height = '100%'  ;
export default function Footer () 
{
    return(
        <>
            <div className="flex bg-gray-950   pt-12 ">
                
                    <div className="basis-1/3 lg:basis-1/3 -mr-5 lg:-my-20">
                    <img src={"/images/logo_white.png"} className="inline-block l" alt='logo'/>
                    </div>
                    
                    <div className="basis-5">
                        <div className="border-solid border-slate-500 h-28 lg:h-44 w-[2px] border-x-2 rounded-lg" >

                        </div>
                    </div>

                    
                        <div className="basis-1/3 lg:basis-1/3 md:basis-1/5 lg:my-6 lg:ml-24">
                            <Input></Input>
                        </div>
                   

                    <div className="basis-5">
                        <div className="border-solid border-slate-500 h-28 lg:h-44 w-[2px] border-x-2 rounded-lg" >

                        </div>
                    </div>

                    
                <div className="basis-1/3  md:basis-1/5 lg:basis-1/3 flex flex-col">
                             <div className="navigate">
                                <Items></Items>
                            </div>

                    <div className="basis-5">
                        <div className="border-solid hidden lg:inline-block h-1 rounded-lg border-slate-500 bg-slate-500 mx-4 my-2 w-[350px] "
                         >
                                                                                    
                        </div>
                    </div>

                            <div className="icons">
                                <Icons></Icons>
                            </div>
                </div>
                    
            </div>
        </>
    )  ;

}
