import { Paragraph } from "../../Components/Paragraph"
import { YouTube } from "../../Components/YouTube"

export default function Solutions(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1>Solutions</h1>

            <h2 className="-mb-2">Awarness</h2>
            <Paragraph>
                Awarness is a key factor of everything, 
                and it's the number one step. 
                Without awarness, food insecurity and 
                food scarcity would be a larger issue. 
                This can be such as not knowing what the 
                supply chain is for food and not knowing alternatives 
                to a regular supply chain if it somehow fails. 

                For example, if one major coperation that 
                shutsdown due to bankruptcy, then many communities 
                could have issues getting that one type of food 
                that company manufactured. 
            </Paragraph>

            <h2 className="-mb-2">Technological</h2>
            <Paragraph>
                From Ms.Rice seminar about technology.
            </Paragraph>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                <YouTube url="https://www.youtube.com/embed/RsXLT2z3X8g?si=374o-PKV3NtCwtOX" />
                <YouTube url="https://www.youtube.com/embed/1qegujBS18k?si=yQKeBKXcvM-Sf4aB" />
                <YouTube url="https://www.youtube.com/embed/mFmJAwc4s5I?si=hj_GNnG4B3h0ifB0" />
                <YouTube url="https://www.youtube.com/embed/EyMTgFQ1oYI?si=asOMhq3qtRPilE9G" />
            </div>


        </article>
    </div>
}