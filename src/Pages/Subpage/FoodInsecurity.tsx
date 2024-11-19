import { LinkNewWindow } from "../../Components/Link"
import { Paragraph } from "../../Components/Paragraph"

export default function FoodInsecurity(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1>Food Insecurity</h1>

            <h2>What is Food Insecurity?</h2>
            <Paragraph>
                You may have heard of food scarcity or food insecurity before,
                 but what are they? Food Scarcity concerns lack of food, 
                 whereas food insecurity concerns lack of nutrients. 
                 
                 There are many people who do not have access to healthy food, 
                 whether because of financial, geological, or other problems. 
                 This is food insecurity. 
                 
                 Even though some people may still have access to food, 
                 it may not have the necessary nutritional value.  
            </Paragraph>

            <h2>How Prevalent is Food Insecurity?</h2>
            <Paragraph>
                A little less than 40 million Americans suffer from food insecurity, 
                nearly 12 million of those being children. Worldwide, that number is far larger. 
                
                About 3.1 billion people in total were not able to afford a healthy diet 
                according to “State of Food Security and Nutrition in the World report”. 
                <li><LinkNewWindow href='https://openknowledge.fao.org/bitstreams/f1ee0c49-04e7-43df-9b83-6820f4f37ca9/download'>
                State of Food Security and Nutrition in the World Report</LinkNewWindow></li>
            </Paragraph>

            <h2>What Can I do about it? </h2>
            <Paragraph>
                There are many things that you can do to help to help with food insecurity in your local area. 
                You can donate food to local volunteer or non-profit organizations that distribute food. 
                
                You can also encourage people close to you to eat healthier foods with the necessary nutrients, 
                as there are some people who have the ability to eat healthier but don't.  
            </Paragraph>
        </article>
    </div>
}