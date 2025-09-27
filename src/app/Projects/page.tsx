import { Button } from "@/components/ui/button"
import Image from "next/image"
import { title } from "process"
export default function Projects() {

    return (
        <div className="mx-auto max-w-xl w-full px-4 md:px-8">
            <div className="grid grid-cols-2 justify-between py-20 border-b-1 border-b-white/10">
                <div className="leading-10">
                    <p>Projects</p>
                    <h2 className="font-bold text-4xl">We have completed many amazing projects that you will not believe</h2>
                </div>
                <div className="flex justify-end items-center">
                    <select name="label" id="" className="border-1 px-4 py-1 text-white/40 border-white/10">
                        <option value="Technology">Technology</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
                {
                    [{ assetName: "MobileAppIllustration", name: "Mobile" }, { assetName: "DesktopAppIllustration", name: "Desktop" }, { assetName: "DesktopAppIllustration", name: "Desktop" }, { assetName: "MobileAppIllustration", name: "Mobile" }].map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-full">
                            <Image
                                className="w-full mb-10"
                                src={`/assets/images/${item.assetName}.svg`}
                                width={300}
                                height={300}
                                alt={item.assetName}
                            />

                            <h3 className="font-bold text-xl mb-3">
                                The {item.name} App Landing Page
                            </h3>
                            <p className="mb-6">A landing page for {item.name} app</p>

                            <Button variant="outline" className="rounded-full">
                                Detail
                            </Button>
                        </div>
                    ))
                }

            </div>
            <Button className="mx-auto mb-20 block" size={'lg'} variant={"highlight"}>Load More</Button>
        </div>
    )
}